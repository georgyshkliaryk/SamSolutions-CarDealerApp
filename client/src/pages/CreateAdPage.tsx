import React from "react";

import { IAd } from "../models/IAd";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CreateAd from "../components/CreateAd/CreateAd";

import { useAuth0 } from '@auth0/auth0-react';

const CreateAdPage = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <Header lang={"visible"}/>
        <CreateAd userName={user.nickname}/> 
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header lang={"visible"}/>
        <CreateAd/> 
        <Footer />
      </div>
    )
  }
}

export default CreateAdPage;
