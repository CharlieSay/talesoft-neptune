import type { NextPage } from 'next'
import Head from 'next/head'
import { Center } from '../components/layout/layout.styles'
import { PillGroup } from '../components/pill-group'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Talesoft Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
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

        <h2 style={{ color: 'white', fontWeight: '400' }}>
          <a href="mailto:charlie@talesoft.digital?subject=Hey, lets work together">
            Get in touch
          </a>
        </h2>
      </Center>

      {/* <PillGroup
        areas={[
          {
            text: 'Website Design & Creation',
            link: '/web',
            thumbLoc:
              'https://images.unsplash.com/photo-1663267602456-738c047aefbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
          },
          {
            text: 'Software Consultancy',
            link: '/web',
            thumbLoc:
              'https://images.unsplash.com/photo-1663267602456-738c047aefbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
          },
          {
            text: 'Graphic Design',
            link: '/web',
            thumbLoc:
              'https://images.unsplash.com/photo-1663267602456-738c047aefbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
          },
          {
            text: 'Live Events Production',
            link: '/web',
            thumbLoc:
              'https://images.unsplash.com/photo-1663267602456-738c047aefbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
          },
        ]} */}
      {/* /> */}
    </div>
  )
}

export default Home
