import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Badge} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./navcss.css"
import logo from "../../image/image 1.png"
import { Link } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const pages = ["Menu 1","Menu 2"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" >
     
        <Toolbar disableGutters style={{background:"white",color:"black",padding:"0px 20px 0px 20px"}} >
          <Typography sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,}} style={{justifyContent:"space-between",width:"175px",height:"32px" }}><img src={logo} alt='Logo'></img></Typography>
     
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
         
          </Typography>

          {/* <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} > */}
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            {/* </IconButton> */} 
            {/* <Menu style={{justifyContent:"center"}}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
             
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} style={{display:"block",color:"black"}}>
                  <Link style={{borderBottom:'2px solid #ffce2e',textDecoration:"none"}}>{page}</Link>
                </MenuItem>
              ))}
            </Menu> */}
          {/* </Box> */}
         <Typography sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} > <img src={logo} alt="Logo" /></Typography>
          <Typography
            variant="h5"

            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',gap:"45px"} ,justifyContent:"center"}}>
           
              <Button
        
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',
                // borderBottom:'4px solid #ffce2e',
                 borderRadius:"0px" ,paddingBottom:"0px" ,fontWeight:600 }} style={{fontFamily: "Josefin Sans", fontSize: "16px",fontWeight: '700',
                 lineHeight: '29px',
                  letterSpacing: '0px',
                  textAlign: "left"}}
              >
                             <span></span>

              </Button>
              <Button
                   onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', borderRadius:"0px" ,paddingBottom:"0px" ,fontWeight:600 }} style={{fontFamily: "Josefin Sans", fontSize: "16px",fontWeight: '700',
                 lineHeight: '29px',
                  letterSpacing: '0px',
                  textAlign: "left"}}
              >
              <span></span>
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0,display:"flex",justifyContent:"center",alignItems:"center" ,gap:"20px"}}>
         <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"#0484c4",fontSize:'14px' }}>
          <Badge badgeContent={4} ><MailOutlineIcon color='#0484c4' style={{width:"25px" ,height:"25px"}}></MailOutlineIcon></Badge> </Typography>


            <Tooltip title="Open settings"><span style={{fontSize:"16px",marginRight:"10px",color:"#0484c4",fontWeight:"700",lineHeight:"29px",letterSpacing:"0px"}}>jhone</span>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.EVCGXvrjsvMrhfOX3su_FgHaHa&pid=Api&rs=1&c=1&qlt=95&w=118&h=118" />
                
                <ArrowDropDownIcon></ArrowDropDownIcon>
              </IconButton>
              
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
           </Box>
        </Toolbar>
      
    </AppBar>
  );
}
export default Navbar;
