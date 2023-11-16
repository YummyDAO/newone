import React, { useEffect, useState } from 'react';
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
import TextField from '@mui/material/TextField';
import useSWR from 'swr'
import {ZeroAddress, ethers, providers} from "ethers";

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

const CONTRACT_ADDRESS1 = '0xa485D474Ae93324d127d78E4Ef554ad787BE3d1f';
const CONTRACT_ADDRESS = '0x0A4Cea2DEF9F90A471f280277AF0b40D4736B255';
const contractAbi1 = [{"inputs":[{"internalType":"address","name":"uniswapRouterAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"LP_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNISWAP_ROUTER_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mainContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lpTokenAddress","type":"address"}],"name":"setLPTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"}],"name":"setMainContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlockBuy","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const contractAbi = [{"inputs":[{"internalType":"address","name":"uniswapRouterAddress","type":"address"},{"internalType":"address","name":"CAROLTokenAddress","type":"address"},{"internalType":"address","name":"lpTokenAddress","type":"address"},{"internalType":"address","name":"defaultUpline","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountETH","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"LiquidityAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":true,"internalType":"uint8","name":"bondType","type":"uint8"},{"indexed":true,"internalType":"uint8","name":"bondIndex","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isRebond","type":"bool"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"NewBond","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":true,"internalType":"address","name":"upline","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"NewUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":true,"internalType":"uint8","name":"bondIndex","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"ReBond","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":true,"internalType":"address","name":"upline","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"RefPayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Sell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":true,"internalType":"uint8","name":"bondIndex","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountETH","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"StakeBond","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":true,"internalType":"uint8","name":"bondIndex","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"BOND_ACTIVATIONS","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"BOND_FREEZE_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"BOND_FREEZE_PERIODS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_UPLINE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LP_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFERRAL_DEPTH","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_LEVELS_MILESTONES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_LEVELS_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFERRAL_TURNOVER_DEPTH","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNISWAP_ROUTER_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"bondType","type":"uint8"}],"name":"activateBondType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"bonds","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"creationTime","type":"uint256"},{"internalType":"uint256","name":"freezePeriod","type":"uint256"},{"internalType":"uint256","name":"profitPercent","type":"uint256"},{"internalType":"uint256","name":"stakeAmount","type":"uint256"},{"internalType":"uint256","name":"stakeTime","type":"uint256"},{"internalType":"uint256","name":"collectedTime","type":"uint256"},{"internalType":"uint256","name":"collectedReward","type":"uint256"},{"internalType":"uint256","name":"stakingRewardLimit","type":"uint256"},{"internalType":"bool","name":"isClosed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint8","name":"bondType","type":"uint8"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"changePriceBalancerPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokensAmount","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"bondType","type":"uint8"}],"name":"deactivateBondType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokensAmount","type":"uint256"}],"name":"getETHAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getHoldBonusPercent","outputs":[{"internalType":"uint256","name":"bonusPercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getLiquidityBonusPercent","outputs":[{"internalType":"uint256","name":"bonusPercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLiquidityGlobalBonusPercent","outputs":[{"internalType":"uint256","name":"bonusPercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenLiquidity","outputs":[{"internalType":"uint256","name":"liquidityETH","type":"uint256"},{"internalType":"uint256","name":"liquidityERC20","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getTokensAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getUIData","outputs":[{"components":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint8","name":"refLevel","type":"uint8"},{"internalType":"uint8","name":"bondsNumber","type":"uint8"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"totalInvested","type":"uint256"},{"internalType":"uint256","name":"liquidityCreated","type":"uint256"},{"internalType":"uint256","name":"totalRefReward","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"refTurnover","type":"uint256"},{"internalType":"uint256","name":"lastActionTime","type":"uint256"},{"internalType":"address[]","name":"referrals","type":"address[]"},{"internalType":"uint256[10]","name":"refs","type":"uint256[10]"},{"internalType":"uint256[10]","name":"refsNumber","type":"uint256[10]"}],"internalType":"struct Models.User","name":"user","type":"tuple"},{"internalType":"uint256","name":"userTokensBalance","type":"uint256"},{"internalType":"uint256","name":"userHoldBonus","type":"uint256"},{"internalType":"uint256","name":"userLiquidityBonus","type":"uint256"},{"internalType":"uint256","name":"globalLiquidityBonus","type":"uint256"},{"internalType":"bool[5]","name":"bondActivations","type":"bool[5]"},{"internalType":"address[]","name":"userReferrals","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"},{"internalType":"uint256","name":"tokensAmount","type":"uint256"}],"name":"influencerBond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokensAmount","type":"uint256"}],"name":"rebond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokensAmount","type":"uint256"}],"name":"sell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"bondIdx","type":"uint8"}],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8","name":"swaps","type":"uint8"}],"name":"swap","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8","name":"bondIdx","type":"uint8"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"userBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint8","name":"refLevel","type":"uint8"},{"internalType":"uint8","name":"bondsNumber","type":"uint8"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"totalInvested","type":"uint256"},{"internalType":"uint256","name":"liquidityCreated","type":"uint256"},{"internalType":"uint256","name":"totalRefReward","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"refTurnover","type":"uint256"},{"internalType":"uint256","name":"lastActionTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]

function DrawerAppBar(props) {
  //const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [rewards, setRewards] = React.useState(0);
  const [level, setLevel] = React.useState();
  const [TVL, setTVL] = React.useState('');
  const [Invites, setInvites] = React.useState('');
  const [currentAccount, setCurrentAccount] = React.useState('');
  const [Tliquidity, setTliquidity] = React.useState('');


  const connectWallet = async () => {
    try {
        const { ethereum } = window;
  
        if (!ethereum) {
            alert("Get MetaMask -> https://metamask.io/");
            return;
        }
  
        // Fancy method to request access to account.
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    
        // Boom! This should print out public address once we authorize Metamask.
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
    } catch (error) {
        console.log(error)
    }
  };

  async function Checkuser() {
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = provider.getSigner();
            //const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, signer);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, provider)
  
            let tx = await contract.users(currentAccount)
            //await tx.wait();
            setTVL(ethers.formatUnits(tx[8], 18))
            setLevel(tx[1])
            setRewards(ethers.formatUnits(tx[6], 18))
            setInvites(tx[0][12])
            console.log("user", ethers.formatUnits(tx[6], 18))
            //setTokprice(ethers.formatUnits(tx, 18))
        }
      } catch(error) {
        console.log(error);
      }
  };

  async function Checkui() {
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = provider.getSigner();
            //const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, signer);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, provider)
  
            let tx = await contract.getUIData(currentAccount)

            //let tx1 = [tx[7]]
            //await tx.wait();
            console.log("ui", tx[7].length())
            //setTokprice(ethers.formatUnits(tx, 18))
        }
      } catch(error) {
        console.log(error);
      }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function  Liquidity1() {
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = provider.getSigner();
            //const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, signer);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, provider)
  
            let tx = await contract.getTokenLiquidity();
            //await tx.wait();
            console.log("exchange", ethers.formatUnits(tx[0], 18) * 2)
            setTliquidity(ethers.formatUnits(tx[0], 18) * 2)
        }
      } catch(error) {
        console.log(error);
      }
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

  const { data, error} = useSWR('OneTok', Checkuser, {refreshInterval: 1000})
  const { data1, error1} = useSWR('Ethbal', Checkui, {refreshInterval: 1000})
  const { data3, error3} = useSWR('Tokbal', Liquidity1, {refreshInterval: 1000})

  //const container = window !== undefined ? () => window().document.body : undefined;
  useEffect(() => {
    connectWallet();
    Checkuser();
    Checkui();
}, [currentAccount]);


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
              <Link href="/" underline="none" color="inherit" className='css-1fn6sd1'>
                <Typography >Bond CAROL</Typography>
              </Link>
              <Link href="/stake" underline="none" color="inherit" className='css-1fn6sd1'>
                <Typography >Stake WRAPPEDX</Typography>
              </Link>
              <Link href="/referral" underline="none" color="inherit" className='css-1fn6sd1'>
                <Typography >Bros REWARD</Typography>
              </Link>
            </div>
            <div class="d-flex pt-lg-0 pt-5 px-4 px-md-0 alcenter">
              <a href="#" target="_blank" className="connect-btn d-lg-block d-none mgbet">
                <span className="connect">Pulse Mainnet</span> 
              </a>
              <Button onClick={connectWallet} target="_blank" className="connect-btn d-lg-block d-none">
              { currentAccount ? <span className="connect">{currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}</span> : <span> Connect Wallet </span> }
                <span className="arrow">
                  <img src={arrow} alt=""></img>
                </span>
              </Button>
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
                  <span className="connect">TVL: 1400.34 PLS</span> 
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
          //container={container}
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
              <div className='scroll1'>
                <Typography className='t1'>Bros Dashboard</Typography>
                <div className='ref2'>
                  <Card className='t2 tp'>
                    <div className='innercard'>
                      <Typography className='t3'>Bros Address</Typography>
                      <div className='linlbox'>
                        <Typography className='t9'>{currentAccount}</Typography>
                      </div>
                      <Button variant="text" className='t10 none'>copy</Button>
                      <Divider className=''></Divider>
                      <div className='reftext'>
                        <Typography className='t11'> - The referral reward can reach up to 20% and depends on the attracted TVL (Total Value Locked) on the protocol.</Typography>
                        <Typography className='t11'>- There are a total of 8 referral levels.</Typography>
                        <Typography className='t11'>- You will receive the reward in PLS directly to your wallet.</Typography>
                      </div>
                    </div>
                  </Card>
                  <Card className='t2 tf'>
                    <div className='innercard'>
                      <Typography className='t3'>Your statistics</Typography>
                      <Typography className='t12'>{rewards ? Number(rewards) : 0} PLS</Typography>
                      <div className='refitems'>
                        <Typography className='t13'>Your level</Typography>
                        <Typography className='t13'>{level ? Number(level) : 0}</Typography>
                      </div>
                      <div className='refitems'>
                        <Typography className='t13'>TVL from 5 lines </Typography>
                        <Typography className='t13'>{TVL}</Typography>
                      </div>
                      <div className='refitems'>
                        <Typography className='t13'>Number of invited</Typography>
                        <Typography className='t13'>{Invites ? Number(Invites) : 0}</Typography>
                      </div>
                      <div className='refitems'>
                        <Typography className='t13'>Referral Contest</Typography>
                        <Typography className='t13'>0 PLS Earned</Typography>
                      </div>
                      <div className='refitems'>
                        <Typography className='t13'>Referral Pot</Typography>
                        <Typography className='t13'>{Number(Number(Tliquidity) * 0.01).toFixed(2)} PLS</Typography>
                      </div>
                    </div>
                  </Card>
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
