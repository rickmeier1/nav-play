import '@/styles/globals.css'
import { NextPage } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

// This type adds the getLayout function to the NextPage type.
export type NextPageWithLayout<Props = {}, InitPros = Props> = NextPage<Props, InitPros> & {
  getLayout?: (page: ReactElement) => ReactNode
}

// This type is the AppProps type but changes the Component definition to be NextPageWithLayout so that typescript can see the getLayout function and not error on compile.
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export const App = ({ Component, pageProps }: AppPropsWithLayout)  => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <title>My DAG Studios site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;