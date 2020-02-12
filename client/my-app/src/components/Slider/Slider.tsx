import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "./Slider.scss";

import mercedes1 from "../../public/assets/imgs/mercedes1.jpg";
import mercedes2 from "../../public/assets/imgs/mercedes2.jpg";
import audi1 from "../../public/assets/imgs/audi1.jpg";
//---------------------------------------------------
//--------------------------------------------------------------
class Slider extends React.Component<{}, { currentImageIndex: number, images: string[], title: string[], description: string[] }> {
/*interface IProps {
  images?: string[];
  title?: string[];
  description?: string[];
}   */

constructor(props: any) {
  super(props);

  this.state = {
    images: [mercedes1, mercedes2, audi1],
    title: ['Mercedes-Benz CLS (2015)','Mercedes-Benz GT AMG (2018)','Audi A5 (2019)'],
    description: ['Sporty with an emphasis on comfort, the iconic Mercedes-Benz CLS is a four-door coupe with individual seating for five passengers.',
    'Mercedes-AMG GT S leaves almost everyone behind. The AMG RIDE CONTROL suspension is adjustable in three stages - from comfortable to sporty tight.',
    'The Audi A5 is a series of compact executive coupe cars produced by the German automobile manufacturer Audi since March 2007.'],
    currentImageIndex: 0,


  };

  this.nextSlideHandler = this.nextSlideHandler.bind(this);
}

nextSlideHandler(e: any) {
  let newIndex = this.state.currentImageIndex;
  if (e.currentTarget.dataset.direction === 'next') {
    newIndex = this.state.currentImageIndex + 1;
  }
  else {
    newIndex = this.state.currentImageIndex - 1;
  }
  if (newIndex >= this.state.images.length) {
    newIndex = 0;
  }
  if (newIndex < 0) {
    newIndex = this.state.images.length - 1;
  }
  this.setState({currentImageIndex: newIndex});
}

//const Slider = (props: IProps) => {
render() {
  return (
      <div className="slider">
        <div className="slider__slide">
          <img src={this.state.images[this.state.currentImageIndex]} alt="lol"/> 
          <div className="slide__title">{this.state.title[this.state.currentImageIndex]}</div>
          <div className="slide__description">{this.state.description[this.state.currentImageIndex]}</div>
        </div>
        <button className="slider__button prev" data-direction="prev" onClick={this.nextSlideHandler.bind(this)}>&lsaquo;</button>
        <button className="slider__button next" data-direction="next" onClick={this.nextSlideHandler.bind(this)}>&rsaquo;</button>
      </div>
    );
};
}

export default Slider;
