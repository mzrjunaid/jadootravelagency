import React from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Topsellings from "../components/sections/Topsellings";
import Booking from "../components/sections/Booking";
import Testimonials from "../components/sections/Testimonials";
import Portfolio from "../components/sections/Portfolio";
import Subscribe from "../components/sections/Subscribe";
import Footer from "../components/sections/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Topsellings />
      <Booking />
      <Testimonials />
      <Portfolio />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
