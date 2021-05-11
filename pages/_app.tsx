import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { DefaultSeo } from 'components/seo/DefaultSeo'

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

      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  )
}

export default App
