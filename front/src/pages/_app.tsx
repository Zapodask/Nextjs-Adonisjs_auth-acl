import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '@/styles/global'
import { UserProvider } from '@/contexts/UserContext'

import { ThemeProvider } from '@/contexts/ThemeContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Component {...pageProps} />

        <GlobalStyle />
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp