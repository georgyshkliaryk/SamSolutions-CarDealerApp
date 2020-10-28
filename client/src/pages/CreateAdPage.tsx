import React from "react";

import { IAd } from "../models/IAd";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CreateAd from "../components/CreateAd/CreateAd";

class CreateAdPage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <CreateAd />
        <Footer />
      </div>
    );
  }
}

export default CreateAdPage;
