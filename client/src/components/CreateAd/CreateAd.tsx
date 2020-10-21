import "./CreateAd";
import React, { useState } from "react";
//import { useForm } from "react-hook-form";

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./CreateAd.scss";

import SaveCancel from "../SaveCancel/SaveCancel";
import EditButton from "../buttons/EditButton/EditButton";
import { register } from "../../serviceWorker";
import { IProps } from "../Slider/Slider";

import { postAd } from "../../services/RestService";

class CreateAd extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      carName: "",
      carDescription: "",
      carModel: "",
      carYear: null,
      carType: "",
      carPrice: null,
      carMileage: null,
      fuelConsumption: null,
      maxSpeed: null,
      carFullDescription: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // const { register, handleSubmit } = useForm();
  handleClick(event) {
    event.preventDefault();
    console.log([this.state]);

    try {
      const created = postAd([this.state]);
      console.log(created);
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <div className="title">Please, enter information about your car</div>
        <div className={"car__container"}>
          <div className="car__image">
            <input
              className="car__info-input img"
              type="text"
              name="carImage"
              //   value={props.model}
              //   disabled={props.inputs}
              placeholder="car image link (1920x1280)"
              onChange={this.handleChange}
            />
          </div>

          <div className="car__info">
            <div className="car__title">
              {" "}
              <input
                className="car__title-input"
                type="text"
                //   value={props.title}
                name="carName"
                //   disabled={props.inputs}
                placeholder="car brand and model"
                onChange={this.handleChange}
              />{" "}
            </div>
            <div className="car__description">
              <textarea
                className="car__description-input"
                name="carDescription"
                //   value={props.description}
                //   disabled={props.inputs}
                placeholder="short description"
                onChange={this.handleChange}
              />
            </div>

            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Brand"
                  src={
                    "https://www.carlogos.org/logo/Eagle-automobile-logo-black-3000x2500.png"
                  }
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                className="car__info-input"
                type="text"
                name="carModel"
                //   value={props.model}
                //   disabled={props.inputs}
                placeholder="car brand"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Year"
                  src={
                    "https://freeiconshop.com/wp-content/uploads/edd/calendar-solid.png"
                  }
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                className="car__info-input"
                type="text"
                name="carYear"
                //   value={props.year}
                //   disabled={props.inputs}
                placeholder="car year"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Type"
                  src={"https://image.flaticon.com/icons/png/512/55/55308.png"}
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                className="car__info-input"
                type="text"
                name="carType"
                //   value={props.type} //sedan coupe etc
                //   disabled={props.inputs}
                placeholder="car type"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Price"
                  src={
                    "https://www.koenvandieren.com/wp-content/uploads/2019/06/icon-logo-price-dark.png"
                  }
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                className="car__info-input"
                type="text"
                name="carPrice"
                //   value={props.price}
                //   disabled={props.inputs}
                placeholder="car price"
                onChange={this.handleChange}
              />
              <div>$</div>
            </div>
            <br />
            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Mileage"
                  src={
                    "https://obhajiwala.com/assets/less/icons/ionicons/png/512/ios7-speedometer.png"
                  }
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                className="car__info-input"
                type="text"
                name="carMileage"
                //   value={props.mileage}
                //   disabled={props.inputs}
                placeholder="car mileage"
                onChange={this.handleChange}
              />
              <div>km</div>
            </div>
            <br />
            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Fuel Consumption"
                  src={
                    "https://www.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/132-512.png"
                  }
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                className="car__info-input"
                type="text"
                name="fuelConsumption"
                //   value={props.fuel}
                //   disabled={props.inputs}
                placeholder="fuel consumption"
                onChange={this.handleChange}
              />
              <div>liters/100km</div>
            </div>
            <br />
            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Max Speed"
                  src={
                    "https://icons-for-free.com/iconfiles/png/512/performance+speed+icon-1320183237988780008.png"
                  }
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                className="car__info-input"
                type="text"
                name="maxSpeed"
                //   value={props.maxspeed}
                //   disabled={props.inputs}
                placeholder="max speed"
                onChange={this.handleChange}
              />
              <div>km/h</div>
            </div>
          </div>
          <br />
          <div className="car__description full">
            <textarea
              className="car__description-input full2"
              name="carFullDescription"
              // value={props.fulldescription}
              // disabled={props.inputs}
              placeholder="full description (driving experience, problems, advantages, etc.)"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className={"car__btn"}>
            {/* {props.mode === "edit" ? (
            <SaveCancel save="Save changes" cancel="Cancel" />
          ) : props.mode == "view" ? (
            <EditButton content="Edit" linkTo={props.id} />
          ) : (
            <SaveCancel save="Apply" cancel="Cancel" />
          )} */}
            <button className="button red" onClick={this.handleClick}>
              Save changes
            </button>
            <button className="button grey" onClick={this.handleClick}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CreateAd;
