const jwt = require('jsonwebtoken');

// Middleware to authenticate the user using JWT token
const authenticateUser  = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key');
    req.user = decoded;  // Attach user info to request object
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Error verifying token:', error.message);
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticateUser;