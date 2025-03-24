import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Button from 'react-bootstrap/Button'; // Import Button from react-bootstrap
import Modal from 'react-bootstrap/Modal'; // Import Modal from react-bootstrap
import Form from 'react-bootstrap/Form'; // Import Form from react-bootstrap
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Plus, List, LogOut, Sparkles } from 'lucide-react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const WelcomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('Id');
    // Navigate to home page
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4" style={{ marginTop: '80px' }}>
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center space-y-3 pb-6">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-24">
            Welcome Back! <Sparkles className="inline h-8 w-8 text-yellow-400" />
          </CardTitle>
          <p className="text-gray-600 mt-4">
            You've successfully logged in to your account
          </p>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button 
            variant="primary"
            size="lg" // Large button
            className="w-40 d-flex align-items-center justify-content-center mb-3"
            onClick={handleCreatePost}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Plus className="h-6 w-6 mr-2" />
            Create New Post
          </Button>
          
          <Button 
            variant="success"
            size="lg" // Large button
            className="w-40 d-flex align-items-center justify-content-center mb-3"
            onClick={handleViewPosts}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <List className="h-6 w-6 mr-2" />
            View All Posts
          </Button>
          
          <Button 
            variant="danger"
            size="lg" // Large button
            className="w-40 d-flex align-items-center justify-content-center mb-3"
            onClick={handleLogout}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <LogOut className="h-6 w-6 mr-2" />
            Logout
          </Button>
        </CardContent>
      </Card>
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
        <Typography sx={{ p: 2 }}/>
      </Popover>

      <Modal show={showModal} onHide={handleCloseModal} style={{ marginTop: '80px' }}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPostTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter post title" />
            </Form.Group>
            <Form.Group controlId="formPostContent" className="mt-3">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter post content" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WelcomePage;
