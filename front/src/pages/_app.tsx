import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/global'

import theme from '@/styles/theme'
import { UserProvider } from '@/contexts/UserContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />

        <GlobalStyle />
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp