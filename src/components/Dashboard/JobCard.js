import styled from '@emotion/styled'
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent,Stack, ListItem, Paper, ListItemText, IconButton, Tooltip } from '@mui/material'
import {React, useState} from 'react'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const StyledPaper = styled(Paper)({
    padding:'10px',
    backgroundColor:'#06283D',
    color:'#F2F2F2',
    margin:0, borderRadius:'15px'
})

const StyledListItem = styled(ListItem)
({
    whiteSpace: 'nowrap',
    margin:'10px 0',
    padding:0,
    

})


const JobCard = (props) => {
    const [saveIcon, setSaveIcon] = useState(<BookmarkAddIcon />);
    const [bookmarked, setBookmarked] = useState(false)
    const handleClick = () => {
        setSaveIcon(<BookmarkAddedIcon />)
        setBookmarked(true)
    }

  return (
    <div>
      

        <Card sx={{ margin:'20px',backgroundColor:'fourth.main' }}>
                <CardActionArea sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <CardMedia
                    component="img"
                    
                    image={props.imageURL}
                    alt="DE Shaw"
                    sx={{height:'90px', width:'90px', objectFit:'contain', borderRadius:'10px', padding:'5px'}}
                    />
                <CardContent>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <Typography gutterBottom variant="h6" component="div" id="jobTitle" whiteSpace={'nowrap'}>
                                {props.jobTitle}
                            </Typography>
                        <IconButton onClick={handleClick}>
                                <Tooltip title={bookmarked ? "Bookmark Added" : "Click to save"}>
                                {saveIcon}
                                </Tooltip>
                            
                            
                        </IconButton>
                    </Box>
                    
                    <Typography variant="subtitle" color="secondary.main" whiteSpace={'nowrap'} fontWeight="700">
                        {props.companyName}
                    </Typography>

                    <Stack direction="row"  spacing={2} mt="5px" sx={{whiteSpace:'nowrap'}} >
                        <StyledListItem id="duration">
                            <StyledPaper elevation={3} sx={{padding:'2px 5px'}}>
                                <ListItemText primary={props.duration} />
                            </StyledPaper>
                        </StyledListItem>
                        <StyledListItem id="location">
                            <StyledPaper elevation={3} sx={{padding:'2px 5px'}}>
                                <ListItemText primary={props.location} />
                            </StyledPaper>
                        </StyledListItem>
                        <StyledListItem id="salary">
                            <StyledPaper elevation={3} sx={{padding:'2px 5px'}}>
                                <ListItemText primary={props.salary} />
                            </StyledPaper>
                        </StyledListItem>
                    </Stack>

                </CardContent>
            </CardActionArea>
        </Card>
      
    </div>
  )
}

export default JobCard
