import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const withBasicLayout = (Component) => {
  return (props) => {
    return (
      <div>
        <Header {...props} />
        <Component {...props} />
        <Footer />
      </div>
    );
  };
};

export default withBasicLayout;
