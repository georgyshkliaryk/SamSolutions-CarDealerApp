import React from "react";
import { Link } from "react-router-dom";
import Img from "react-image";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import "./Ads.scss";
import AdCard from "./AdCard";

import { IAd } from "../../models/IAd";
import { IProps } from "../../models/IProps";
import mercedes1 from "../../public/assets/imgs/mercedes1.jpg";
import { getStatus } from "../Welcome/Welcome";

function Ads(props: IProps) {
  let { path, url } = useRouteMatch();

  return (
    <div className="ads">
      <div className="ads__title wow flipInY"
      data-wow-delay="0.3s">{props.title}</div>
      <div className="ads__container">
        {props.ads.map((ad: any, i: number = 0) => {
          //let carUsagePath: string;
          let carUsage: string;
          let newCarAds: object[] = [];
          let usedCarAds: object[] = [];
          if (ad.carUsed=="Used car") {
           // carUsagePath = "usedcars";
            carUsage = "used";
            usedCarAds.push(ad);
          } else {
           // carUsagePath = "newcars";
            carUsage = "new";
            newCarAds.push(ad);
          }

          return (
            
              <AdCard
                title={ad.carName}
                typeImg={ad.carTypeImage}
                type={ad.carType}
                year={ad.carYear}
                price={ad.carPrice}
                usage={carUsage}
                description={ad.carDescription}
                fulldescription={ad.carFullDescription}
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
