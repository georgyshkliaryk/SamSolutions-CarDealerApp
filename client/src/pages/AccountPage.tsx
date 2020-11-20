import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Account from "../components/Account/Account";

const AboutPage = (props: any) => {
  return (
    <div>
      <Header
        lang={"visible"}
        handleClickEng={props.handleClickEng}
        handleClickDe={props.handleClickDe}
      />
      <Account />
      <Footer />
    </div>
  );
};

export default AboutPage;
