import React from "react";

import Contacts from "../components/Contacts/Contacts";
import About from "../components/About/About";
import withBasicLayout from '../hoc/withBasicLayout';


const AboutPage = () => {
  return (
    <div>
      <About />
      <Contacts />
    </div>
  );
};

export default withBasicLayout(AboutPage);
