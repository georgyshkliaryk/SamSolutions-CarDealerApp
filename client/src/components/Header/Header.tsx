import React from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

import "./Header.scss";

class Header extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div className="header">
        <div className="header__links">
          <div className="link wow bounceInDown" data-wow-delay="0.4s">
            <Link to="/">Home</Link>
          </div>
          <div className="link link-1 wow bounceInDown" data-wow-delay="0.3s">
            <Link to="/ads" className="link cars__link">
              Cars <div></div>
            </Link>
            {/* <div className="header__chose-menu">
              <div>
                <Link to="/ads/newcars" className="link">
                  New cars
                </Link>
              </div>
              <div>
                <Link to="/ads/usedcars" className="link">
                  Used cars
                </Link>
              </div>
            </div> */}
          </div>
          <div className="wow bounceInDown" data-wow-delay="0.2s">
            <Link to="/about">About</Link>
          </div>
          {/* <div className="wow bounceInDown" data-wow-delay="0.1s">
            <Link to="/myads">My cars</Link>
          </div> */}
        </div>

        <div className="header__title">
          <span>Car</span>Dealer
        </div>

        <div
          className="header__links register wow bounceInDown"
          data-wow-delay="0.3s"
        >
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    );
  }
}

export default Header;
