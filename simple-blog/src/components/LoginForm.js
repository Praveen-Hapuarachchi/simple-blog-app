import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Fade } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api-helper';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { result, status } = await loginUser({ email, password });

    if (status) {
      console.log('Login successful:', result);
      localStorage.setItem('jwtToken', result.token);
      localStorage.setItem('firstName', result.user.firstName);
      localStorage.setItem('lastName', result.user.lastName);
      localStorage.setItem('Id', result.user.id);
      navigate('/welcome');
    } else {
      console.error('Login failed:', result);
      alert(result.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)',
        padding: 2,
      }}
    >
      <Fade in timeout={1000}>
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            backgroundColor: 'rgba(111, 10, 212, 0.96)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            padding: 4,
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#333',
              letterSpacing: '0.5px',
              mb: 3,
            }}
          >
            Welcome Back
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: '#333',
              mb: 4,
            }}
          >
            Sign in to continue
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: '#f9f9f9',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#fff',
                    boxShadow: '0 0 0 2px rgba(110, 142, 251, 0.1)',
                  },
                  '&.Mui-focused': {
                    boxShadow: '0 0 0 2px rgba(110, 142, 251, 0.3)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                  fontWeight: 500,
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#6e8efb',
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: '#f9f9f9',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#fff',
                    boxShadow: '0 0 0 2px rgba(110, 142, 251, 0.1)',
                  },
                  '&.Mui-focused': {
                    boxShadow: '0 0 0 2px rgba(110, 142, 251, 0.3)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                  fontWeight: 500,
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#6e8efb',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #f44336 0%, #d32f2f 100%)', // Changed to red gradient
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(244, 67, 54, 0.3)', // Matching red shadow
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(90deg, #e53935 0%, #c62828 100%)', // Darker red on hover
                  boxShadow: '0 6px 20px rgba(244, 67, 54, 0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <LoginIcon sx={{ mr: 1 }} />
              Sign In
            </Button>
          </form>
        </Box>
      </Fade>
    </Container>
  );
}

export default LoginForm;