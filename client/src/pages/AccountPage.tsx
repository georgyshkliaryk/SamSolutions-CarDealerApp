import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Account from "../components/Account/Account";

const AboutPage = () => {
  return (
    <div>
      <Header lang={"hidden"} />
      <Account />
      <Footer />
    </div>
  );
};

export default AboutPage;