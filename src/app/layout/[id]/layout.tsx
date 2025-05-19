import { JSX } from 'react'
import Box from '@mui/material/Box'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <Box component="main" sx={{ width: 800, mx: 'auto', paddingTop: 4 }}>
      {children}
    </Box>
  )
}
