import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import "./Ads.scss";
import AdCard from "./AdCard";

import { IProps } from "../../models/IProps";

function Ads(props: IProps) {
  let { path, url } = useRouteMatch();

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
              img={`${ad.carImage}`}
              path={"/ads/view/" + ad._id}
              key={i++}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Ads;
