import React from "react";
import EditAdPage from "./EditAdPage";

import { useAuth0 } from "@auth0/auth0-react";
import NotFoundPage from "./NotFoundPage";

const EditAdPageWrapper = (props: any) => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <EditAdPage
        {...props}
        handleClickEng={props.handleClickEng}
        handleClickDe={props.handleClickDe}
      />
    );
  } else {
    return <NotFoundPage />;
  }
};

export default EditAdPageWrapper;
