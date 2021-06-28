import { AuthProviderContainer } from 'hooks/auth'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { SWRConfig } from 'swr'

const Providers: FC = ({ children }) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
      }}
    >
      <AuthProviderContainer>{children}</AuthProviderContainer>
    </SWRConfig>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next.js Sample</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <DefaultSeo />

      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  )
}

export default App
