import React from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

import "./Slider.scss";

import { IAd } from "../../models/IAd";

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
      currentImageIndex: 0,
    };

    this.nextSlideHandler = this.nextSlideHandler.bind(this);
  }

  componentDidMount() {
    new WOW.WOW().init();
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

  render() {
    try {
      return (
        <div className="slider">
          <div className="slider__slide">
            <img
              src={this.props.ads[this.state.currentImageIndex].carImage}
              alt={this.props.ads[this.state.currentImageIndex].carImage}
              onError={(e: any)=>{e.target.onerror = null; e.target.title="Image not found"; e.target.src="https://images.wallpaperscraft.com/image/lights_car_dark_128635_1920x1080.jpg"}}
            />
            <div className="slide__title wow fadeInLeft">
              <Link
                to={`/ads/view/${
                  this.props.ads[this.state.currentImageIndex]._id
                }`}
              >
                {this.props.ads[this.state.currentImageIndex].carName}
              </Link>
            </div>
            <div className="slide__description wow fadeInRight">
              {this.props.ads[this.state.currentImageIndex].carDescription}
            </div>
          </div>
          <button
            className="slider__button prev wow bounceInLeft"
            data-wow-delay="1s"
            data-direction="prev"
            onClick={this.nextSlideHandler.bind(this)}
          >
            &lsaquo;
          </button>
          <button
            className="slider__button next wow bounceInRight"
            data-wow-delay="1s"
            data-direction="next"
            onClick={this.nextSlideHandler.bind(this)}
          >
            &rsaquo;
          </button>
        </div>
      );
    } catch (e) {
      return <div className="slider__err">No images available...</div>;
    }
  }
}

export default Slider;
