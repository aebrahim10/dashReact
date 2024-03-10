import * as React from 'react';

import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function Main(props) {
    const {secondComp} = props
  return (
    <>
     {/* <iframe name="Main" src="www.hotmail.com" > */}
          {secondComp}
    {/* <Paper sx={{maxWidth:936, margin:'auto',mt:6, overflow:'hidden'}}>
       <Typography variant="h1">Hello</Typography>
       
    </Paper> */}
    {/* </iframe> */}
    </>
  )

}

