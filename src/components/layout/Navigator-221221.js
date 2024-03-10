import React, { useState } from 'react'
import {Divider, Paper,Link,List,ListItem,ListItemIcon,ListItemText,ListItemButton,Box} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import CallIcon from '@mui/icons-material/Call';
import ColorizeIcon from '@mui/icons-material/Colorize';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import Front from '../pages/Front'

const categories = [
        { id: 'Home', icon: <HomeIcon />, path: "front",},
        { id: 'Authentication', icon: <PeopleIcon />, path: "content", },
        { id: 'Services', icon: <PermMediaOutlinedIcon />, path: "front", },
        { id: 'Contact us', icon: <CallIcon />, path: "contactUs", },
        { id: 'Contact Form', icon: <ColorizeIcon />, path: "contactForm", },
      ]
    // {
    //   id: 'Quality',
    //   children: [
    //     { id: 'Analytics', icon: <SettingsIcon /> },
    //     { id: 'Performance', icon: <TimerIcon /> },
    //     { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    //   ],
    // },
  
  // const item = {
  //   py: '2px',
  //   px: 3,
  //   color: 'rgba(255, 255, 255, 0.7)',
  //   '&:hover, &:focus': {
  //     bgcolor: 'rgba(255, 255, 255, 0.08)',
  //   },
  // };
  const item = {
    py: '5px',
    px: 3,
    //color: 'rgba(60, 10, 30, 0.7)',  //equivalent to {background: #3c0a1e; opacity: 0.7;  } // purple
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
      bgcolor: 'rgba(100, 130, 50, 0.08)',
    },
  };
  
  const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
  };
  
  export default function Navigator(props) {

    const {...other} = props
     //PaperProps={{ style: { width: drawerWidth } }}
        //    sx={{ display: { sm: 'block', xs: 'none' } }}
        console.log({...other})
    
    const [selectedItem, setSelectedItem] = useState("Home");
    
    const handleSelected = (childId)=>{
      console.log('childId = ',childId);
      setSelectedItem(childId);
      console.log("selectedItem = ",selectedItem);
    }
    
  return (
      // <Drawer variant="permanent"  {...other} >//
      
      <Paper  sx={{float:'left'}} {...other}>  
      <div style={{backgroundColor:'red'}}>{selectedItem}</div>
        <List disablePadding>
            {/* {categories.map(({id,children})=>(
              <Box key={id} sx={{bgcolor:'#101F33', minHeight:'680px'}}>
                <ListItem sx={{py:8,px:3}}>
                  <ListItemText sx={{color:"#fed"}}>{id}</ListItemText>
                </ListItem>
                {children.map(({ id: childId, icon, active, path }) => (
                  <ListItem disablePadding key={childId} >
                    <ListItemButton selected={(selectedItem==childId)} name={childId} sx={item} component={Link} to={path} onClick={()=>handleSelected(childId)} >
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText>{childId}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))} */}
                {/* <Box sx={{bgcolor:'#101F33', minHeight:'680px'}}> 

                </Box>  */}

                <Box sx={{bgcolor:'#101F33', minHeight:'680px'}}>                     
                      {categories.map(({ id:childId, icon, path }) => (
                      <ListItem disablePadding key={childId} >
                        <ListItemButton selected={(selectedItem==childId)} name={childId} sx={item} component={Link} to={path} onClick={()=>handleSelected(childId)} >
                          <ListItemIcon>{icon}</ListItemIcon>
                          <ListItemText>{childId}</ListItemText>
                        </ListItemButton>
                      </ListItem>
                      ))}
                      <Divider sx={{mt: 2}} />
                </Box>    
        </List>
    </Paper>
  )
}

