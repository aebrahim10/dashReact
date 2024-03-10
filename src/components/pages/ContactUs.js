import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ContactImage from './../../img/carOnARoad.jpg'

export default function ContactUs() {
  return (
    <Card sx={{ maxWidth: '50%', m:'15px, auto, auto, 15px' }}>
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
              <ListItemText>Phone Number: 518-930-6689</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <ListItemText >Email address : lightride21@outlook.com</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>  
        </CardContent>
    </Card>
  );
}