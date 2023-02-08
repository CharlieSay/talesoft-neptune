import Image from 'next/dist/client/image'
import Link from 'next/link'

export const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full h-full mx-auto max-w-screen-lg px-6 text-white">
      <header className="section py-8 flex mx-auto flex-col">
        <section>
          <Link href="/">
            <Image
              src="/talesoft.svg"
              alt="Talesoft Logo"
              width={144}
              height={32}
            />
          </Link>
        </section>
        <Link href="/rates">
          <p className="pt-4 underline decoration-emerald-600 text-center">
            Rates
          </p>
        </Link>
      </header>
      <main className="text-center grow flex justify-center align-middle">
        {props.children}
      </main>
      <footer className="section pb-8 text-center">
        Talesoft Digital Ltd registered in England No. 13443944
      </footer>
    </main>
  )
}
