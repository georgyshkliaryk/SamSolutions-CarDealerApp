import React from "react";
import { Link } from "react-router-dom";
import Img from 'react-image'

import "./Ads.scss";
import AdCard from "./AdCard";

import { IAd } from "../../models/IAd";
import { IProps } from "../../models/IProps";
import mercedes1 from "../../public/assets/imgs/mercedes1.jpg"

let mappedImage: string;

function Ads(props: IProps) {
  return (
    <div className="ads">
      <div className="ads__title">Available cars</div>
      <div className="ads__container">
        {props.ads.map(ad => {
          return (
            
            <AdCard
              title={ad.carName}
              description={ad.carDescription}
              img={`${ad.carImage}`}
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
