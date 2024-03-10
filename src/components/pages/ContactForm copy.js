//import './contactForm.css';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import { Icon } from '@mui/material';
import { Button, Paper, Grid, Box, Input, Label} from '@mui/material';
import axios from 'axios';
const ContactForm = () => {
    const { register,handleSubmit, formState: { errors }, control, reset }  = useForm();
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
    console.log(response);
    if (response.status === 200) {
      reset();
     console.log(
        'success',
        'Thank you for contacting us, we will be in touch soon.'
      );
    }
  } catch (err) {console.log(err)}
}

return (
     <Paper sx={{m:2, p:5, display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
     <div sx={{width:'35%', m:'auto', p:1}}>
        <h1 sx={{display:'flex', flexDirection: 'column', justifyContent:'center', alignContent:'center', font:'bold'}}>
            <Icon sx={{transform:'rotate(-45deg)'}}><SendIcon /></Icon><span>Contact Us</span>
        </h1>
        <div id='result'></div>
        {/* {message && (
          <div className={{padding: "1rem", marginTop: "1rem", marginBottom: "1rem", color: "#ffffff", width: "100%"}}>
           $ {message.text}
          </div>
        )} */}
     </div>
    
    <div sx={{padding:'2rem', marginLeft:'auto',marginRight:'auto',width:'100%',maxWidth:'42rem',borderRadius:'0.75rem',
        boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}}>
        <form sx={{display:'flex', flexDirection:'column'}} onSubmit={handleSubmit(onSubmitForm)} >
     {/* <form name='frm' onSubmit={handleSubmit(submitForm)}> */}
     <Grid container spacing={2}>
        <Grid xs={12} item>
            <input {...register('name' ,{ 
                        required: {
                          value: true,
                          message: 'A name is needed',},})} placeholder='Enter a name' fullWidth />
            <span sx={{color:'red'}}>{errors.name?.message}</span>
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
          <span sx={{color:'red'}}>{errors.email?.message}</span>
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
                        } })}  placeholder="Message" />
            <span sx={{color:'red'}}>{errors.message?.message} </span>
        </Grid>
        <Grid xs={12} item>
              <Button disabled={!errors} type='submit' variant='contained' sx={{my:2, bg:'blue', color:'white'}}>Submit</Button>
        </Grid>
        </Grid>
      </form>
     </div>
    </Paper>
  )
}
export default ContactForm