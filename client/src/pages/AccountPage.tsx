import React from "react";

import Account from "../components/Account/Account";
import withBasicLayout from '../hoc/withBasicLayout';


const AboutPage = (props: any) => {
  return (
      <Account />
  );
};

export default withBasicLayout(AboutPage);
