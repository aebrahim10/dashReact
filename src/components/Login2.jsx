import React, {useState, useEffect} from 'react'
import { Avatar, Box, Button, Grid, Paper, TextField, Typography,useTheme } from '@mui/material'
import Header from './Header'
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import { Formik } from 'formik'
import * as yup from "yup";

function Login() {

  // const [backendData, setBackendData] = useState([{}])
  // useEffect(()=>{ 
  //   fetch("/api").then(response=>response.json()).then(data=>{setBackendData(data); console.log("data :",backendData) })
  // },[])
  const handleFormSubmit = (values) => {
      console.log("the values are :",values)
  }
  return (
    <Box  m='20px'>
    <Header title='Login' subtitle='Signup or Register' />
     {/* <Grid sx={{m:'10px auto', width:'400px' }} >
      <Avatar sx={{m:'10px 0'}}   size='large' ><LockOpenSharpIcon /></Avatar>
      <Typography variant='h3' sx={{m:'20px 0'}} >Login</Typography>
     </Grid> */}
     
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={cSchema}>
      {({values, errors,touched ,handleBlur,handleChange,handleSubmit})=>(
        
      <form onSubmit={handleSubmit} >
       
       <Box display="grid"  sx={{m:'20px auto', width:'400px' }}  gridTemplateColumns="repeat(1, minmax(0,1fr))" >
       
        <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Username"
            onBlur={handleBlur}
            onChange={handleChange}
            name="username"
            value={values.username}
            error={!!touched.username && !!errors.username}
            helperText={!!touched.username && !!errors.username}
            sx={{m:'10px 0'}}
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            label="Password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            name="password"
            error={!!touched.password && !!errors.password}
            helperText={!!touched.password && !!errors.password}
            sx={{m:'10px 0'}}
            
          />
          {console.log(errors)}
          <Button disabled={errors.length>0} type="submit" color="secondary" variant="contained" sx={{m:'20px 0'}}>
              Login
          </Button>
          </Box>
        </form>)}
      </Formik>
    </Box>
      )
}
const cSchema = yup.object().shape({
  username: yup.string().required("required").min(5,'Username is too short'),
  password: yup.string().required("required").min(5,'Username is too short'),
  });
const initialValues = {
  username: "",
  password: "",
};

export default Login
