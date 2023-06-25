import { Box, Typography} from '@mui/material'
import {React} from 'react'
import JobCard from './JobCard';


const Feed = () => {
    

  return (
    <Box sx={{padding:'50px'}}>
      <Typography variant="h4">
        Welcome, Yash.
      </Typography>
      <Typography variant="h6" color='secondary.main'>
        Let's start applying..
      </Typography>
    

      <Box sx={{border: '1px solid grey', borderRadius:'5px', padding:'10px', width:'100%', mt:'20px', }}>
        <Typography variant="h5" sx={{paddingLeft:'20px'}}>Active Jobs</Typography>
        <JobCard imageURL="./images/deshaw.png" jobTitle="Technical Consultant" companyName="DE SHAW" location="Hyderabad" duration="Full Time" salary="Rs. 15-21 Lakh p.a." />

      <JobCard imageURL="./images/deloitte.png" jobTitle="Technical Associate" companyName="DELOITTE" location="Multiple Locations" duration="Full Time" salary="Rs. 3.85 Lakh p.a." />

      <JobCard imageURL="./images/philips.png" jobTitle="Marketing Intern" companyName="PHILIPS" location="Pune" duration="Full Time Internship" salary="Rs. 25000 per month" />

      <JobCard imageURL="./images/google.png" jobTitle="Software Engineer" companyName="GOOGLE" location="Multiple Locations" duration="Full Time" salary="Rs. 11-15 Lakh p.a." />

      <JobCard imageURL="./images/adp.png" jobTitle="Customer Support" companyName="ADP" location="Multiple Locations" duration="Full Time" salary="Rs. 3 Lakh p.a." />
      </Box>

      
        
      
      
    </Box>
  )
}

export default Feed
