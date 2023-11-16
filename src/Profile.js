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
import favicon from "./logo1.png"
import burger from "./burger.svg"
import maker from "./Maker.jpg"
import check from "./check-single.svg"
import { Card } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

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
              <Link href="#" className='lu1'>
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
        <Container maxWidth="lg" className='mtop'>
          <Grid container className=''>
            <Grid item xs={12} sm={12} md={12} lg={12} className=''>
              <div className='profile'>
                <div className='profile-head'>
                  <div className='profile-img'>
                    <img className='' src={maker}></img>
                  </div>
                  <div className='profile-text'>
                    <div className='profile-title'>
                      <Typography variant='p' className='fs-12 font0'>UnstableDev</Typography>
                    </div>
                    <div className='profile-sub'>
                      <Typography variant='p' className='fs-12 font0'>Holders: 0</Typography>

                      <Typography variant='p' className='fs- font0'>Price: 0 ETH</Typography>
                    </div>
                  </div>
                  <div className='menu'>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    className=''
                  >
                  {/*<MenuIcon />*/}
                  <SettingsOutlinedIcon />
                </IconButton>
                  </div>
                </div>
                <Card className='profile-body'>
                  <div className='earnings'>
                    <Card className='dividends'>
                      <Typography variant='p' className='fs-12 font0'>MAKER FEE</Typography>
                      <Typography variant='p' className='fs-12'>10 ETH</Typography>
                    </Card>
                    <Card className='creator'>
                      <Typography variant='p' className='fs-12 font0'>DIVIDEND</Typography>
                      <Typography variant='p' className='fs-12 font0'>10 ETH</Typography>
                    </Card>
                  </div>
                  <div className='holding'>
                    <Card className='hold1'>
                      <Typography variant='p' className='fs-12 font0'>PORTFOLIO </Typography>
                      <Typography variant='p' className='fs-12 font0'>10 ETH</Typography>
                    </Card>
                  </div>
                  <div className='wallet'>
                    <Card className='nameless'>
                      <div className='walletup'>
                        <div className='icon23'>
                        <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="end"
                          onClick={handleDrawerToggle}
                          sx={{ mr: 2, display: { sm: 'none' } }}
                          className='vutu'
                        >
                          {/*<MenuIcon />*/}
                          <AccountBalanceWalletRoundedIcon />
                        </IconButton>
                        </div>
                        <div className='fullic'>
                          <div className='ichead'>
                            <Typography variant='p' className='fs-12 font0'>My Wallet</Typography>
                            <Typography variant='p' className='fs-12 font0'>Balance</Typography>
                          </div>
                          <div className='ictext'>
                            <div className='ictext1'>
                              <Typography variant='p' className='fs-12 font0'>0xre5999999000....</Typography>
                              <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                sx={{ mr: 2, display: { sm: 'none' } }}
                                className='ictext2'
                              >
                                {/*<MenuIcon />*/}
                                <ContentCopyRoundedIcon />
                              </IconButton>
                            </div>
                            <Typography variant='p' className='fs-12 font0 nudu'>0 ETH</Typography>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className='points'>
                   <Card className='points1'>
                      <Typography variant='p' className='fs-12 font0'>TOKEN POINTS </Typography>
                      <Typography variant='p' className='fs-12 font0'> 10,000 pts</Typography>
                   </Card>
                  </div>
                  <div className='ref'>
                    <Card className=''>
                      <div className='nup'>
                        <Typography className='font0'>REFERRAL</Typography>
                        <div className='lik'>
                          <Link href="#">Link</Link>
                        </div>
                        <div className='ref-details'>
                          <div className=''>
                            <Typography variant='p' className='fs-12 font0'>REFERRAL FEES</Typography>
                            <Typography variant='p' className='fs-12 font0'>10 ETH</Typography>
                          </div>
                          <div className=''>
                            <Typography variant='p' className='fs-12 font0'>REFERRAL COUNT</Typography>
                            <Typography variant='p' className='fs-12 font0'>10</Typography>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
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
