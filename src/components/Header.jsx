import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { tokens } from '../theme'

function Header({title, subtitle}) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box m='0 0 30px 10px'>
        <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{m:'0 0 5px 0'}} >
            {title}
        </Typography>
        <Typography variant='h5' color={colors.greenAccent[500]}>
            {subtitle}
        </Typography>
        </Box>
  )
}

export default Header