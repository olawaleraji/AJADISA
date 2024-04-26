import React from "react";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Footer from "./components/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default page;
