import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { JSX } from 'react'

export default function Home(): JSX.Element {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'background.paper˝',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: '700' }}>
        Clasher Space
      </Typography>
    </Box>
  )
}
