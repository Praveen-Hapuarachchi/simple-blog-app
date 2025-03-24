import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { loginUser } from '../api-helper'; // Import the login API helper

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    const { result, status } = await loginUser({ email, password });

    if (status) {
      console.log('Login successful:', result);

      // Store the token, first name, and last name in localStorage
      localStorage.setItem('jwtToken', result.token);
      localStorage.setItem('firstName', result.user.firstName);
      localStorage.setItem('lastName', result.user.lastName);
      localStorage.setItem('Id', result.user.id);

      navigate('/welcome'); // Navigate to the WelcomePage on successful login
    } else {
      console.error('Login failed:', result);
      alert(result.message || 'Login failed. Please check your credentials.'); // Show error to the user
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
          marginTop: 10,
          marginBottom: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LoginIcon sx={{ marginRight: 1 }} />
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default LoginForm;
