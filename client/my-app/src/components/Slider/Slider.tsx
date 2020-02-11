import React from "react";
import { Link, Switch } from "react-router-dom";
import "./Slider.scss";

import mercedes1 from "../../public/assets/imgs/mercedes1.jpg";
import mercedes2 from "../../public/assets/imgs/mercedes2.jpg";
//---------------------------------------------------
//--------------------------------------------------------------
interface IProps {
  images?: string[];
  title?: string[];
  description?: string[];
}



function nextSlide() {
  
}
function prevSlide() {

}


const Slider = (props: IProps) => {
  return (
      <div className="slider">
        <div className="slider__slide1">
          <img src={mercedes1} alt="mercedes1.jpg"/>
        </div>
        <div className="slider__slide2">
          <img src={mercedes2} alt="mercedes2.jpg"/>
        </div>
        <button className="slider__button prev">prev</button>
        <button className="slider__button next">next</button>
      </div>
    );
};

export default Slider;
