import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Register', path: '/signup' },
  { name: 'Articles', path: '/articles' },
  { name: 'Categories', path: '/categories' },
  { name: 'Contact', path: '/contact' },
];
const settings = [
  { name: 'Profile', path: '/profile' },
  { name: 'Account', path: '/account' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Logout', path: '/' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavClick = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  const handleSettingClick = (setting) => {
    if (setting.name === 'Logout') {
      localStorage.clear();
      navigate('/');
    } else {
      navigate(setting.path);
    }
    handleCloseUserMenu();
  };

  // Get first and last name from localStorage
  const firstName = localStorage.getItem('firstName') || '';
  const lastName = localStorage.getItem('lastName') || '';

  // Get initials from the first and last name (e.g., "PH", "SJ")
  const initials = firstName && lastName ? firstName[0] + lastName[0] : '';

  const handleLogoClick = () => {
    if (firstName && lastName) {
      navigate('/welcome'); // Navigate to welcome page if logged in
    } else {
      navigate('/'); // Navigate to home page if not logged in
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(90deg, #1a237e 0%, #2c387e 100%)', // Navy blue gradient to match footer
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        zIndex: 1300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', mr: 2, cursor: 'pointer' }}
            onClick={handleLogoClick} // Add onClick handler
          >
            <img
              src="/assets/logo.png"
              alt="Logo"
              style={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(360deg)',
                },
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                ml: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1.6rem',
                color: '#fff',
                textDecoration: 'none',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#03a9f4', // Light blue hover effect to match footer
                },
              }}
            >
              Simple Blogging App
            </Typography>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleNavClick(page.path)}
                  sx={{
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(3, 169, 244, 0.1)', // Light blue hover effect to match footer
                    },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: 'center',
                      color: '#333',
                      fontWeight: 500,
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu Items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavClick(page.path)}
                sx={{
                  my: 2,
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#03a9f4', // Light blue hover effect to match footer
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* User Avatar and Menu */}
          {firstName && lastName ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.95)',
                      color: '#1a237e', // Navy blue to match the footer
                      fontWeight: 600,
                      border: '2px solid #fff',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {initials}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: '45px',
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  },
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => handleSettingClick(setting)}
                    sx={{
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(3, 169, 244, 0.1)', // Light blue hover effect to match footer
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: 'center',
                        color: '#333',
                        fontWeight: 500,
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {setting.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;