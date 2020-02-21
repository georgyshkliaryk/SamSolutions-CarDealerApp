import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "./Slider.scss";

import mercedes1 from "../../public/assets/imgs/mercedes1.jpg";
import mercedes2 from "../../public/assets/imgs/mercedes2.jpg";
import audi1 from "../../public/assets/imgs/audi1.jpg";

import { IAd } from "../../models/IAd";
//---------------------------------------------------
/*interface IProps {
  images: string[];
  title?: string[];
  description?: string[];
}*/
//--------------------------------------------------------------
export interface IProps {
  ads: IAd[];
}
class Slider extends React.Component<
  IProps,
  {
    currentImageIndex: number;
  }
> {
  constructor(props: IProps) {
    super(props);

    this.state = {
       currentImageIndex: 0
    };

    this.nextSlideHandler = this.nextSlideHandler.bind(this);
  }

  nextSlideHandler(e: any) {
    let newIndex = this.state.currentImageIndex;
    if (e.currentTarget.dataset.direction === "next") {
      newIndex = this.state.currentImageIndex + 1;
    } else {
      newIndex = this.state.currentImageIndex - 1;
    }
    if (newIndex >= this.props.ads.length) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = this.props.ads.length - 1;
    }
    this.setState({ currentImageIndex: newIndex });
  }

  //const Slider = (props: IProps) => {
  render() {
    let usage: string;
    if (this.props.ads[this.state.currentImageIndex].carUsed) {
      usage = "usedcars";
    }
    else {
      usage = "newcars";
    }
    return (
      <div className="slider">
        <div className="slider__slide">
          <img
            src={this.props.ads[this.state.currentImageIndex].carImage}
            alt="lol"
          />
          <div className="slide__title">
            <Link to={`/ads/${usage}/${this.props.ads[this.state.currentImageIndex].carName}`}>{this.props.ads[this.state.currentImageIndex].carName}</Link>
          </div>  
          <div className="slide__description">
            {this.props.ads[this.state.currentImageIndex].carDescription}
          </div>
        </div>
        <button
          className="slider__button prev"
          data-direction="prev"
          onClick={this.nextSlideHandler.bind(this)}
        >
          &lsaquo;
        </button>
        <button
          className="slider__button next"
          data-direction="next"
          onClick={this.nextSlideHandler.bind(this)}
        >
          &rsaquo;
        </button>
      </div>
    );
    }
  }
 

export default Slider;
