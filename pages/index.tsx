import type { NextPage } from 'next'
import Head from 'next/head'
import ContactUs from '../components/contact-me'
import { Center } from '../components/layout/layout.styles'
import { PillGroup } from '../components/pill-group'
import { Glow, TimesP, TitleH1, TitleH2 } from '../styles/typography.styles'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Talesoft Digital</title>
      </Head>
      <Center>
        <TitleH1>
          <Glow>Creativity</Glow>
        </TitleH1>
        <TimesP>
          <span
            style={{
              fontStyle: 'italic',
            }}
          >
            We
          </span>{' '}
          are <span style={{ fontWeight: '900' }}>here</span> for it.
        </TimesP>

        <PillGroup
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
          ]}
        />

        <ContactUs />
      </Center>
    </div>
  )
}

export default Home
