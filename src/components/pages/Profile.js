import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Header from './../Header'

export default function Profile() {
  return (
     <Box m='20px'>
        <Header title='Profile' subtitle='Information about this user.' />

        <Card sx={{ maxWidth: '50%', m:'auto'}}>
             <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                
              </Typography>
              <Typography variant="body1" color="text.secondary">
              
              
              </Typography>
            </CardContent>
        </Card>
     </Box>
  );
}