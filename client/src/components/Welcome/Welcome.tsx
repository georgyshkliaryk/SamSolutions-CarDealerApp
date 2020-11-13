import React from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./Welcome.scss";
import Statistics from "../Statistics/Statistic";

import { IProps } from "../../models/IProps";
import { IAd } from "../../models/IAd";

import translate from "../../i18n/translate";

import WOW from "wowjs";
import userEvent from "@testing-library/user-event";

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

function countMyAds(ads: IAd[]) {
    let count = 0;
    if (isAuthenticated) {
    for (let i=0; i<ads.length; i++) {
      if (ads[i].createdBy == user.nickname) {
        count++;
      }
    }
  }
    return count;
  }

  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="welcome">
      <div className="welcome__title wow flipInX" data-wow-delay="0.5s">
        {translate("welcome")}
      </div>
      <div className="welcome__components">
        <Statistics
          newCars={getStatus(props.ads, "Used car").length}
          usedCars={getStatus(props.ads, "New car").length}
          myAds={countMyAds(props.ads)}
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
