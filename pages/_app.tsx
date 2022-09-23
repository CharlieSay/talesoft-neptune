import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="title"
          content="Talesoft Digital | Digital Agency based in Manchester"
        />
        <meta
          name="description"
          content=" Creativity, we are for it - Talesoft is a one man digital agency making custom high quality websites & provide software consultation for small - medium size businesses. Based out of Manchester, UK."
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
