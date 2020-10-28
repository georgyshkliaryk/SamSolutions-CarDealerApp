import React from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./Welcome.scss";
import Statistics from "../Statistics/Statistic";

import { IProps } from "../../models/IProps";
import { IAd } from "../../models/IAd";

import translate from "../../i18n/translate";

import WOW from "wowjs";

export function getStatus(ads: IAd[], search: any) {
  return ads.filter(function (item: any) {
    return Object.keys(item).some(function (key) {
      return item[key] === search;
    });
  });
}

function Welcome(props: IProps) {
  useEffect(() => {
    new WOW.WOW().init();
  });

  return (
    <div className="welcome">
      <div className="welcome__title wow flipInX" data-wow-delay="0.5s">
        {translate("welcome")}
      </div>
      <div className="welcome__components">
        <Statistics
          newCars={getStatus(props.ads, "Used car").length}
          usedCars={getStatus(props.ads, "New car").length}
          clients={Object.keys(sessionStorage).length}
        />
        <Link to="/about">
          <SearchButton
            content={translate("learnMoreBtn", {
              arrow: <span>&rsaquo;</span>,
            })}
          />
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
