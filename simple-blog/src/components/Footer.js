import React from 'react';
import { Box, Container, IconButton, Typography, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
  return (
    <Box
      component="footer"
      
      sx={{
        backgroundColor: '#1a237e', // Navy Blue color for the footer
        color: 'white',
        padding: '20px 0',
        width: '100%',
        marginTop: 'auto',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          {/* Contact Information - Left aligned */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
              <MailOutlineIcon sx={{ marginRight: '8px' }} /> Email: info@example.com
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ marginRight: '8px' }} /> Phone: +123 456 7890
            </Typography>
          </Grid>

          {/* Social Media Icons - Center aligned */}
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <IconButton
              color="inherit"
              href="https://github.com/"
              target="_blank"
              aria-label="GitHub"
              sx={{
                '&:hover': {
                  color: '#03a9f4', // Light Blue color on hover
                },
                fontSize: '36px', // Larger icons
                margin: '0 12px', // Add space between the icons
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
              sx={{
                '&:hover': {
                  color: '#03a9f4', // Light Blue color on hover
                },
                fontSize: '36px', // Larger icons
                margin: '0 12px', // Add space between the icons
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
              sx={{
                '&:hover': {
                  color: '#03a9f4', // Light Blue color on hover
                },
                fontSize: '36px', // Larger icons
                margin: '0 12px', // Add space between the icons
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.youtube.com/"
              target="_blank"
              aria-label="YouTube"
              sx={{
                '&:hover': {
                  color: '#03a9f4', // Light Blue color on hover
                },
                fontSize: '36px', // Larger icons
                margin: '0 12px', // Add space between the icons
              }}
            >
              <YouTubeIcon />
            </IconButton>
          </Grid>

          {/* Footer Text - Right aligned */}
          <Grid item xs={12} sm={4} display="flex" justifyContent="flex-end">
            <Typography variant="body2" textAlign="right">
              &copy; 2025 Simple Blogging App. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
