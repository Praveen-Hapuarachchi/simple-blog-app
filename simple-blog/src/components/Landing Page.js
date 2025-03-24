import React from 'react';
import { Box, Button, Container, Grid, Typography, Paper, ButtonGroup } from '@mui/material'; // Removed unused Icon import
import { styled } from '@mui/system';
import { AccountCircle, Login } from '@mui/icons-material'; // Importing icons

import { Link } from 'react-router-dom'; // Importing Link from react-router-dom


// Hero Section
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/assets/Background_Images.png)', // Path to your image
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '100vh',
  padding: theme.spacing(8, 2),
  borderRadius: '20px', // Add border radius to the background section
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)', // Optional: Add a soft shadow for better visuals
  overflow: 'hidden', // Ensure child elements stay within the rounded edges
}));

// Hero Text
const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  backgroundColor: 'rgba(1, 10, 30, 0.95)', // Semi-transparent background
  color: '#fff', // White text color
  padding: theme.spacing(1, 2), // Padding around the text
  borderRadius: '10px', // Rounded edges for the text background
}));

// Hero Button Group with SignUp, Login and Explore Features
const HeroButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  marginTop: theme.spacing(3),  // Add spacing between buttons and HeroText
  display: 'flex',
  gap: theme.spacing(2),  // Add space between buttons
}));

// Hero Button with Icon
const HeroButtonWithIcon = styled(Button)(({ theme }) => ({
  backgroundColor: '#1a237e',
  color: 'white',
  padding: theme.spacing(1, 4),
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
}));

// Features Section
const FeaturesSection = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 0),
}));

// Feature Box
const FeatureBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  background: 'linear-gradient(135deg, #f5f5f5, #e3f2fd)', // Add gradient background
}));


// Feature Title
const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

// Feature Description
const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: '#777',
}));

function LandingPage() {
  return (
    <div style={{ marginTop: '80px' }}>
      {/* Hero Section */}
      <HeroSection>
        <HeroText variant="h2" style={{ marginTop: '1px' }}>
          Welcome to Simple Blogging App
          <br />
          Discover amazing stories, blogs, and more.
        </HeroText>
        {/* Button Group */}
        <HeroButtonGroup>          
        <HeroButtonWithIcon component={Link} to="/signup">
            <AccountCircle style={{ marginRight: '8px' }} />
            Sign Up
          </HeroButtonWithIcon>

          <HeroButtonWithIcon component={Link} to="/login">
            <Login style={{ marginRight: '8px' }} />
            Login
          </HeroButtonWithIcon>
        </HeroButtonGroup>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <FeatureBox>
              <FeatureTitle variant="h4">
                Easy to Use
              </FeatureTitle>
              <FeatureDescription>
                Our intuitive interface makes blogging easier than ever. Create and share your content with just a few clicks.
              </FeatureDescription>
            </FeatureBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureBox>
              <FeatureTitle variant="h4">
                Multiple Categories
              </FeatureTitle>
              <FeatureDescription>
                Browse blogs across various categories including technology, lifestyle, and more.
              </FeatureDescription>
            </FeatureBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureBox>
              <FeatureTitle variant="h4">
                Join the Community
              </FeatureTitle>
              <FeatureDescription>
                Engage with like-minded individuals and share your ideas with the world.
              </FeatureDescription>
            </FeatureBox>
          </Grid>
        </Grid>
      </FeaturesSection>
    </div>
  );
}

export default LandingPage;
