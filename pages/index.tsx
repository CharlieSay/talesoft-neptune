import type { NextPage } from 'next'
import ContactUs from '../components/contact-me'
import { Center } from '../components/layout/layout.styles'
import {
  CtaA,
  Glow,
  SmallSpan,
  TimesP,
  TitleH1,
  TitleH2,
} from '../styles/typography.styles'

const Home: NextPage = () => {
  return (
    <div>
      <Center>
        <TitleH1>
          <Glow>Creativity</Glow>
        </TitleH1>
        <SmallSpan>
          Website Design & Creation, Software Consultancy <br></br> Graphic
          Design & Live Events Production
        </SmallSpan>
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
        <ContactUs />
      </Center>
    </div>
  )
}

export default Home
