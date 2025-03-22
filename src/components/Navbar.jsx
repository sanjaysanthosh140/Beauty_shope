import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Avatar, 
  Button, 
  Tooltip, 
  MenuItem,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
  FaCut, 
  FaHome, 
  FaCalendarAlt, 
  FaUserFriends, 
  FaShoppingBag, 
  FaPhone, 
  FaBars, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter,
  FaHeart
} from 'react-icons/fa';
import { MdSpa, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const pages = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Services', icon: <MdSpa /> },
    { name: 'Appointments', icon: <FaCalendarAlt /> },
    { name: 'Our Team', icon: <FaUserFriends /> },
    { name: 'Shop', icon: <FaShoppingBag /> },
    { name: 'Contact', icon: <FaPhone /> },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ 
      background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <FaCut size={28} style={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#fff' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            GLAMOUR GLOW
          </Typography>

          {/* Mobile menu */}
          {isMobile ? (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <FaBars />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    p: 2,
                    background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
                    color: 'white'
                  }}>
                    <Typography variant="h6" sx={{ fontFamily: 'Playfair Display, serif' }}>
                      GLAMOUR GLOW
                    </Typography>
                    <IconButton color="inherit" onClick={toggleDrawer(false)}>
                      <MdClose />
                    </IconButton>
                  </Box>
                  <Divider />
                  <List>
                    {pages.map((page) => (
                      <ListItem button key={page.name}>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                          {page.icon}
                        </ListItemIcon>
                        <ListItemText primary={page.name} />
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                  <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <IconButton color="primary">
                      <FaFacebook />
                    </IconButton>
                    <IconButton color="primary">
                      <FaInstagram />
                    </IconButton>
                    <IconButton color="primary">
                      <FaTwitter />
                    </IconButton>
                  </Box>
                </Box>
              </Drawer>
            </Box>
          ) : null}

          {/* Logo for mobile screens */}
          <Box sx={{ flexGrow: isMobile ? 1 : 0, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <FaCut size={20} />
              GLAMOUR GLOW
            </Typography>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  mx: 1,
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 1,
                  fontFamily: 'Poppins, sans-serif',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s'
                  }
                }}
              >
                {page.icon}
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Book Now button and social icons */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Button
              variant="contained"
              startIcon={<FaHeart />}
              sx={{
                mr: { xs: 0, md: 2 },
                display: { xs: 'none', sm: 'flex' },
                backgroundColor: 'white',
                color: '#ff758c',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#fff9',
                }
              }}
            >
              Book Now
            </Button>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <IconButton sx={{ color: 'white' }}>
                <FaInstagram />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <FaFacebook />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <FaTwitter />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
