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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import maker from "./Maker.jpg"
import check from "./check-single.svg"
import { Card } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';

const drawerWidth = 240;
const navItems = ['TWITTER', 'DISCORD', 'DOCS'];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <div class="d-flex pt-lg-0 pt-5 px-4 px-md-0 alcenter">
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
        <Container maxWidth="lg" className='mtp2'>
          <Grid container className=''>
            <Grid item xs={12} sm={12} md={12} lg={12} className=''>
              <div className='Scroll'>
                <div className='scroll-header'>
                  <div className='tabs'>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="New" {...a11yProps(0)} />
                        <Tab label="Top" {...a11yProps(1)} />
                        <Tab label="(3,3)" {...a11yProps(2)} />
                      </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0} className="scrolltrue">
                      <div className='essential'>
                        <p className=''>Keytrend</p>
                        <p className=''>24h Volume</p>
                      </div>
                      <Card className='scrollitem'>
                        <div className='scrollimg'>
                          <img className='' src={maker}></img>
                        </div>
                        <div className='scrollbody'>
                          <Typography variant='p' className='fs-12 font0'>UnstableDev</Typography>
                          <Typography variant='p' className='fs- font0'>@UnstableDev</Typography>
                          <Typography variant='p' className='fs-12 font0'>10.1k Holders</Typography>
                        </div>
                        <div className='scrollvolume'>
                          <Typography variant='p' className='fs-12 font0'>10 ETH</Typography>
                        </div>
                        <div className='scrollbuy none'>
                          <Button variant="contained">Buy</Button>
                        </div>
                      </Card>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1} className="scrolltrue">
                    <div className='essential'>
                        <p className=''>Keytrend</p>
                        <p className=''>24h Volume</p>
                      </div>
                      <Card className='scrollitem'>
                        <div className='scrollimg'>
                          <img className='' src={maker}></img>
                        </div>
                        <div className='scrollbody'>
                          <Typography variant='p' className='fs-12 font0'>UnstableDev</Typography>
                          <Typography variant='p' className='fs- font0'>@UnstableDev</Typography>
                          <Typography variant='p' className='fs-12 font0'>10.1k Holders</Typography>
                        </div>
                        <div className='scrollvolume'>
                          <Typography variant='p' className='fs-12 font0'>10 ETH</Typography>
                        </div>
                        <div className='scrollbuy none'>
                          <Button variant="contained">Buy</Button>
                        </div>
                      </Card>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                      <div className='nub'>
                        <Typography className=''>Coming Soon</Typography>
                      </div>
                    </CustomTabPanel>
                  </div>
                  <div className='scoptions'></div>
                </div>
              </div>
            </Grid>
          </Grid> 
        </Container>
        <div className='mobnav'>
          <div className='mobnav-flex'>
            <Divider></Divider>
            <div className='mobnav-item'>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  href='/'
                  sx={{ mr: 2, display: { sm: 'none' } }}
                  className=''
                >
                  <StyleRoundedIcon />
              </IconButton>
              <Typography className=''>Scroll</Typography>
            </div>
            <div className='mobnav-item'>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  href='/unclaimedscroll'
                  sx={{ mr: 2, display: { sm: 'none' } }}
                  className=''
                >
                  <StyleRoundedIcon />
              </IconButton>
              <Typography className=''>Xscroll</Typography>
            </div>
            <div className='mobnav-item'>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  href='/cities'
                  sx={{ mr: 2, display: { sm: 'none' } }}
                  className=''
                >
                  <StyleRoundedIcon />
              </IconButton>
              <Typography className=''>Cities</Typography>
            </div>
            <div className='mobnav-item'>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  href='/circle'
                  sx={{ mr: 2, display: { sm: 'none' } }}
                  className=''
                >
                  <StyleRoundedIcon />
              </IconButton>
              <Typography className=''>Circle</Typography>
            </div>
            <div className='mobnav-item'>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  href='/profile'
                  sx={{ mr: 2, display: { sm: 'none' } }}
                  className=''
                >
                  <StyleRoundedIcon />
              </IconButton>
              <Typography className=''>Profile</Typography>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
