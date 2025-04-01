import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Fade } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signupUser } from '../api-helper';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

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
      console.log('Signup Successful:', result);
      alert(result.message || 'Signup successful!');
      console.log('User Details:', result.user);
      navigate('/login');
    } else {
      alert(result);
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
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
            Create Account
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: '#666',
              mb: 4,
            }}
          >
            Join us today
          </Typography>
          <form onSubmit={handleSignup}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
                background: 'linear-gradient(90deg, #6e8efb 0%, #a777e3 100%)',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(110, 142, 251, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(90deg, #5f7de8 0%, #9466d0 100%)',
                  boxShadow: '0 6px 20px rgba(110, 142, 251, 0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <AccountCircleIcon sx={{ mr: 1 }} />
              Sign Up
            </Button>
          </form>
        </Box>
      </Fade>
    </Container>
  );
}

export default SignupForm;