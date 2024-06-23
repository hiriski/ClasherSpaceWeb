'use client'

import { ThemeProvider } from '@mui/material/styles'
import { baseTheme } from '@/features/app/configs/default-theme.config'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

import './globals.css'
import { ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={baseTheme}>{props.children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
