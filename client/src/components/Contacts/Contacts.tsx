import React from "react";

import car_transparent from "../../public/assets/imgs/car_transparent.png";
import facebook from "../../public/assets/imgs/facebook.png";
import twitter from "../../public/assets/imgs/twitter.png";
import youtube from "../../public/assets/imgs/youtube.png";
import instagram from "../../public/assets/imgs/instagram.png";

import "./Contacts.scss";

import translate from "../../i18n/translate";

class Contacts extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="contacts">
        <div className="contacts__title wow flipInY" data-wow-delay="0.5s">
          {translate("contacts")}
        </div>

        <div className="contacts__container">
          <img
            className="contacts__image wow bounceInLeft"
            data-wow-delay="0.7s"
            src={car_transparent}
            alt="car_transparent.png"
          />

          <div className="contacts__container2">
            <div
              className="contacts__uls wow bounceInRight"
              data-wow-delay="1s"
            >
              <div className="contacts__ul1">
                <ul>
                  <li>
                    <strong>{translate("phone")}</strong>{" "}
                  </li>
                  <li>
                    <strong>{translate("adress")}</strong>{" "}
                  </li>
                  <li>
                    <strong>{translate("email")}</strong>{" "}
                  </li>
                </ul>
              </div>
              <div className="contacts__ul2">
                <ul>
                  <li>(+792) 423-34-32 </li>
                  <li>&nbsp;&nbsp;&nbsp;Alt-Lichtenrade, 100, Berlin, Germany</li>
                  <li>cardealer.main@gmail.com </li>
                </ul>
              </div>
            </div>
            <div className="contacts__links">
              <a href="https://www.facebook.com" target="_blank">
                <img
                  className="wow fadeInRight"
                  src={facebook}
                  alt="facebook"
                />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img src={twitter} alt="twitter" className="wow fadeInRight" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <img src={youtube} alt="youtube" className="wow fadeInRight" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img
                  src={instagram}
                  alt="instagram"
                  className="wow fadeInRight"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
