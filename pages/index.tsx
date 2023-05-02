import type { NextPage } from 'next'
import ContactUs from '../components/contact-form'

const Home: NextPage = () => {
  return (
    <section className="my-auto max-w-lg">
      <h1 className="text-4xl md:text-5xl font-bold">
        Helping your organisation become{' '}
        <span className="uppercase animate-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent ">
          Digital
        </span>
      </h1>
      <ContactUs />
    </section>
  )
}

export default Home
