import React, { Component } from "react";
import { Link } from "react-router-dom";

import WOW from 'wowjs';

import car_transparent from "../../public/assets/imgs/car_transparent.png";
import facebook from "../../public/assets/imgs/facebook.png";
import twitter from "../../public/assets/imgs/twitter.png";
import youtube from "../../public/assets/imgs/youtube.png";
import instagram from "../../public/assets/imgs/instagram.png";

import "./Contacts.scss";

class Contacts extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
      <div className="contacts">
     
        <div className="contacts__title wow flipInY">Contacts</div>
  
      
        <div className="contacts__container">
          <img
            className="contacts__image"
            src={car_transparent}
            alt="car_transparent.png"
          />

          <div className="contacts__container2">
            <div className="contacts__uls">
              <div className="contacts__ul1">
                <ul>
                  <li>
                    <strong>Phone:</strong>{" "}
                  </li>
                  <li>
                    <strong>Adress:</strong>{" "}
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                  </li>
                </ul>
              </div>
              <div className="contacts__ul2">
                <ul>
                  <li>(+792) 423-34-32 </li>
                  <li>2621 S Wilmington St, Raleigh, NC </li>
                  <li>car-dealer-app@gmail.com </li>
                </ul>
              </div>
            </div>
            <div className="contacts__links">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={youtube} alt="youtube" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
