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
        {props.ads.map(ad => {
          let carUsagePath: string;
          let carUsage: string;
          let newCarAds: object[] = [];
          let usedCarAds: object[] = [];
          if (ad.carUsed) {
            carUsagePath = "usedcars";
            carUsage = "used";
            usedCarAds.push(ad);
          } else {
            carUsagePath = "newcars";
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
                img={`${ad.carImage}`}
                path={"/ads/" + carUsagePath + "/" + ad._id}
              />
          );
        })}

        {/*<AdCard title="Mercedes-Benz CLS AMG (2015)" description={description[0]} img={mercedes1}/>
                <AdCard title="Mercedes-Benz GT (2018)" description={description[1]} img={mercedes2}/>
                <AdCard title="BMW M5 F90 (2017)" description={description[2]} img={bmw2}/>
            <AdCard title="Audi A5 (2019)" description={description[3]} img={audi1}/>*/}
      </div>
    </div>
  );
}
export default Ads;
