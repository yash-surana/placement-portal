import styled from '@emotion/styled'
import { Box, Button, Stack, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import StyledBox from './StyledBox'



const ImageBox = styled(Box)({
    position:'relative', 
    right:'0',
    overflow:'hidden',
    borderRadius:'100px 0px 0px 100px',
    boxShadow: '5px 5px 40px #888888',
    width:"60%",
    height:"100vh",
    
})

const Login = (props) => {
  return (
    
    <StyledBox>
        <Box component="form" textAlign="center" sx={{minWidth:'400px',margin:'0 100px 0 50px'}}>
            <Typography variant="h5">
            {props.heading}    
            </Typography>
            <Typography variant="subtitle1"color="secondary" sx={{mb:"30px"}} >
                
                {props.subheading}
            </Typography>

            {/* <Typography variant='h6' sx={{display:'inline', margin:'10px 10px'}}>
                Are you: 
            </Typography>    
            
                <Button sx={{margin:'0px 5px'}}>a Student</Button>
                <Button>in the Placement Team</Button> */}

            

            {/* Text Field */}
            <Stack spacing={2} sx={{mt:'10px'}}>
                <TextField id="name" label="Name" variant='outlined' required/>
                <TextField id={props.identity2} label={props.identity2} variant='outlined' required/>
                <TextField id="password" label="Password" variant='outlined' type="password" required/>
                <RouterLink to="/dashboard" style={{ textDecoration: 'none', color:'#F2f2f2' }}><Button variant="contained" sx={{borderRadius:'5px',width:'100%'}}>Log In</Button></RouterLink>
            </Stack>
            <Typography variant="body1" sx={{mt:'10px'}}>Are you a new user?  
            <RouterLink to="/signup" style={{ textDecoration: 'none' }}><Link>Sign up now!
                </Link></RouterLink>
            </Typography>


        </Box>

        {/* Image */}
        <ImageBox component="img"
        src="./images/loginbg.jpg" alt="LoginBackground"/>
        


      
    </StyledBox>
    
    
  )
}

export default Login
