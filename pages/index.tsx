import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Talesoft Digital</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        <span className={styles.linearWipe}>Creativity</span>{' '}
      </h1>

      <p className={styles.times}>
        <span
          style={{
            fontStyle: 'italic',
          }}
        >
          We
        </span>{' '}
        are <span style={{ fontWeight: '900' }}>here</span> for it.
      </p>

      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li>Website Design & Creation</li>
        <li>Software Consultancy</li>
        <li>Graphic Design</li>
        <li>Live Events Production</li>
      </ul>
    </div>
  )
}

export default Home
