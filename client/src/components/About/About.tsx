import React from "react";

import "./About.scss";

import translate from "../../i18n/translate";

class About extends React.Component<any, any> {
  render() {
    return (
      <div className="about">
        <div className="about__title">{translate("aboutCarDealer")}</div>
        <div className="about__container">{translate("about1")}</div>
        <div className="about__container">
          {translate("about2")}
        </div> <br /> <br />
        <div className={"about__container"}>
          {translate("usingApp")}

          <ul>
            <li>{translate("buyCars")}</li>
            <li>{translate("sellCars")}</li>
            <li>
              {translate("sortCars")}
              <br />
              <span>
                {translate("priceLi")} <br />
                {translate("carTypeLi")} <br />
                {translate("carBrandLi")}{" "}
              </span>
            </li>
            <li>{translate("updateAd")}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
