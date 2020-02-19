import React from "react";
import { Link } from "react-router-dom";

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./Welcome.scss";
import Statistics from "../Statistics/Statistic";

import { IProps } from "../../models/IProps";
import { IAd } from "../../models/IAd";


//import {ads} from '../CarAds/Ads';

export function getStatus(ads: IAd[], search: any) {
  return ads.filter(function(item: any) {
    return Object.keys(item).some(function(key) {
      return item[key] === search;
    });
  });
} 

function Welcome(props: IProps) {
  return (
    <div className="welcome">
      <div className="welcome__title">Welcome to CarDealer!</div>
      <div className="welcome__components">
        <Statistics
          newCars={getStatus(props.ads, true).length}
          usedCars={getStatus(props.ads, false).length}
        />
        <Link to="/about"><SearchButton content="Learn More &rsaquo;"/></Link>
      </div>
    </div>
  );
}

export default Welcome;
