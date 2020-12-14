import React from "react";

import CreateAd from "../components/CreateAd/CreateAd";

import { useAuth0 } from "@auth0/auth0-react";
import NotFoundPage from "./NotFoundPage";
import withBasicLayout from "../hoc/withBasicLayout";

const CreateAdPage = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
        <CreateAd userName={user.nickname} userEmail={user.email} />
    );
  } else {
    return (
      <NotFoundPage /> 
    );
  }
};

export default withBasicLayout(CreateAdPage);
