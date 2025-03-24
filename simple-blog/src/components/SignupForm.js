import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signupUser } from '../api-helper'; // Import the signupUser function
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate(); // Create navigate instance


  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

     // Prepare data for signup
     const userData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };
      
  
      // Call the signupUser function from api-helper.js
      const { result, status } = await signupUser(userData);
  
      if (status) {
        console.log('Signup Successful:', result); // Log full response to console
      alert(result.message || 'Signup successful!');
      // Example: Log specific user details
      console.log('User Details:', result.user);
      // You can also redirect or perform other actions here

      // Navigate to the login page after successful signup
      navigate('/login');
      
      } else {
        alert(result);
      }
    };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          boxShadow: 2,
          borderRadius: 2,
          backgroundColor: 'white',
          marginTop: 10, // Added margin from top
          marginBottom: 3, // Added margin from bottom
        }}
      >
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <AccountCircleIcon sx={{ marginRight: 1 }} /> {/* Icon inside the button */}
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default SignupForm;
