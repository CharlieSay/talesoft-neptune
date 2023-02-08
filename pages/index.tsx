import type { NextPage } from 'next'
import ContactUs from '../components/contact-form'

const Home: NextPage = () => {
  return (
    <section className="my-auto">
      <h1 className="uppercase animate-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent text-4xl md:text-7xl font-bold">
        Creativity
      </h1>
      <p className="py-8">
        Website Design & Creation, Software Consultancy <br></br> Graphic Design
        & Live Events Production
      </p>
      <p className="font-serif">
        <span className="italic">We</span> are{' '}
        <span className="font-bold">here</span> for it.
      </p>
      <ContactUs />
    </section>
  )
}

export default Home
