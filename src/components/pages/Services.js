import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Header from './../Header'
import CapitalRegMap from './../../img/map3r.jpg'


export default function Services() {
  return (
     <Box m='20px'>
        <Header title='Services' subtitle='Locations we serve.' />

        <Card sx={{ maxWidth: '50%', m:'auto'}}>
            <CardMedia
              component="img"
              height="300"
              image={CapitalRegMap}
              alt="Capital region map"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Light Ride Transportation Services
              </Typography>
              <Typography variant="body1" color="text.secondary">
              We offer transportation services as a taxi across the New York Capital Region.
              The region that we service the most is Schenectady, Albany, Rensselaer, Saratoga, ...
              We are not equiped with vehicle for clients with wheelchair yet, we will include this service soon. 
              
              </Typography>
            </CardContent>
        </Card>
     </Box>
  );
}