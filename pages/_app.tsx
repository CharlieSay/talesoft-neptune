import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Wrapper } from '../components/wrapper'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className={'w-full h-screen'}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>Talesoft Digital | Digital Agency based in Manchester</title>
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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="charlie@talesoft.digital" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00774f" />
        <meta name="theme-color" content="#18181b" />
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </section>
  )
}
