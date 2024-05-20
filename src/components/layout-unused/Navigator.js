import React, { useState } from 'react'
import {Divider, Paper,Link,List,ListItem,ListItemIcon,ListItemText,ListItemButton,Box} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import ColorizeIcon from '@mui/icons-material/Colorize';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';

const categories = [
        { id: 'Home', icon: <HomeIcon />, path: "home",},
        { id: 'Services', icon: <PermMediaOutlinedIcon />, path: "services", },
        { id: 'Contact us', icon: <CallIcon />, path: "contactUs", },
        { id: 'Contact Form', icon: <ColorizeIcon />, path: "contactForm", },
      ]
  const item = {
    py: '5px',
    px: 3,
    //color: 'rgba(60, 10, 30, 0.7)',  //equivalent to {background: #3c0a1e; opacity: 0.7;  } // purple
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
    //     bgcolor: 'rgba(255, 255, 255, 0.08)',
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
    //console.log({...other})
    const {lComp} = props;
    //console.log(typeof(lComp))
     if(lComp === undefined){
   //   console.log("----------------------",typeof(lComp))
      var thePath="home";
    }  else {
    //   console.log("--klklklklklklkl--------------------",typeof(lComp))
    // console.log("lComp",lComp);
    // console.log("lComp name",lComp.type.name);
    // console.log("lComp type",typeof(lComp.type.name))
    var thePath=lComp.type.name;
    }
    const [selectedItem, setSelectedItem] = useState(lowerCaseFirstLetter(thePath));
    function lowerCaseFirstLetter(string) {
      return string.charAt(0).toLowerCase() + string.slice(1);
    }
          
  return (
      // <Drawer variant="permanent"  {...other} >//
      
      <Paper  sx={{float:'left'}} {...other}>  
      <div style={{backgroundColor:'red'}}>{selectedItem}&&{thePath}&&{lComp.type.name}</div>
        <List disablePadding>
                  <Box sx={{bgcolor:'#101F33', minHeight:'680px'}}>                     
                      {categories.map(({ id:childId, icon, path }) => (
                      <ListItem disablePadding key={childId} >
                        <ListItemButton selected={(selectedItem==path)} name={childId} sx={item} component={Link} to={path}  >
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

