import './contactForm.css';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import { Icon } from '@mui/material';
import { Button, Paper, Grid, Box, Input, Label} from '@mui/material';
import axios from 'axios';
const ContactForm = () => {
    const { register,handleSubmit, formState: { errors }, reset }  = useForm({mode:"all"});
    const [displayMessage, setDisplayMessage]=useState({});
    async function onSubmitForm(values) {
      console.log(values)
      let config = {
        method: 'post',
        url: `${process.env.REACT_APP_NEXT_PUBLIC_API_URL}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: values,
      };
      try {
        const response = await axios(config);
          if (response.status === 200) {
            reset();
            setDisplayMessage(()=>({style:{backgroundColor:'green'},description:'Thank you for contacting us, we will address your inquiry soon.'}))
        }
      } catch (err) {
          setDisplayMessage(()=>({style:{backgroundColor:'red'},description:'Sorry.. there was a problem.'}))         
      }
    }
    return (
        <> 
        <Box component='div' sx={{width:'50%',display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',m:'auto',backgroundColor:'lightblue',border:'1px solid lightblue'}}>
          <h1 sx={{font:'bold', m:'auto'}}>
                    <Icon sx={{transform:'rotate(-45deg)'}}><SendIcon /></Icon><span>Contact Us</span>
          </h1>
        <Grid container sx={{m:'auto'}}>  
        <form onSubmit={handleSubmit(onSubmitForm)} > 
            { displayMessage ? (
              <Grid item> 
                  <Box component='div' sx={{...displayMessage.style, my:2, color:'white', p:1, width:'fullWidth'} }>
                    {displayMessage.description} 
                    </Box>
              </Grid> ) : null}
            <Grid xs={12} item>
                <input {...register('name' ,{ 
                            required: {
                              value: true,
                              message: 'A name is needed',},})} placeholder='Enter your name' />
                <span >{errors.name?.message}</span>
            </Grid>
            <Grid xs={12} item>
              <input {...register('email' ,{ 
                          required: {
                            value: true,
                            message: 'You must enter your email address', },
                            minLength: {
                              value: 3,
                              message: 'This is not long enough to be an email',
                            },
                            maxLength: {
                              value: 50,
                              message: 'This is too long',
                            },
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'This needs to be a valid email address',
                            },
                          })} placeholder='Enter you email' />
              <span >{errors.email?.message}</span>
            </Grid>
            <Grid  xs={12} item >
                <textarea {...register('message' ,{ 
                            required: {
                              required: {
                                value: true,
                                message: 'You need to enter your message',
                              },
                              maxLength: {
                                value: 1000,
                                message: "Your message can't be more than 1000 characters",
                              },
                              minLength: {
                                value: 50,
                                message: 'Your message must be longer than this!',
                              },
                            } })} rows="4" cols="50" placeholder="Message" />
                <span>{errors.message?.message} </span>
            </Grid>
            <Grid xs={12} item>
                  <Button disabled={!errors} type='submit' variant='contained' sx={{my:2, bg:'blue', color:'white'}}>Submit</Button>
            </Grid>
            </form>
            </Grid>
          </Box>
        </>
      )
}
export default ContactForm