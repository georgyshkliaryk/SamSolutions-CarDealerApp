import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import translate from "../../i18n/translate";

import "./AccountButton.scss";

const AcountButton = () => {
  const { isAuthenticated } = useAuth0();

  let display = {
      display: "none"
  }
  if (!isAuthenticated) {
    display = {
        display: "none"
    }
  } else {
      display = {
          display: "block"
      }
  }

  return (
    <div className="headerButton" style={display}>
      <div>{translate("account")}</div>
    </div>
  );
};

export default AcountButton;
