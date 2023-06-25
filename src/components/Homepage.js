import React from 'react'
import Box from '@mui/material/Box'
import { Container } from '@mui/system'
import { Typography, Button } from '@mui/material'
import Typewriter from 'typewriter-effect'
import { Link as RouterLink } from "react-router-dom";

const Homepage = () => {
  return (

    <Box sx={{height:'100vh', padding:"0", margin:'0', overflow:'hidden'}} bgcolor='primary.main' color="fourth.main">  
    
        <Container>
            <Typography variant="h1" sx={{mt:'50px', mb:'20px', display:'flex', gap:'15px', fontFamily: 'Bebas Neue'}}>Work as   
            <Typewriter  options={{
                loop: true,
                strings: ['A WEB DEVELOPER', 'AN ADVERTISER', 'A FINANCE CONSULTANT', 'AN APP DEVELOPER', 'A HR MANAGER'],
                autoStart:true,
            }} /></Typography>
            
            <Box id="subheadings" display="flex" gap="30px" justifyContent='space-between'>
                <Typography variant="subtitle" sx={{width:'400px'}}>It has never been this easy to get hired. 
                <br/>Get matched with your dream companies for the career you deserve.
                </Typography>

                <Typography variant="subtitle" sx={{width:'400px'}}>No more having to manually apply for each job by filling out the same form again and again. We have simplified this for you.</Typography>

                <RouterLink to="/login" style={{ textDecoration: 'none' }}><Button variant="" sx={{color:'fourth.main', bgcolor:'secondary.main', fontWeight:"700"}} underline="none">Start Applying Now</Button></RouterLink> 
                  
            </Box>

           <div style={{ backgroundImage:`url(./images/bgHome.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
            height:'58%',width:'80%', position:'absolute', left:'0', marginTop:'50px' , borderRadius:"0 25% 25% 0"
            }}>
             
            </div>
            

        </Container>
      </Box> 
  )
}

export default Homepage
