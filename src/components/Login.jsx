import { Box, Button, Avatar, TextField,  Grid, Typography, useMediaQuery } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Header from './Header'
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import { Formik } from 'formik'
import * as yup from "yup";

function Login() {
  const [user, setUser] = useState([{}])
  const [err, setErr] = useState(null)
  const [apiStatus, setApiStatus] = useState(null)
  var code = 0;
  const httpRespCodes={
    100:"Informational responses",
    200:"Success",
    300:"Response redirected",
    400:"Client error responses",
    500:"Internal Server Error"
  }
  useEffect(()=>{ 
    fetch("/api").then(response=>response.json()).then(data=>{setUser(data); console.log("User :",user) })
    .catch(error=>{setErr(error);
                  console.log("Error is :============  ",err) })
     },[])

  const handleFormSubmit= (values)=>{
    
    const result = fetch('/addUser',{
        method:'POST',
        headers:{'Content-Type': 'application/json',
                  'Accept': 'application/json'},
        body:JSON.stringify(values)
    }).then(response => {
            console.log("response = ",response)
            if (response?.ok) {
              response.json()
            } else {
              code=response?.status.toString().charAt(0).concat('00')
              setApiStatus(`HTTP Response Code: ${response?.status} ${httpRespCodes[code]}`)
              throw Error("Error",Error.message)
            }
     })
    .then(data => console.log(data))
    .catch(error => {
      setErr(error); 
      console.log("error.response = ",error.response)
    });
   }
  return (
    <Box  m='20px'>
    <Header title='Login' subtitle='Signup or Register' />
     <Grid sx={{m:'10px auto', width:'400px' }} >
      <Avatar sx={{m:'10px 0'}}   size='large' ><LockOpenSharpIcon /></Avatar>
      <Typography variant='h3' sx={{m:'20px 0'}} >Login</Typography>
      {apiStatus &&  <div style={{color: 'red'}}>{apiStatus}</div>}
      </Grid>
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
        {({values,errors,touched,handleBlur,handleChange,handleSubmit})=>(
            <form onSubmit={handleSubmit}>
             <Box sx={{m:'10px auto', width:'400px'}} display="grid" gridTemplateColumns="repeat(1, minmax(0,1fr))" >
             
                <TextField fullWidth variant='filled' type="text" label="Email" onBlur={handleBlur} 
                    onChange={handleChange} value={values.email} name="email" 
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
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
                    helperText={touched.password && errors.password}
                  />
                  <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Login
                  </Button>
                </Box>
                </Box>
            </form>
        )}
        </Formik>
    </Box>
  )
}
const checkoutSchema = yup.object().shape({
    email: yup.string().required("required").email('This email is invalid.').min(7,"The username is too short"),
    password: yup.string().required("required").min(5,"The password is too short"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  
export default Login