import React from 'react';
import { Box } from '@mui/material';

function DisplayDate() {
   var showDate = ''
   const showTodaysDate = ()=>{
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let today = new Date();
        showDate = weekday[today.getDay()]+' '+today.getMonth() +"/" + today.getDate()+"/"+
                   today.getFullYear()+"    "+ today.getHours()+":"+today.getMinutes();
  }
  showTodaysDate()
  return (
    <Box  component='span' sx={{whiteSpace:'Wrap',p:'10px',width:'250px',borderRadius:'20px',border:'1px solid blue'}}>
                            {showDate}
    </Box>
  )
}

export default DisplayDate