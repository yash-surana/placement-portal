import React from 'react'
import {Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Link as RouterLink } from 'react-router-dom'

const StyledBox = styled(Box)({
    maxWidth:'80%',
    margin:'0 auto',
    marginTop:'50px',
    padding:'20px 50px',
    textAlign:'center',
    border:'1px solid black'
})

const FlexContainer = styled(Container)({
    display:'flex', alignItems:'center', justifyContent:'space-evenly',
    margin:'40px 0'
})



const Form = () => {
    const [course, setcourse] = React.useState('');

  const handleChange = (event) => {
    setcourse(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <StyledBox container justifyContent="center">
        <Typography sx={{mb:'40px', color:"primary.main"}} variant="h4">Tell us a little more about yourself</Typography>
        <form onSubmit={handleSubmit}>
        <FlexContainer>
            <TextField id="firstname" label="First Name" variant="outlined" required />
            <TextField id="middlename" label="Middle Name" variant="outlined"  />
            <TextField id="lastname" label="Last Name" variant="outlined" required />
        </FlexContainer>
        <FlexContainer id="contact">
            <TextField id="mobileNum" label="Mobile Number" type={'number'} placeholder="9999999999" required />
            <TextField id='personalEmail' label="Personal Email ID" type="email" placeholder='abc@email.com' required />
            <TextField id='collegeEmail' label="College Email ID" type="email" placeholder='abc@sicsr.com' required />
        </FlexContainer>   

        <FlexContainer id="collegeDetails">
        <TextField id="batch" label="Batch" required />
        <FormControl >
            <InputLabel id="course">Course</InputLabel>
            <Select
                labelId="course"
                id="courseNames"
                value={course}
                label="Course"
                onChange={handleChange}
                
            >
                <MenuItem value={'BBA-IT'}>BBA IT</MenuItem>
                <MenuItem value={'BCA'}>BCA</MenuItem>
                <MenuItem value={'MCA'}>MCA</MenuItem>
                <MenuItem value={'MBA-IT'}>MBA-IT</MenuItem>
                <MenuItem value={'MSC'}>MSC</MenuItem>
            </Select>
        </FormControl>
            <TextField id="permanentcity" label="Permanent City"  required />
        </FlexContainer> 
        
        <FlexContainer>
            <TextField id="city1" label="First Preferred City"  required />
            <TextField id="city2" label="Second Preferred City"  required />
            <TextField id="city3" label="Third Preferred City"   />
        </FlexContainer>
        <RouterLink to="/dashboard" style={{textDecoration: 'none'}}><Button variant="contained" color="primary" type="submit">
          Submit
        </Button></RouterLink> 
        
        </form>
        
        </StyledBox>
  )
}

export default Form
