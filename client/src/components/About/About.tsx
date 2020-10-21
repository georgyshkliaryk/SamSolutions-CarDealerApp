import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./About.scss";

class About extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }

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
                <div className="about__container">
                    Application for searching and selling cars. There is user authentication, selection of cars by body
                    type, price, manufacturer, etc. It is possible to leave a review, change the language of the
                    application. Possible as buying a car, and posting announcements about their sale.
                </div> <br/> <br/>
              <div className={"about__container"}>
                Using this web-app you can:
                <ul>
                  <li>Buy cars;</li>
                  <li>Sell cars;</li>
                  <li>Sort cars ads by: <br/>
                  <span>price <br/>
                  car type <br/>
                  car brand </span>
                  </li>
                  <li>Update and edit your car ad.</li>
                </ul>
              </div>
            </div>
        );
    }
}

export default About;
