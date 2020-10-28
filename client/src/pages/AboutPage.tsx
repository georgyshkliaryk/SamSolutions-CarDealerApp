import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Contacts from "../components/Contacts/Contacts";
import About from "../components/About/About";

const AboutPage = () => {
  return (
    <div>
      <Header lang={"hidden"} />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
};

export default AboutPage;
