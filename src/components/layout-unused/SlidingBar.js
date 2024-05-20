import React, {useState} from 'react';
import './SlidingBar.css';
import { AppBar,Typography } from '@mui/material';
import ErrorBoundary from '../pages/ErrorBoundary';
import axios from 'axios';

const lightColor = 'rgba(255,255,255,0.7)';

export default function SlidingBar(){
    const [sFile, setsFile]=useState("");
    const getFileUsingAxios= async()=>{
        const fileUrl = `${process.env.REACT_APP_PUBLIC_SLIDINGTTEXTFILENAME}`;
        let resp = await axios.get(fileUrl);
        let data = resp.data;
        setsFile(data);
      }
    if (sFile.length===0){
        setsFile('Welcome to Light Ride website... Expect some changes to come to it.')
    }
    getFileUsingAxios();
    return (
        
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{ zIndex: 0,marginTop:0, textAlign:'center',paddingTop:'5px',paddingBottom:'0px'}} >
                    <div class="marquee">
                        <span>{sFile}</span>
                    </div>                 
            </AppBar>
)}