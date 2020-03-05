import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import SearchButton from "../buttons/SearchButton/SearchButton";

class Login extends React.Component<any, any> {
  render() {
    return (
      <div className="login">
        <div className="login__title">Login or register now!</div>
        <div className="main__container">
          <div className="login__container">
            <div className="login__container-title small-title">LOGIN</div>
            <form className="login__container-form">
              <input type="text" placeholder="login" />
              <br />
              <input type="password" placeholder="password" />
              <br />
              <span className="additional">
                  <Link to="">forgot password?</Link>
              </span>
              <div className="login__btn">
                <Link to="/">
                  <SearchButton content="Confirm" />
                </Link>
              </div>
            </form>
          </div>
          <div className="register__container">
            <div className="login__container-title small-title">REGISTER</div>
            <form className="login__container-form">
              <input type="text" placeholder="login" />
              <br />
              <input type="password" placeholder="password" />
              <br />
              <input type="password" placeholder="confirm password" /><br/>
              <span className="additional">
                  <Link to="">sign in as a guest</Link>
              </span>
              <div className="register__btn">
                <Link to="/">
                  <SearchButton content="Confirm" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;