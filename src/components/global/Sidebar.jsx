import  { useState } from 'react'
import { Box, IconButton, Typography,useTheme } from '@mui/material'
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
// import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PortraitIcon from '@mui/icons-material/Portrait';

import DashboardIcon from '@mui/icons-material/Dashboard';
import { themeSettings, tokens } from '../../theme';

const Item = ({title, icon, selected, to, setSelected})=>{
  const theme = useTheme(themeSettings);
  const colors = tokens(theme.palette.mode)
  return(
  <MenuItem active={selected===title}
    icon={icon}
    style={{color:colors.grey[100]}}
    onClick={()=>setSelected(title)}   > 
    <Link to={to} > <Typography >{title}</Typography></Link>  
    
  </MenuItem>
  )
}
function SidebarT() {
  const theme = useTheme(themeSettings)
  const colors=tokens(theme.palette.mode)
  const [selected,setSelected] = useState('Counter')
  const [isCollapsed, setIsCollapsed]= useState(false)
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)} 
           icon={isCollapsed? <MenuIcon /> : undefined}
           style={{
              margin: "10px 0 20ps 0",  
              color: colors.grey[100]}}
          >
          {!isCollapsed && 
            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px" >
              <Typography variant='h3'></Typography>
              <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}><ArrowBackIcon style={{color: colors.grey[100]}}/></IconButton>  
            </Box>}
          </MenuItem>

        <Item title="Home" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
        <Item title="Services" to="/services" icon={<EmojiTransportationIcon/>} selected={selected} setSelected={setSelected}/>
        <Item title="Contacts" to="/contactUs" icon={<PhoneIcon/>} selected={selected} setSelected={setSelected}/>
        <Item title="Contact Form" to="/form" icon={<ContactMailIcon/>} selected={selected} setSelected={setSelected}/>
        <Item title="Profile" to="/form" icon={<PortraitIcon/>} selected={selected} setSelected={setSelected}/>
        <Item title="Calendar" to="/calendar" icon={<CalendarMonthIcon/>} selected={selected} setSelected={setSelected}/>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default SidebarT