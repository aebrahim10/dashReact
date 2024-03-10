import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Header from './../Header'
import ContactImage from './../../img/LightRideCar3.JPG'
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box m='20px'>
      <Header title="Home" subtitle="Welcome to Light Ride WebSite" />
      
    <Card sx={{ maxWidth: '50%' ,m:'auto'}}>
        <CardMedia
          component="img"
          sx={{backgroundSize:'cover'}}
          height="300"
          image={ContactImage}
          alt="Light Ride Car"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Light Ride Transportation
          </Typography>
          <Typography variant="body1" color="text.secondary">
              Light transportation is a non medical transportation. 
              We are located in Schenectady. We provide medicaid enrollees trips to and from their medical appointments.
              We are doing our best to provide an excellent and courteous service to our clients.
          </Typography>
        </CardContent>
     </Card>
     </Box>
     
  );
}