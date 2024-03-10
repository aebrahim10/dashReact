import React from 'react'
import bgpic from './../../images/sky_0.jpg'
import { Box, Typography } from '@mui/material'
import Topbar from './Topbar'

function OuterTopbar() {
    console.log("the picture is ",bgpic)
  return (
    <Box sx={{
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'space-between',
        backgroundImage:`url(${bgpic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundColor: '#eb3449', 
        maxWidth: 'none',
        width:'100%', height:'30%'}}>
        <Box sx={{width:'30%'}}>
            <Typography variant="h2">Company</Typography> 
        </Box>
        <Box sx={{width:'70%', alignSelf:'flex-end'}}>    
            <Topbar />
        </Box>
        
    </Box>
  )
}

export default OuterTopbar