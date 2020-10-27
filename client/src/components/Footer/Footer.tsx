import React from "react";
import { Link } from "react-router-dom";

import "../Header/Header.scss";
import "./Footer.scss";

import translate from '../../i18n/translate';

function Footer() {
  return (   
      <div className="header footer">
        <div className="header__links footer__links">
          <div>
            <Link to="/" className="link">
              {translate("home")}
            </Link>
          </div>
          {/* <div>
            <Link to="/ads/newcars" className="link">
              New cars
            </Link>
          </div>
          <div>
            <Link to="/ads/usedcars" className="link">
              Used cars
            </Link>
          </div> */}
          
        </div>

        <div className="header__title footer__title">
          <span>Car</span>Dealer, 2020
        </div>

        <div className="header__links footer__links">
          <div>
            <Link to="/about">{translate("about")}</Link>
          </div>
          {/* <div>
            <Link to="/myads">My cars</Link>
          </div> */}
        </div>
      </div>
  );
}

export default Footer;
