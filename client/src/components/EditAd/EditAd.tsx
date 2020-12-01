import React from "react";

import "./EditAd.scss";

import { editAd } from "../../services/RestService";
import { IAd } from "../../models/IAd";

import translate from "../../i18n/translate";

class EditAd extends React.Component<any, {}> {
  state: IAd;
  constructor(props: any) {
    super(props);

    this.state = {
      carImage: this.props.image,
      carName: this.props.title,
      carDescription: this.props.description,
      carModel: this.props.model,
      carYear: this.props.year,
      carType: this.props.type,
      carTypeImage: "https://image.flaticon.com/icons/png/512/55/55283.png",
      carUsed: this.props.used,
      carPrice: this.props.price,
      carMileage: this.props.mileage,
      fuelConsumption: this.props.fuel,
      maxSpeed: this.props.maxspeed,
      carFullDescription: this.props.fulldescription,
      createdBy: this.props.createdBy,
      createdByEmail: this.props.createdByEmail,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeDecimal = this.handleChangeDecimal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      createdBy: this.props.userName,
      createdByEmail: this.props.userEmail,
    });
    try {
      const edited = editAd(this.state, this.props.id);
      alert("Ad successfully updated!");
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
    history.push(`/ads`);
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  }

  handleChangeNumber(event) {
    const digitsOnly = new RegExp("^[0-9]+$");
    const target = event.target;
    const name = target.name;
    const value = event.target.value;
    if (!value.match(digitsOnly) && value != "") {
      alert("Digits only!");
      event.target.value = "";
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleChangeDecimal(event) {
    const decimals = new RegExp("^[0-9.]+$");
    const target = event.target;
    const name = target.name;
    const value = event.target.value;
    if (!value.match(decimals) && value != "") {
      alert("Digits/Decimals only!");
      event.target.value = "";
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = event.target.value;
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
      <form onSubmit={this.onSubmit} data-testid="createAd" className="car__fragment">
        <div className="title">{translate("editInfo")}</div>
        <div className={"car__container"}>
          <div className="car__image">
            <img
              src="https://static.thenounproject.com/png/3927-200.png"
              alt="upload image icon"
              title="car image link (1920x1280)"
              className="car__image-icon"
            />
            <input
              className="car__info-input img"
              type="text"
              name="carImage"
              value={this.state.carImage}
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
                value={this.state.carName}
                onChange={this.handleChange}
                required
              />{" "}
            </div>
            <div className="car__description">
              <textarea
                className="car__description-input"
                name="carDescription"
                value={this.state.carDescription}
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
                className="car__info-input brand"
                type="text"
                name="carModel"
                value={this.state.carModel}
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
                value={this.state.carYear}
                placeholder="car year"
                onChange={this.handleChangeNumber}
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
                value={this.state.carUsed}
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
                value={this.state.carType}
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
                value={this.state.carPrice}
                placeholder="car price"
                onChange={this.handleChangeNumber}
                required
              />
              <div>$</div>
            </div>
            <br />
            <div className={"car__info carflex"}>
              <div>
                <img
                  title="Mileage"
                  src={"https://static.thenounproject.com/png/238953-200.png"}
                />
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                className="car__info-input"
                type="text"
                name="carMileage"
                value={this.state.carMileage}
                placeholder="car mileage (if car is new, enter 0)"
                onChange={this.handleChangeNumber}
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
                value={this.state.fuelConsumption}
                placeholder="fuel consumption"
                onChange={this.handleChangeDecimal}
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
                value={this.state.maxSpeed}
                placeholder="max speed"
                onChange={this.handleChangeNumber}
              />
              <div>km/h</div>
            </div>
          </div>
          <br />
          <div className="car__description full">
            <textarea
              className="car__description-input full2"
              name="carFullDescription"
              value={this.state.carFullDescription}
              placeholder="full description (driving experience, problems, advantages, etc.)"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className={"car__btn"}>
            <button className="button1 red">{translate("saveChanges")}</button>
            <button
              type="button"
              className="button1 grey"
              onClick={this.handleCancel}
            >
              {translate("cancel")}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default EditAd;
