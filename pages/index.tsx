import type { NextPage } from "next";
import { RoughNotation } from "react-rough-notation";

const Home: NextPage = () => {
  return (
    <section className="m-auto p-auto md:mt-64">
      <h1 className="z-50 mb-7 antialiased text-md md:text-5xl font-semibold">
        Amplify your message through
      </h1>
      <h1 className="hidden md:block pt-4 text-5xl font-extrabold uppercase">
        <RoughNotation
          type="circle"
          color="#1d4fd8"
          padding={[20, 100]}
          show={true}
        >
          Digital Transformation
        </RoughNotation>
      </h1>
      <h1 className="block text-white flex-wrap md:hidden pt-4 text-2xl  font-extrabold uppercase">
        <RoughNotation type="highlight" color="#1d4fd8" show={true}>
          Digital Transformation
        </RoughNotation>
      </h1>
    </section>
  );
};

export default Home;
