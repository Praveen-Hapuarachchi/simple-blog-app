import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Avatar, Typography, Box, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  // State for user's profile details
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: '',
  });

  // Get data from localStorage (if available)
  useEffect(() => {
    const firstName = localStorage.getItem('firstName') || '';
    const lastName = localStorage.getItem('lastName') || '';
    const email = localStorage.getItem('email') || '';
    const profilePicture = localStorage.getItem('profilePicture') || '';

    setProfile({
      firstName,
      lastName,
      email,
      profilePicture,
    });
  }, []);

  const handleSave = () => {
    // Update localStorage or send data to an API to save changes
    localStorage.setItem('firstName', profile.firstName);
    localStorage.setItem('lastName', profile.lastName);
    localStorage.setItem('email', profile.email);
    localStorage.setItem('profilePicture', profile.profilePicture);

    // Navigate to the dashboard
    navigate('/dashboard');
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
        paddingTop: '80px', // To account for the navbar
      }}
    >
      <Fade in timeout={1000}>
        <Box
          sx={{
            width: '100%',
            maxWidth: 450,
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
              mb: 2,
            }}
          >
            Your Profile
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Avatar
              src={profile.profilePicture}
              sx={{
                width: 120,
                height: 120,
                border: '4px solid #6e8efb',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Box>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: '#333',
              fontWeight: 500,
              mb: 4,
            }}
          >
            {profile.firstName} {profile.lastName}
          </Typography>

          <form>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              value={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
              sx={{
                mb: 2,
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
              value={profile.lastName}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
              sx={{
                mb: 2,
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
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              sx={{
                mb: 2,
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
              label="Profile Picture URL"
              variant="outlined"
              fullWidth
              value={profile.profilePicture}
              onChange={(e) => setProfile({ ...profile, profilePicture: e.target.value })}
              sx={{
                mb: 3,
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
              variant="contained"
              fullWidth
              onClick={handleSave}
              sx={{
                py: 1.5,
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #6e8efb 0%, #a777e3 100%)',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: '0 4px 15px rgba(110, 142, 251, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(90deg, #5f7de8 0%, #9466d0 100%)',
                  boxShadow: '0 6px 20px rgba(110, 142, 251, 0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Save Changes
            </Button>
          </form>
        </Box>
      </Fade>
    </Container>
  );
}

export default Profile;