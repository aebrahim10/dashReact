import * as React from 'react';
import Header from './../Header'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ContactImage from './../../img/carOnARoad.jpg'

export default function ContactUs() {
  return (
    <Box m='20px'>
        <Header title='Contact Us' subtitle='Reach us through the following method.' />
        <Card sx={{ maxWidth: '50%', m:'auto' }}>
            <CardMedia
              component="img"
              height="300"
              image={ContactImage}
              alt="car on a road"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Light Ride Contact Information
              </Typography>
              <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText>Phone Number: 518-930-6789</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AlternateEmailIcon />
                  </ListItemIcon>
                  <ListItemText >Email address : lightride25@outlook.com</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>  
            </CardContent>
        </Card>
    </Box>
  );
}