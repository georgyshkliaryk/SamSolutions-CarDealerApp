import React from "react";
import { Link } from "react-router-dom";

import "../Header/Header.scss";
import "./Footer.scss";

import translate from "../../i18n/translate";

function Footer() {
  return (
    <div className="header footer">
      <div className="header__links footer__links">
        <div>
          <Link to="/" className="link">
            {translate("home")}
          </Link>
        </div>
      </div>

      <div className="header__title footer__title">
        <span>Car</span>Dealer,&nbsp;2020
      </div>

      <div className="header__links footer__links">
        <div>
          <Link to="/about">{translate("about")}</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
