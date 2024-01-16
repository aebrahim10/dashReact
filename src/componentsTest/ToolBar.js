import { Box } from '@mui/system'
import React from 'react'
import Btn from './Btn'
import { Button, Typography } from '@mui/material'

export default function ToolBar() {
  return (

    <Box display="flex" justifyContent="space-between" p={1}>
        <Button variant="contained" color="success" size='small'>Change</Button>
        <Typography variant="h1">     Hello  </Typography>
        <Btn />

    </Box>
  )
}
