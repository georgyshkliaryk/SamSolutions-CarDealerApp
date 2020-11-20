import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./LoginButton.scss";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  let content = "Login";
  if (!isAuthenticated) {
    content = "Login";
  } else {
    content = "Logout";
  }

  function handleClick() {
    if (isAuthenticated == true) {
      alert("You've been logged out!");
      logout();
    } else {
      loginWithRedirect();
    }
  }

  return (
    <div className="headerButton">
      <div onClick={() => handleClick()}>{content}</div>
    </div>
  );
};

export default LoginButton;
