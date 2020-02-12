import React from "react";
import { Link } from "react-router-dom";

import "../Header/Header.scss";
import "./Footer.scss";

function Footer() {
  return (   
      <div className="header footer">
        <div className="header__links footer__links">
          <div>
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div>
            <Link to="/ads" className="link">
              Cars
            </Link>
          </div>
          
        </div>

        <div className="header__title footer__title">
          <span>Car</span>Dealer, 2020
        </div>

        <div className="header__links footer__links">
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/myads">My cars</Link>
          </div>
        </div>
      </div>
  );
}

export default Footer;
