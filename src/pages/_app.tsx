import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import { GlobalStyles } from '../styles'
import createEmotionCache from 'utils/create-emotion-cache'
import AuthContextProvider from 'contexts/auth-context'
import DevelopedByLayout from 'templates/developed-by-layout/developed-by-layout'

export default function App({ Component, pageProps }: AppProps) {
  const clientSideEmotionCache = createEmotionCache()
  return (
    <>
      <Head>
        An free plataform to display small online courses
        <link rel="shortcut icon" href="/img/icon-512" />
        <link rel="apple-touch-icon" href="/img/icon-512" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content=" An free plataform to display small online courses" />
        <meta name="theme-color" content="#00115b" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <GlobalStyles />
        <AuthContextProvider>
          <DevelopedByLayout />
          <Component {...pageProps} />
        </AuthContextProvider>
      </CacheProvider>
    </>
  )
}
