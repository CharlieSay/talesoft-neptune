import Image from 'next/image'
import Link from 'next/link'
import { Container, Footer, Header } from './layout.styles'

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header>
        <Link passHref href="/" style={{ cursor: 'pointer' }}>
          <Image
            src="/talesoft.svg"
            alt="Talesoft Logo"
            width={144}
            height={32}
          />
        </Link>
      </Header>
      <Container>{props.children}</Container>
      <Footer>
        <Container style={{ padding: 0 }}>
          Powered by{' '}
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Vercel</span>
          </a>
          <br />
          Talesoft Digital Ltd registered in England No. 13443944
        </Container>
      </Footer>
    </div>
  )
}

export default Layout
