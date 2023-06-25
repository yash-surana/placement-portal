import styled from '@emotion/styled'
import { Box, Button, Stack, Link, TextField, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'



const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight:"100vh",
    
    
})

const ImageBox = styled(Box)({
    position:'relative', 
    left:'0',
    overflow:'hidden',
    borderRadius:'0px 100px 100px 0px',
    boxShadow: '5px 5px 40px #888888',
    width:"60%",
    height:"100vh",
    
})

const SignUp = (props) => {
  return (
    <StyledBox>
        <ImageBox component="img"
        src="./images/signup.jpg" alt="LoginBackground"/>
        <Box component="form" textAlign="center" sx={{minWidth:'450px',margin:'0 50px 0px 100px'}}>
            <Typography variant="h5">
            {props.heading}    
            </Typography>
            <Typography variant="subtitle1"color="secondary" sx={{mb:"30px"}} >
                
                {props.subheading}
            </Typography>
{/* 
            <Typography variant='h6' sx={{display:'inline', margin:'10px 10px'}}>
                Are you: 
            </Typography>    
            
                <Button sx={{margin:'0px 5px'}}>a Student</Button>
                <Button>in the Placement Team</Button> */}

            

            {/* Text Field */}
            <Stack spacing={2} sx={{mt:'10px'}}>
                <TextField id="name" label="Name" variant='outlined' required sx={{borderRadius:'50px'}}/>
                <TextField id={props.identity2} label={props.identity2} variant='outlined' required/>
                <TextField id={props.identity3} label={props.identity3} variant='outlined' type={props.identity3type} required/>

                <TextField id={props.identity4} label={props.identity4} variant='outlined' type={props.identity4type} required/>

                <TextField id="password" label="Password" variant='outlined' type="password" placeholder="8+ strong character" required/>
                <RouterLink to="/registrationform" style={{ textDecoration: 'none' }}><Button variant="contained" sx={{borderRadius:'50px', width:'100%'}}>Sign Up</Button></RouterLink>
            </Stack>
            <Typography variant="body1" sx={{mt:'10px'}}>Already registered?  
                <Link><RouterLink to="/login" style={{ textDecoration: 'none' }}>Log In here!</RouterLink>
                </Link>
            </Typography>


        </Box>
    </StyledBox>
  )
}

export default SignUp
