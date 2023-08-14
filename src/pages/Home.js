import React from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Topsellings from "../components/sections/Topsellings";
import Booking from "../components/sections/Booking";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Topsellings />
      <Booking />
    </>
  );
};

export default Home;
