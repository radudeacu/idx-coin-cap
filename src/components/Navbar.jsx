import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { BsCcCircleFill } from 'react-icons/bs';
import './Navbar.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/exchanges" onClick={toggleDrawer(false)}>
        <ListItemText primary="Exchanges" />
      </ListItem>
      <ListItem button component={Link} to="/news" onClick={toggleDrawer(false)}>
        <ListItemText primary="News" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" color="default">
      <Toolbar className="toolbar">
        <Link to='/' className="navbar-brand">
          <BsCcCircleFill className='icon' />
          <Typography variant="h6" className="title">
            Coin <span className='blue'>Cap</span>
          </Typography>
        </Link>
        <div className="spacer" />
        <div className="desktop-menu">
          <Link to='/exchanges' className="nav-link">
            Exchanges
          </Link>
          <Link to='/news' className="nav-link">
            News
          </Link>
          <Link to='/contact' className="nav-link">
            Contact
          </Link>
        </div>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className="mobile-menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} classes={{ paper: 'drawer-paper'}}>
        {drawerList}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
