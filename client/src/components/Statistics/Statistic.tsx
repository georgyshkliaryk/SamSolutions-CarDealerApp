import React from "react";

import "react-count-animation/dist/count.min.css";
import AnimationCount from "react-count-animation";

import WOW from "wowjs";

import "./Statistics.scss";
import { useEffect } from "react";

import translate from "../../i18n/translate";

function Statistics(props: any) {
  useEffect(() => {
    new WOW.WOW().init();
  });

  const settings1 = {
    start: 0,
    count: props.newCars,
    duration: 3000,
    useGroup: true,
    animation: "up",
  };
  const settings2 = {
    start: 0,
    count: props.usedCars,
    duration: 3000,
    useGroup: true,
    animation: "up",
  };
  const settings3 = {
    start: 0,
    count: props.clients,
    duration: 3000,
    useGroup: true,
    animation: "up",
  };
  return (
    <div className="statistics">
      <div className="statistics__card" data-wow-delay="1s">
        <span>
          {" "}
          <AnimationCount {...settings1} />{" "}
        </span>
        {translate("newCarsCount")}
      </div>
      <div className="statistics__card">
        <span>
          {" "}
          <AnimationCount {...settings2} />{" "}
        </span>
        {translate("usedCarsCount")}
      </div>
      {/* <div className="statistics__card">
        <span>
          <AnimationCount {...settings3} />
        </span>
        {translate("clientsCount")}
      </div> */}
    </div>
  );
}

export default Statistics;
