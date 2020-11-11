import React from "react";

import "./CreateAd";
import "./CreateAd.scss";

import { postAd } from "../../services/RestService";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import translate from "../../i18n/translate";
class CreateAd extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      carImage: "",
      carName: "",
      carDescription: "",
      carModel: "",
      carYear: null,
      carType: "Sedan",
      carTypeImage: "https://image.flaticon.com/icons/png/512/55/55283.png",
      carUsed: "New car",
      carPrice: null,
      carMileage: null,
      fuelConsumption: null,
      maxSpeed: null,
      carFullDescription: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    console.log([this.state]);

    try {
      const created = postAd([this.state]);
      alert("Ad successfully created!");
    } catch (error) {
      alert("Error creating ad!");
    }
    const createHistory = require("history").createBrowserHistory;
    let history = createHistory();
    history.push("/ads");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  }
  handleCancel() {
    const createHistory = require("history").createBrowserHistory;
    let history = createHistory();
    history.push("/ads");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = event.target.value;
    if (name == "Sedan") {
      this.setState({
        carTypeImage: "https://image.flaticon.com/icons/png/512/55/55283.png",
      });
    }
    if (value == "Coupe") {
      this.setState({
        carTypeImage: "https://image.flaticon.com/icons/png/512/55/55180.png",
      });
    }
    if (value == "SUV") {
      this.setState({
        carTypeImage: "https://image.flaticon.com/icons/png/512/55/55280.png",
      });
    }
    if (value == "4x4") {
      this.setState({
        carTypeImage:
          "https://www.flaticon.com/svg/static/icons/svg/37/37859.svg",
      });
    }
    if (value == "Hatchback") {
      this.setState({
        carTypeImage: "https://image.flaticon.com/icons/png/512/55/55308.png",
      });
    }
    if (name == "Pickup") {
      this.setState({
        carTypeImage: "https://image.flaticon.com/icons/png/512/55/55277.png",
      });
    }
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} data-testid="createAd">
        <div className="title">{translate("enterInfo")}</div>
        <div className={"car__container"}>
          <div className="car__image">
            <input
              className="car__info-input img"
              type="text"
              name="carImage"
              placeholder="car image link (1920x1280)"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="car__info">
            <div className="car__title">
              {" "}
              <input
                className="car__title-input"
                type="text"
                name="carName"
                placeholder="car brand and model"
                onChange={this.handleChange}
                required
              />{" "}
            </div>
            <div className="car__description">
              <textarea
                className="car__description-input"
                name="carDescription"
                placeholder="short description (general info about car)"
                onChange={this.handleChange}
                required
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
                placeholder="car year"
                onChange={this.handleChange}
                required
              />
            </div>
            <br />
            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Usage"
                  src={"https://cdn.onlinewebfonts.com/svg/img_230655.png"}
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <select
                className="car__info-input"
                name="carUsed"
                onChange={this.handleChange}
              >
                <option value="New car">New</option>
                <option value="Used car">Used</option>
              </select>
              <div>
                &nbsp;&nbsp;
                {translate("newOrUsed")}
              </div>
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
              <select
                className="car__info-input"
                name="carType"
                onChange={this.handleChange}
              >
                <option value="Sedan">Sedan</option>
                <option value="Coupe">Coupe</option>
                <option value="SUV">SUV</option>
                <option value="4x4">4x4</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Pickup">Pickup</option>
              </select>
              <div>
                &nbsp;&nbsp;
                {translate("selectCarType")}
              </div>
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
                placeholder="car price"
                onChange={this.handleChange}
                required
              />
              <div>$</div>
            </div>
            <br />
            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Mileage"
                  src={
                    "https://static.thenounproject.com/png/238953-200.png"
                  }
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                className="car__info-input"
                type="text"
                name="carMileage"
                placeholder="car mileage (if car is new, enter 0)"
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
                placeholder="fuel consumption"
                onChange={this.handleChange}
              />
              <div>{translate("liters")}/100km</div>
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
              placeholder="full description (driving experience, problems, advantages, etc.)"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className={"car__btn"}>
            <button className="button1 red">{translate("saveChanges")}</button>
                <button className="button1 grey" onClick={this.handleCancel}>{translate("cancel")}</button>

             
          </div>
        </div>
      </form>
    );
  }
}

export default CreateAd;
