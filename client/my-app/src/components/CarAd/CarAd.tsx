import React from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./CarAd.scss";

const CarAd = (props: any) => {
  return (
    <>
      <div className="car__title">{props.title}</div>
      <div className="car__image">
          <img src={props.image} alt="car image"/></div>
      <div className="car__description">{props.description}</div>
    </>
  );
};

export default CarAd;
