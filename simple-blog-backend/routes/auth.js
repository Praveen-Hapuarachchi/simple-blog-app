const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authenticateUser  = require('../middleware/authenticateUser');

const router = express.Router();

// JWT Secret and Token Expiry
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use your secure secret key
const JWT_EXPIRY = '1h'; // Token expiry time

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Validate request data
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if user already exists
    const existingUser  = await User.findOne({ email });
    if (existingUser ) {
      return res.status(400).json({ message: 'User  already exists' });
    }

    // Create new user
    const newUser  = new User({
      firstName,
      lastName,
      email,
      password, // Save the plain password; it will be hashed by the 'pre' middleware
    });

    // Save user to database
    const savedUser  = await newUser .save();
    
    // Respond to the client with user details (excluding password)
    const { _id, firstName: savedFirstName, lastName: savedLastName, email: savedEmail } = savedUser ;
    res.status(201).json({ 
      message: 'User  registered successfully!',
      user: {
        _id,
        firstName: savedFirstName,
        lastName: savedLastName,
        email: savedEmail,
      },
    });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });    
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate request data
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide both email and password' });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if password is correct
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    );

    // Respond to the client
    res.status(200).json({
      message: 'Successfully logged in',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update User Profile Route
router.put('/update', authenticateUser , async (req, res) => {
  const { firstName, lastName, email, password } = req.body; // Include password in request body
  const userId = req.user.userId; // From the token

  // Validate request data
  if (!firstName && !lastName && !email && !password) {
    return res.status(400).json({ message: 'Please provide information to update.' });
  }

  try {
    // Find the user in the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User  not found' });
    }

    // Update the fields that are provided in the request body
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;

    // If a new password is provided, hash it and update the password field
    if (password) {
      if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
      }
      user.password = await bcrypt.hash(password, 10); // Hash the new password
    }

    // Save the updated user document
    const updatedUser  = await user.save();

    // Respond with the updated user details (excluding password)
    res.status(200).json({
      message: 'User  profile updated successfully',
      user: {
        _id: updatedUser ._id,
        firstName: updatedUser .firstName,
        lastName: updatedUser .lastName,
        email: updatedUser .email,
      },
    });
  } catch (error) {
    console.error('Error during update:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;