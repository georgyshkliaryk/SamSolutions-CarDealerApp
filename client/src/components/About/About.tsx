import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./About.scss";

import translate from '../../i18n/translate';

class About extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (

            <div className="about">
                <div className="about__title">{translate("aboutCarDealer")}</div>
                <div className="about__container">
                    {translate("about1")}
                </div>
                <div className="about__container">
                    {translate("about2")}
                </div> <br/> <br/>
              <div className={"about__container"}>
                  {translate("usingApp")}
                {/* Using this web-app you can: */}
                <ul>
                  <li>{translate("buyCars")}</li>
                  <li>{translate("sellCars")}</li>
                  <li>
                      {/* Sort cars ads by:  */}
                      {translate("sortCars")}
                    <br/>
                  <span>{translate("priceLi")} <br/>
                  {translate("carTypeLi")} <br/>
                  {translate("carBrandLi")} </span>
                  </li>
                  <li>
                    {translate("updateAd")}
                      {/* Update and edit your car ad. */}
                  </li>
                </ul>
              </div>
            </div>
        );
    }
}

export default About;
