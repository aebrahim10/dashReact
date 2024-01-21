import { Typography,useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import HourglassEmptySharpIcon from '@mui/icons-material/HourglassEmptySharp';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
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
    onClick={()=>setSelected(title)}
  >
    {title}
    <Typography variant='h3'>{title}</Typography>
    <Link to={to} />

  </MenuItem>
  )
}
function SidebarT() {
  const [selected,setSelected] = useState('Thyme')
  const [isCollapsed, setIsCollapsed]= useState(true)
  return (
    <>
      <Typography variant='3'>Sidebar</Typography>
      <Sidebar collapsed={isCollapsed}>
        <Menu>
        <Item title="Counter" icon={<HourglassEmptySharpIcon/>} to="/counter" selected={selected} setSlected={setSelected}/>
        <Item title="Toolbar" icon={<HandymanTwoToneIcon/>} to="/toolbar" selected={selected} setSlected={setSelected}/>

        </Menu>
      </Sidebar>
    
    </>
    
  )
}

export default SidebarT