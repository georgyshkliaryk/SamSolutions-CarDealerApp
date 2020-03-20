import React from "react";
import { Link } from "react-router-dom";

export default class LogoutPage extends React.Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("token"); 
    }
  render() {
    return (
      <div>
        <div>You have been logged out!</div>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
