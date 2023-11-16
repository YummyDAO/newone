import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css';
import logo from "./logo.svg"
import arrow from "./arrow.svg"
import favicon from "./favicon.png"
import burger from "./burger.svg"
import maker from "./Maker.jpg"
import check from "./check-single.svg"

const drawerWidth = 240;
const navItems = ['TWITTER', 'DISCORD', 'DOCS'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/*<Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>*/}
      <Link href="#" className='mr2'>
        <img src={logo}></img>
      </Link>
      {/*<Divider />*/}
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed" className='fixed'>
        <Toolbar>
          {/*<Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>*/}
          <div className='innernav'>
            <Link href="#" className='mr1'>
              <img src={logo}></img>
            </Link>
            <div className='nav-items'>
              <Link href="#" underline="none" color="inherit" className='css-1fn6sd1'>
                <Typography >TWITTER</Typography>
              </Link>
              <Link href="#" underline="none" color="inherit" className='css-1fn6sd1'>
                <Typography >DISCORD</Typography>
              </Link>
              <Link href="#" underline="none" color="inherit" className='css-1fn6sd1'>
                <Typography >DOCS</Typography>
              </Link>
            </div>
            <div class="d-flex pt-lg-0 pt-5 px-4 px-md-0">
              <a href="#" target="_blank" className="connect-btn d-lg-block d-none">
                <span className="connect">Coming Soon</span> 
                <span className="arrow">
                  <img src={arrow} alt=""></img>
                </span>
              </a>
            </div>
          </div>
            
          {/*<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
            </Box>*/}
          <div className='mobile'>
              <Link href="#" className=''>
                <img src={favicon}></img>
              </Link>
              <div class="d-flex pt-lg-0 pt-5 px-4 px-md-0">
                <a href="#" target="_blank" className="connect-btn d-lg-block d-none">
                  <span className="connect">TVL: 1400.34 ETH</span> 
                  <span className="arrow none">
                    <img src={arrow} alt="" className='none'></img>
                  </span>
                </a>
              </div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
            {/*<MenuIcon />*/}
            <img src={burger}/>
          </IconButton>
          </div>
        </Toolbar>
          <Divider className='divide'/>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Container maxWidth="lg" className='mtc'>
          <Grid container className=''>
            <Grid item xs={12} sm={12} md={12} lg={12} className=''>
            <div className='coming'>
              <img className='' src={maker}></img>
              <Typography variant='p' className='fs-12'> AVAILABLE ON BETA LAUNCH</Typography>
            </div>
            </Grid>
          </Grid> 
        </Container>
        {/*<div className='coming'>
          <img className='' src={maker}></img>
          <Typography variant='p' className='fs-12'> WOULD BE INCLUDED ON BETA LAUNCH</Typography>
        </div>*/}
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
