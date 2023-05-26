import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="mt-16 sm:m-auto ml-8 text-start md:text-center">
      <h1 className="mb-7 antialiased [word-spacing:150px] sm:[word-spacing:0px] text-7xl">
        Amplify {"\n"}
        <span className="font-semibold">Your</span> Message
      </h1>
      <h2 className="text-6xl text-blue-700 [word-spacing:300px] sm:[word-spacing:0px]">
        with Next-Gen Digital Tools
      </h2>
    </section>
  );
};

export default Home;
