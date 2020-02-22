import React from "react";
import { Link } from "react-router-dom";
import "react-count-animation/dist/count.min.css";
import AnimationCount from "react-count-animation";

import CountUp from 'react-countup';
import WOW from "wowjs";

import "./Statistics.scss";
import { render } from "@testing-library/react";
import { useEffect } from "react";

function Statistics(props: any) {

useEffect(() => {        
    new WOW.WOW().init();    
});

  const settings1 = {
    start: 0,
    count: props.newCars,
    duration: 3000,
    useGroup: true,
    animation: "up"
  };
  const settings2 = {
    start: 0,
    count: props.usedCars,
    duration: 3000,
    useGroup: true,
    animation: "up"
  };
  const settings3 = {
    start: 0,
    count: 20,
    duration: 3000,
    useGroup: true,
    animation: "up"
  };
  return (
    <div className="statistics">
      <div className="statistics__card" data-wow-delay="1s">
        <span>
          {" "}
          <AnimationCount {...settings1} />{" "}
        </span>
        NEW CARS IN STOCK
      </div>
      <div className="statistics__card">
        <span>
          {" "}
          <AnimationCount {...settings2} />{" "}
        </span>
        USED CARS IN STOCK
      </div>
      <div className="statistics__card">
        <span>
          <AnimationCount {...settings3} />
        </span>
        HAPPY CLIENTS
      </div>
    </div>
  );
}

export default Statistics;
