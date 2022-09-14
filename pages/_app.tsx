import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="title" content="Talesoft Digital" />
        <meta
          name="description"
          content="Talesoft Digital, custom made high quality websites & software consultation."
        />
        <meta
          name="keywords"
          content="software, web design, websites, technology"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="charlie@talesoft.digital" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
