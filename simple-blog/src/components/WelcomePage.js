import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Box, Fade, Typography } from '@mui/material';
import { Plus, List, LogOut, Sparkles } from 'lucide-react';
import Popover from '@mui/material/Popover';

const WelcomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('Id');
    navigate('/');
  };

  const handleCreatePost = () => {
    setShowModal(true);
  };

  const handleViewPosts = () => {
    console.log('Navigating to view posts...');
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
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
            Welcome Back! <Sparkles className="inline h-8 w-8 text-yellow-400" />
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: '#666',
              mb: 4,
            }}
          >
            You've successfully logged in to your account
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="primary"
              onClick={handleCreatePost}
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              style={{
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #6e8efb 0%, #a777e3 100%)',
                border: 'none',
                padding: '12px 0',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(110, 142, 251, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(90deg, #5f7de8 0%, #9466d0 100%)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(90deg, #6e8efb 0%, #a777e3 100%)')
              }
            >
              <Plus className="h-6 w-6 mr-2" />
              Create New Post
            </Button>
            <Button
              variant="success"
              onClick={handleViewPosts}
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              style={{
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #34d399 0%, #10b981 100%)',
                border: 'none',
                padding: '12px 0',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(52, 211, 153, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(90deg, #2ab87a 0%, #0a9f6b 100%)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(90deg, #34d399 0%, #10b981 100%)')
              }
            >
              <List className="h-6 w-6 mr-2" />
              View All Posts
            </Button>
            <Button
              variant="danger"
              onClick={handleLogout}
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              style={{
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #f87171 0%, #ef4444 100%)',
                border: 'none',
                padding: '12px 0',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(248, 113, 113, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(90deg, #e55e5e 0%, #dc2626 100%)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = 'linear-gradient(90deg, #f87171 0%, #ef4444 100%)')
              }
            >
              <LogOut className="h-6 w-6 mr-2" />
              Logout
            </Button>
          </Box>
        </Box>
      </Fade>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{
          inert: !open,
        }}
      >
        <Typography sx={{ p: 2 }} />
      </Popover>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPostTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post title"
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px rgba(110, 142, 251, 0.3)')}
                onBlur={(e) => (e.target.style.boxShadow = 'none')}
              />
            </Form.Group>
            <Form.Group controlId="formPostContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter post content"
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px rgba(110, 142, 251, 0.3)')}
                onBlur={(e) => (e.target.style.boxShadow = 'none')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            style={{
              borderRadius: '8px',
              background: '#d1d5db',
              border: 'none',
              padding: '10px 20px',
              fontWeight: 500,
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#b0b5ba')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#d1d5db')}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleCloseModal}
            style={{
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #6e8efb 0%, #a777e3 100%)',
              border: 'none',
              padding: '10px 20px',
              fontWeight: 500,
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = 'linear-gradient(90deg, #5f7de8 0%, #9466d0 100%)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = 'linear-gradient(90deg, #6e8efb 0%, #a777e3 100%)')
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Box>
  );
};

export default WelcomePage;