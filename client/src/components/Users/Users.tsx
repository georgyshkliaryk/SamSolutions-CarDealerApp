import React from "react";

import "./Users.scss";

import translate from "../../i18n/translate";

class Users extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  getLogins = () => {
    return Object.values(sessionStorage).join(" ");
  };

  render() {
    return (
      <div className={"users__container"}>
        <span>{translate("activeUsers")} </span>
        <br />
        <div> {this.getLogins()} </div>
      </div>
    );
  }
}

export default Users;
