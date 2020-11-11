import React from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import { useAuth0 } from '@auth0/auth0-react';

import "./Header.scss";
import translate from "../../i18n/translate";
import LoginButton from "../LoginButton/LoginButton";

class Header extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
   // const { loginWithRedirect, isAuthenticated } = useAuth0();
  }
  state = {
    eng: 0,
    de: 1,
  };
  componentDidMount() {
    new WOW.WOW().init();
  }

  

  render() {
    return (
      <div className="header">
        <div className="header__links first">
          <div className="link wow bounceInDown" data-wow-delay="0.4s">
            <Link to="/">{translate("home")}</Link>
          </div>
          <div className="link link-1 wow bounceInDown" data-wow-delay="0.3s">
            <Link to="/ads" className="link cars__link">
              {translate("cars")} <div></div>
            </Link>
          </div>
          <div className="link wow bounceInDown" data-wow-delay="0.2s">
            <Link to="/about">{translate("about")}</Link>
          </div>
        </div>

        <div className="header__title">
          <Link to="/">
            Car<span className={"dealer"}>Dealer</span>
          </Link>
        </div>

        <div
          className="header__links register wow bounceInDown"
          data-wow-delay="0.3s"
        >
          <div className="link wow bounceInDown" data-wow-delay="0.2s">
            <img
              className="flag uk"
              src="https://icon-library.com/images/icon-english/icon-english-11.jpg"
              alt="eng"
              title="English"
              onClick={() => this.props.updateData(this.state.eng)}
              style={{ visibility: this.props.lang }}
            />
            <img
              className="flag de"
              src="https://cdn.countryflags.com/thumbs/germany/flag-round-250.png"
              alt="de"
              title="German"
              onClick={() => this.props.updateData(this.state.de)}
              style={{ visibility: this.props.lang }}
            />
          </div>

          <div className="link wow bounceInDown" data-wow-delay="0.3s">
            <LoginButton />
          </div>

          {/* <div className="link wow bounceInDown" data-wow-delay="0.4s">
            <Link to="/logout">{translate("logout")}</Link>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
