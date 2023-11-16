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
import './App.css';
import logo from "./logo.svg"
import arrow from "./arrow.svg"
import favicon from "./logo12.png"
import burger from "./burger.svg"
import maker from "./Maker.jpg"
import check from "./check-single.svg"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';

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
      <AppBar component="nav" position="fixed" className='fixed '>
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
              <Link href="#" className='lu2'>
                <img src={logo}></img>
              </Link>
              <div class="d-flex pt-lg-0 pt-5 px-4 px-md-0 none">
                <a href="#" target="_blank" className="connect-btn d-lg-block d-none">
                  <span className="connect">Coming Soon</span> 
                  <span className="arrow">
                    <img src={arrow} alt=""></img>
                  </span>
                </a>
              </div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                className='none'
              >
            {/*<MenuIcon />*/}
            <SearchRoundedIcon />
          </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                className='none'
              >
            <PersonAddAlt1RoundedIcon />
          </IconButton>
          </div>
        </Toolbar>
          <Divider className='divide'/>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          className=''
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
        <div className='pt6'>
          <div className='container'>
            <div className='row'>
              <div className='col1'>
                <Typography variant='p' className='fs-12 none'> WELCOME TO SCROLLTECHSOFI</Typography>
                <Typography variant="h1" className='fss mb2'>
                  <br></br>
                  <Typography variant='span' className='fss1'>WELCOME BACK</Typography>
                </Typography>
                <Typography variant='p' className='fs-12'>Join the SocialFi revolution on Scroll Chain</Typography>
                <div className='token-img'>
                  <img className='' src={maker}></img>
                  <Button variant="contained" href='/scroll' className='join-btn'>SignUp</Button>
                </div>
                <div className='along none'>
                <div className=''>
                  <img className='' src={check}></img> &nbsp;
                    <Typography variant='p'>
                    Trade unclaimed scrolls.
                    </Typography>
                  </div>
                <div className=''>
                  <img className='' src={check}></img> &nbsp;
                    <Typography variant='p'>
                    No wallet or deposit is required..
                    </Typography>
                  </div>
                  <div className='none'>
                  <img className='' src={check}></img> &nbsp;
                    <Typography variant='p'>
                    Swap your keys for another keys.
                    </Typography>
                  </div>
                  <div className=''>
                  <img className='' src={check}></img> &nbsp;
                    <Typography variant='p'>
                    Creators can earn up to 6% of trading fees.
                    </Typography>
                  </div>
                  <div className='none'>
                  <img className='' src={check}></img> &nbsp;
                    <Typography variant='p'>
                    Earn 10% dividends from platform generated fees.
                    </Typography>
                  </div>
                  <div className='none'>
                  <img className='' src={check}></img> &nbsp;
                    <Typography variant='p'>
                     Play games with your scrollholders like lottery and spin the wheel.
                    </Typography>
                  </div>
                </div>
                <div className='nim1'>
                  <Divider></Divider>
                  <Typography className=''>Built by the ScrollTech Labs Inc.</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
