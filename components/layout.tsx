import Image from "next/image";
import Link from "next/link";
import Talesoft from "../public/talesoft.svg";

const navigation = [
  ,// { text: 'About', href: '/about' },
  // { text: 'Services', href: '/services' },
  // { text: 'Portfolio', href: '/portfolio' },
  // { text: 'Testimonials', href: '/testimonials' }
];

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <main className="antialiased flex flex-col h-screen justify-between">
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link className="flex items-center" href="/">
              <Image
                src={Talesoft}
                height={25}
                className="mx-auto mr-3"
                alt="Talesoft Logo"
              />
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                href="/contact"
                className="whitespace-nowrap text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 ml-4 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Contact us
              </Link>
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between lg:grow lg:justify-end items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu"
            >
              <ul className="flex flex-col mr-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {/* {navigation.map((navLink) => (
                  <li key={navLink.text}>
                    <Link
                      href={navLink.href}
                      className="block hover:bg-slate-50 py-2 px-4 text-black rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black"
                      aria-label={navLink.text}
                    >
                      {navLink.text}
                    </Link>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="text-center grow flex justify-center align-middle">
        {props.children}
      </main>
      <footer className="ml-8 mt-8 section pb-8 text-start text-xs md:text-center md:text-sm">
        Talesoft Digital Ltd registered in England No. 13443944
        <Link href="/rates">
          <p className="underline decoration-blue-600">Rates</p>
        </Link>
      </footer>
    </main>
  );
};
