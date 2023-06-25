import React from 'react'
import {Box, Stack} from '@mui/material'
import LeftNav from './Dashboard/LeftNav'
import Feed from './Dashboard/Feed'

const Dashboard = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <LeftNav />
        <Feed />
      </Stack>
    </Box>
  )
}

export default Dashboard
