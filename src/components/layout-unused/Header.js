import React from 'react';
import PropTypes from 'prop-types';
import { AppBar,Toolbar, Grid,IconButton, Tooltip, Avatar,Typography,Box,Chip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from '../../img/sky4.jpg'; // Import using relative path
import DisplayDate from './DisplayDate'

const lightColor = 'rgba(255,255,255,0.7)';
export default function Header(props){
  const { onDrawerToggle } = props;
  
  return(
    <React.Fragment>
        <AppBar position='sticky' color='primary' elevation={0} sx={{zIndex: (theme) => theme.zIndex.drawer + 1, minHeight: '100px' ,  
            backgroundSize: '100% 100%',
            backgroundImage: `url(${Image})`,
            backgroundRepeat:'no-repeat',
            }}  >
            <Toolbar>
                <Grid container spacing={5} alignItems="center">
                    <Grid item>
                     <Typography variant='h4' sx={{fontFamily: "cursive", textAlign:'center'}}>
                        Light Ride, LLC</Typography>
                   </Grid>
                    <Grid sx={{display: { sm:'none', xs:'block'}}} item>
                        <IconButton
                           color="inherit"
                           aria-label='open drawer'
                           onClick = {onDrawerToggle}
                           edge = "start">
                            <MenuIcon />
                        </IconButton>
                   </Grid>
                   <Grid item xs />
                   <Grid item>
                    <DisplayDate />
                    </Grid> 
                   <Grid item>
                    <Tooltip title="Alerts • No alerts">
                        <IconButton color="inherit">
                            <NotificationsIcon/>
                        </IconButton>
                    </Tooltip>                   
                   </Grid>  
                   <Grid item>
                    <IconButton color="inherit" sx={{p : 0.5}}>
                     <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />                   
                    </IconButton>
                   </Grid>    
                </Grid>
            </Toolbar>
        </AppBar>
       
        
    </React.Fragment>
)
}
Header.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired,
  };
  