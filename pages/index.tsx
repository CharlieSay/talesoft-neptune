import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section className="px-4 mt-32 md:mt-64">
      <h1 className="z-50 mb-7 antialiased text-4xl md:text-5xl font-semibold">
        Amplify your organisation through {''}
      </h1>
      <span className="pt-4 text-4xl md:text-5xl font-extrabold uppercase highlight-hero">
        Digital Transformation.
      </span>
      {/* <span className="text-4xl md:text-5xl font-extrabold uppercase animate-text bg-gradient-to-r from-blue-700 via-teal-500 to-blue-900 bg-clip-text text-transparent ">
        Digital Transformation.
      </span> */}
    </section>
  )
}

export default Home
