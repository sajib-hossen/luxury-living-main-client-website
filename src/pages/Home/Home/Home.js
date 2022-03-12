import React from "react";
import Contacts from "../../Contacts/Contacts/Contacts";
import Projects from "../../Projects/Projects/Projects";

import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <Testimonials />
      <Contacts />
    </div>
  );
};

export default Home;
