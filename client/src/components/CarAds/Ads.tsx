import React from "react";
import { Link } from 'react-router-dom';


import "./Ads.scss";
import AdCard from "./AdCard";
import MoreButton from "../buttons/MoreButton/MoreButton";

import translate from "../../i18n/translate";

import { IProps } from "../../models/IProps";

function Ads(props: IProps) {
  
  if (props.ads.length == 0) {
    return (
      <div className="ads">
        <div className="ads__title wow flipInY" data-wow-delay="0.3s">
          {props.title}
        </div>
        <div>{translate("noCarsFilter")}</div>

        <div
          style={{
            display: "none"
          }}
        >
          <Link to="/ads">
            <MoreButton
              content={translate("moreAds", {
                arrow: <span>&rsaquo;</span>,
              })}
            />
          </Link>
        </div>

      </div>
    );
  } else {
    return (
      <div className="ads">
        <div className="ads__title wow flipInY" data-wow-delay="0.3s">
          {props.title}
        </div>
        <div className="ads__container">
          {props.ads.map((ad: any, i: number = 0) => {

            let carUsage: string;
            let newCarAds: object[] = [];
            let usedCarAds: object[] = [];
            if (ad.carUsed == "Used car") {
              carUsage = "used";
              usedCarAds.push(ad);
            } else {
              carUsage = "new";
              newCarAds.push(ad);
            }

            return (
              <AdCard
                title={ad.carName}
                typeImg={ad.carTypeImage}
                carUsed={ad.carUsed}
                type={ad.carType}
                year={ad.carYear}
                price={ad.carPrice}
                usage={carUsage}
                description={ad.carDescription}
                fulldescription={ad.carFullDescription}
                createdBy={ad.createdBy}
                createdByEmail={ad.createdByEmail}
                img={`${ad.carImage}`}
                path={"/ads/view/" + ad._id}
                key={i++}
              />
            );
          })}
        </div>
          <div className="moreAds__btn"
          style={props.moreAdsBtn}
        >
          <Link to="/ads">
            <MoreButton
              content={translate("moreAds", {
                arrow: <span>&rsaquo;</span>,
              })}
            />
          </Link>
        </div>
        
      </div>
    );
  }
}

export default Ads;
