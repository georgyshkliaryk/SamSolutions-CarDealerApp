import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./About.scss";

class About extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <div className="about__title">About CarDealer</div>
        <div className="about__container">
          CarDealer - is a client-server complete web application, built on
          React, MongoDB, Express and Node.js. This app allows You to watch car
          ads, post ur owns, edit them or delete. You can choose a vehicle You
          wish by sorting ads depending on car's price, body type, manufacturer
          and etc. Also there is the separation between new and old cars so You
          can choose suitable especcially for You.
        </div>
      </div>
    );
  }
}

export default About;
