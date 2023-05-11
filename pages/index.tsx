import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section className="px-4 mt-32 md:mt-64">
      <h1 className="z-50 mb-7 antialiased text-4xl md:text-5xl font-semibold">
        Amplify your message through
      </h1>
      <span className="highlight-container">
        <span className="pt-4 text-4xl md:text-5xl font-extrabold uppercase highlight">
          <h1 className="invertMe">Digital Transformation</h1>
        </span>
      </span>
    </section>
  )
}

export default Home
