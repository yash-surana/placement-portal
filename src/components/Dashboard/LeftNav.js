import { Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography} from '@mui/material'
import React from 'react'
import WorkIcon from '@mui/icons-material/Work';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const LeftNav = () => {
  return (
    <Box p={2} sx={{
        display : {xs : "none", sm:"block"}, bgcolor:'primary.main', color:'fourth.main', padding:'50px 25px' 
      }}>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', mb:'20px'}}>
            <Avatar sx={{bgcolor:'third.main', mb:'10px'}}>Y</Avatar>
            <Tooltip title="Name">
                <Typography variant='h6' color="fourth.main">Yash Surana</Typography>
            </Tooltip>
            <Tooltip title="PRN">
                <Typography variant='subtitle' color={'secondary.main'}>20030122136</Typography>
            </Tooltip>
             
        </Box>  

        <Box>
            <List>
                {/* Jobs */}
                <ListItem>
                    <ListItemButton component="a" href="#jobs">
                        <ListItemIcon>
                            <WorkIcon color='third' />
                        </ListItemIcon>
                    {/* Text */}
                    <ListItemText primary="Jobs" />
                    </ListItemButton>
                </ListItem>

                {/* Application Status */}
                <ListItem>
                    <ListItemButton component="a" href="#status">
                        <ListItemIcon>
                            <AssessmentIcon color='third'/>
                        </ListItemIcon>
                    {/* Text */}
                    <ListItemText primary="Application Status" />
                    </ListItemButton>
                </ListItem>

                {/* Settings */}
                <ListItem>
                    <ListItemButton component="a" href="#settings">
                        <ListItemIcon>
                            <SettingsIcon color='third'/>
                        </ListItemIcon>
                    {/* Text */}
                    <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>

                {/* Contact Us */}
                <ListItem>
                    <ListItemButton component="a" href="#contact">
                        <ListItemIcon>
                            <ContactSupportIcon color='third'/>
                        </ListItemIcon>
                    {/* Text */}
                    <ListItemText primary="Contact Us" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
      </Box>
  )
}

export default LeftNav
