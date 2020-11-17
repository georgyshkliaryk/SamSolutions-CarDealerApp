import React from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import { useAuth0 } from "@auth0/auth0-react";

import "./Header.scss";
import translate from "../../i18n/translate";
import LoginButton from "../LoginButton/LoginButton";
import AccountButton from "../AccountButton/AccountButton";
import Language from "./Language";
import { throws } from "assert";

class Header extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);

    
  }
  componentDidMount() {
    new WOW.WOW().init();

  }
  componentDidUpdate() {
    // console.log(this.state.lang);
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
          
          <Language handleClickEng={this.props.handleClickEng} handleClickDe={this.props.handleClickDe}/> 

          <div className="link wow bounceInDown" data-wow-delay="0.3s">
            <Link to="/profile">
              <AccountButton />
            </Link>
          </div>
          <div className="link wow bounceInDown" data-wow-delay="0.4s">
            <LoginButton />
          </div>

        </div>
      </div>
    );
  }
}

export default Header;
