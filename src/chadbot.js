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
import logo from "./logo2.png"
import arrow from "./arrow.svg"
import favicon from "./logo1.png"
import burger from "./burger.svg"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import maker from "./Maker.jpg"
import check from "./check-single.svg"
import { Card } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import OpenAI from 'openai';
import { PowerInputOutlined } from '@mui/icons-material';
//import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_BASE_URL,
  dangerouslyAllowBrowser: true
});

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
  const [age, setAge] = React.useState('');
  const [input, setInput] = React.useState('');
  const [contract, setContract] = React.useState();
  const [contractname, setContractname] = React.useState();
  const [contractversion, setContractversion] = React.useState();
  const [report, setReport] = React.useState([]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const textchange = (event) => {
    setInput(event.target.value);
  };
  console.log(input)

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  let api
  let scan

  const ethereum = ["api.etherscan.io", "6ECTU8BIUKCK1UW63TK76XTBEYSWXMD6YN",];
  const base = ["api.basescan.org", "J8YB8BPVZKR4VGBZG13K6JM255GYETMP3W",];
  const arbitrum = ["api.arbiscan.io", "YJGB67G7QHSSNJAYMQF72V822D2B5TZ7UX",];

  async function fetch(){
    console.log("NULL", input)
    console.log("NULL", api)
    console.log("NULL", scan)
    console.log('https://' + scan + '/api?module=contract&action=getsourcecode&address=' + input + '&apikey=' + api + '')
    await axios.get('https://' + scan + '/api?module=contract&action=getsourcecode&address=' + input + '&apikey=' + api + '')
      .then(function (response) {
        // handle success
        console.log(response.data.result[0]);
        setContract(response.data.result[0].SourceCode)
        setContractname(response.data.result[0].ContractName)
        setContractversion(response.data.result[0].CompilerVersion)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

      

      getFormat()

  }

  //console.log('contract',contract)

  let mew

  async function getFormat(){
    console.log('Ai optimizing')
    const chatCompletion = await openai.chat.completions.create({
      //Find the vulnerabilities in this smart contract
      messages: [{ role: 'user', content: ('What are some vulnerabilities in this contract', contract) }],
      //how can this smart contract be exploited'
      //how can the above smart contract be exploited
      //Find the vulnerabilities in this smart contract
      //What are some vulnerabilities in this contract
      //messages: [{ role: 'user', content: ('Convert to markdown', contract) }],
      //messages: [{ role: 'user', content: {contract} }],
      //messages: [{ role: 'user', content: 'What are vulnerabilities in this contract'  }],
      //model: 'gpt-3.5-turbo',
      model: 'gpt-3.5-turbo-16k',
      //stream: true,
    });

  
    console.log('GPT', chatCompletion.choices[0].message.content);
    setReport(chatCompletion.choices[0].message.content)
    //mew = chatCompletion.choices[0].message.content
  }

  //getFormat()

  async function getVul(){
    const chatCompletion = await openai.chat.completions.create({
      //messages: [{ role: 'user', content: 'Convert to markdown' }],
      messages: [{ role: 'user', content: {contract} }],
      //messages: [{ role: 'user', content: 'What are vulnerabilities in this contract'  }],
      model: 'gpt-3.5-turbo',
    });
  
    console.log('GPT', chatCompletion.choices);
  }

  async function getVul1(){
    const chatCompletion = await openai.chat.completions.create({
      //messages: [{ role: 'user', content: 'Convert to markdown' }],
      //messages: [{ role: 'user', content: {contract} }],
      messages: [{ role: 'user', content: 'What are vulnerabilities in this contract'  }],
      model: 'gpt-3.5-turbo',
    });
  
    console.log('GPT', chatCompletion.choices);
  }

  async function getVul3(){
    await getFormat();
    //await getVul();
    //await getVul1();
  }

  //console.log('contract', contract)


  //fetch()

  if(age == 'ethereum'){
    //console.log(cars)
    api = ethereum[1]
    scan = ethereum[0]
  }
  if(age == 'arbitrum'){
    //console.log(cars)
    api = arbitrum[1]
    scan = arbitrum[0]
  }
  if(age == 'base'){
    //console.log(cars)
    api = base[1]
    scan = base[0]
  }
  console.log(api)
  console.log(scan)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //console.log(age)

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
            <div className='nav-items none'>
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
            <div class="d-flex pt-lg-0 pt-5 px-4 px-md-0 alcenter ">
              <a href="" target="_blank" className="connect-btn d-lg-block d-none">
                <span className="connect">v2 Coming Soon</span> 
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
                  <span className="connect">v2 Coming Soon</span> 
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
                className='none'
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
        <Container maxWidth="lg" className='mtp2'>
          <Grid container className='jus'>
            <Grid item xs={12} sm={6} md={6} lg={5} className=''>
              <div className='Chad'>
                <div className='chadtitle'>
                  <Typography className=''>Overseer Bot</Typography>
                </div>
                <div className='chadselect'>
                  <Typography className=''>Select your EVM network</Typography>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Network</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Select Network"
                        onChange={handleChange1}
                      >
                        <MenuItem value={'ethereum'}>Ethereum</MenuItem>
                        <MenuItem value={'arbitrum'}>Arbitrum</MenuItem>
                        <MenuItem value={'base'}>Base</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <Typography className='pun'>Enter your contract address</Typography>
                <div className='chadinput'>
                  <TextField id="outlined-basic" label="Contract Address" variant="outlined" onChange={textchange}/>
                  <Button variant="contained" onClick={fetch}>Go</Button>
                </div>
                <div className='chadfeed'>
                  <Typography className=''>Audit Reports</Typography>
                </div>
                <div className='chadReport'>
                  <Typography className=''>Contract Name: {contractname}</Typography>
                  <Typography className=''>Contract Version: {contractversion}</Typography>
                  <Typography className=''>Report: 
                  <br></br>
                  </Typography>
                  {report}
                </div>
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
