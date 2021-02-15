import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from 'styles/global'
import { StyleConst } from 'styles/constants'
import styled from 'styled-components'
import { SWRConfig } from 'swr'
import { DefaultSeo } from 'components/seo/DefaultSeo'

const AppContainer = styled.div`
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100 - ${StyleConst.SIZE.HEADER_HEIGHT}px);
  width: ${StyleConst.SIZE.CONTENT_WIDTH}px;
  margin: 0 auto;
  padding-top: ${StyleConst.SIZE.HEADER_HEIGHT}px;
  overflow: hidden;
`

const Providers: FC = ({ children }) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next.js Sample</title>
        <meta name="viewport" content="width=414" />
      </Head>
      <DefaultSeo />

      <GlobalStyle />
      <AppContainer>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </AppContainer>
    </>
  )
}

export default App
