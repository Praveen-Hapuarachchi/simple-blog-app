import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Avatar, Typography, Box } from '@mui/material';
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
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');
    const profilePicture = localStorage.getItem('profilePicture'); // Assuming the profile picture is stored as a URL or base64 string
    
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
    
    // Optionally navigate to another page or show a success message
    navigate('/dashboard');
  };

  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Typography variant="h4">Profile</Typography>
            
            {/* Display Profile Picture */}
            <Avatar src={profile.profilePicture} sx={{ width: 100, height: 100, marginBottom: 2 }} />
            
            {/* Display Full Name */}
            <Typography variant="h6">
                {profile.firstName} {profile.lastName}
            </Typography>

            {/* Form for updating profile */}
            <form sx={{ marginTop: 2 }}>
                <TextField
                label="First Name"
                fullWidth
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                sx={{ marginTop: 4 , marginBottom: 2 }}
                />
                <TextField
                label="Last Name"
                fullWidth
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                sx={{ marginBottom: 2 }}
                />
                <TextField
                label="Email"
                fullWidth
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                sx={{ marginBottom: 2 }}
                />
                
                {/* Optional: Profile Picture Upload */}
                <TextField
                label="Profile Picture URL"
                fullWidth
                value={profile.profilePicture}
                onChange={(e) => setProfile({ ...profile, profilePicture: e.target.value })}
                sx={{ marginBottom: 2 }}
                />

                <Button variant="contained" onClick={handleSave}>Save</Button>
            </form>
        </Box>
      
    </Container>
  );
}

export default Profile;
