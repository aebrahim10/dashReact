
import React, { useState } from 'react'
import { Box, IconButton, Typography,useTheme } from '@mui/material'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import HourglassEmptySharpIcon from '@mui/icons-material/HourglassEmptySharp';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';

const Item = ({title, icon, selected, to, setSelected})=>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  console.log("Title : ",title)
  return(
  <MenuItem active={selected===title}
    icon={icon}
    style={{color:colors.grey[100]}}
    onClick={()=>setSelected(title)}   >
      
      <Link to={to}><Typography variant='h3'>{title}</Typography></Link>
  </MenuItem>
  )
}
function SidebarT() {
  const theme = useTheme()
  const colors=tokens(theme.palette.mode)
  const [selected,setSelected] = useState('Counter')
  const [isCollapsed, setIsCollapsed]= useState(false)
  console.log("Selected ----- ",selected)
  return (
    <>
      <Sidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)} 
           icon={isCollapsed? <HomeOutlinedIcon /> : undefined}
           style={{
              margin: "10px 0 20ps 0",  
              color: colors.grey[100]}}
          >
          {!isCollapsed && 
            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px" >
              <Typography variant='h3'>Company</Typography>
              <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}><HomeOutlinedIcon style={{color: colors.grey[100]}}/></IconButton>  
            </Box>}

          </MenuItem>

        <Item title="Dashboard" to="/" icon={<DashboardIcon />} selected={selected} setSelected={setSelected} />
        <Item title="Counter" to="/counter" icon={<HourglassEmptySharpIcon/>} selected={selected} setSelected={setSelected}/>
        <Item title="Toolbar" to="/toolbar" icon={<HandymanTwoToneIcon/>} selected={selected} setSelected={setSelected}/>
        </Menu>
      </Sidebar>
    </>
  )
}

export default SidebarT