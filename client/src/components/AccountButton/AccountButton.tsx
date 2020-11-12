import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import translate from "../../i18n/translate";
import adminList from "../../admin/adminList";

import "./AccountButton.scss";

const AcountButton = () => {
  const { isAuthenticated, user } = useAuth0();

  let display = {
    display: "none",
  };
  if (!isAuthenticated) {
    display = {
      display: "none",
    };
  } else {
    display = {
      display: "block",
    };
  }

  if (isAuthenticated && adminList.includes(user.nickname)) {
    return (
      <div className="headerButton" style={display}>
        <div>{translate("account")}</div>
        <div className="admin">ADMIN ACCOUNT</div>
      </div>
    );
  } else {
    return (
      <div className="headerButton" style={display}>
        <div>{translate("account")}</div>
      </div>
    );
  }
};

export default AcountButton;
