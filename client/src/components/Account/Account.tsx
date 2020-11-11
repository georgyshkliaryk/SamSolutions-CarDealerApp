import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import translate from "../../i18n/translate";

import "./Account.scss";
import EditButton from "../buttons/EditButton/EditButton";
import LogoutPage from "../../pages/LogoutPage";

const Account = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="account__container">
        <h1>
          {translate("hello")},&nbsp;&nbsp;&nbsp; {user.name}!
        </h1>
        <div className="account__info">
          <div>
            <img src={user.picture} alt={user.name} />
          </div>
          <div className="account__user">
            <div>
              <b>{translate("accountName")} </b>
            </div>
            <div>
              <b>CarDealer {translate("nickname")}: </b>
            </div>
            <div>
              <b>{translate("email")} </b>
            </div>
            <div>
              <b>{translate("latestLogin")} </b>
            </div>
          </div>
          <div className="account__user">
            <div>{user.name}</div>
            <div>{user.nickname}</div>
            <div>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            <div>{user.updated_at.replace("T",", ").substr(0,20)}</div>
          </div>
        </div>
        <EditButton content={"Logout"} handleClick={() => {alert("You've benn logged out!"); logout()}}/>
      </div>
    );
  } else {
    return <div className="account__container"></div>;
  }
};

export default Account;
