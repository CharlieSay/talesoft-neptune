import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './layout.styles'

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <header className={styles.header}>
        <Link passHref href="/" style={{ cursor: 'pointer' }}>
          <Image
            src="/talesoft.svg"
            alt="Talesoft Logo"
            width={144}
            height={32}
          />
        </Link>
      </header>
      <Container>{props.children}</Container>
      <footer className={styles.footer}>
        <section>
          Powered by{' '}
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.logo}>Vercel</span>
          </a>
        </section>
        Talesoft Digital Ltd registered in England No. 13443944
      </footer>
    </div>
  )
}

export default Layout
