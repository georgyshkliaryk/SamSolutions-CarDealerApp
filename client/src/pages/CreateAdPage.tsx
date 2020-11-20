import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CreateAd from "../components/CreateAd/CreateAd";

import { useAuth0 } from "@auth0/auth0-react";

const CreateAdPage = (props: any) => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <Header
          lang={"visible"}
          handleClickEng={props.handleClickEng}
          handleClickDe={props.handleClickDe}
        />
        <CreateAd userName={user.nickname} userEmail={user.email} />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header
          lang={"visible"}
          handleClickEng={props.handleClickEng}
          handleClickDe={props.handleClickDe}
        />
        <CreateAd />
        <Footer />
      </div>
    );
  }
};

export default CreateAdPage;
