import React, { Component } from "react";
import WOW from "wowjs";
import "./FilterForm.scss";
import SelectInput from "../SelectInput/SelectInput";
import SearchButton from "../buttons/SearchButton/SearchButton";

import "../../components/RangeInput/RangeInput";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import translate from "../../i18n/translate";

interface IState {
  search?: string;
  manufacturer?: string;
  type?: string;
  used?: string;
  minPrice?: number;
  maxPrice?: number;
}
interface IProps {
  onSubmit(params: IState): void;
}
class FilterForm extends Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  state = {
    search: "",
    manufacturer: "",
    type: "",
    used: "",
    minPrice: 500,
    maxPrice: 30000,

    value: [500, 15000],
    range: { min: 500, max: 15000 },
    pips: {
      mode: "values",
      values: [(500 + 15000) / 2],
      density: 10,
    },
    step: 100,
  };

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <form
        className="filter"
        onSubmit={(event) => {
          event.preventDefault(); // Prevents page reloading

          this.props.onSubmit(this.state);
        }}
      >
        <div className="filter__title">{translate("chooseCar")}</div>
        <div className="filter__components">
          <SelectInput
            onChange={this.onChangeSelect1}
            label={translate("carManufacturer")}
            options={[
              "",
              "Audi",
              "BMW",
              "Mercedes",
              "Ford",
              "Mazda",
              "Porsche",
              "Volkswagen",
              "Honda",
              "Mitsubishi",
              "Subaru",
            ]}
            values={[
              "",
              "Audi",
              "BMW",
              "Mercedes",
              "Ford",
              "Mazda",
              "Porsche",
              "Volkswagen",
              "Honda",
              "Mitsubishi",
              "Subaru",
            ]}
          />

          <SelectInput
            onChange={this.onChangeSelect2}
            label={translate("carType")}
            options={[
              "",
              "Sedan",
              "Coupe",
              "SUV",
              "4x4",
              "Hatchback",
              "Pickup",
            ]}
          />

          <SelectInput
            onChange={this.onChangeSelect3}
            label={translate("carUsage")}
            options={["", "Used car", "New car"]}
            values={["", "Used car", "New car"]}
          />

          <div className="range__container">
            <div className="range__title"> {translate("priceRange")} ($):</div>
            <Nouislider
              className="range"
              start={this.state.value}
              range={this.state.range}
              tooltips={true}
              connect
              pips={this.state.pips}
              step={this.state.step}
              onSlide={this.onChangeRange}
            />
          </div>

          <div className="wow pulse">
            <SearchButton content={translate("searchBtn")} />
          </div>
        </div>
      </form>
    );
  }

  onChangeSelect1 = (value: string) => {
    this.setState({
      manufacturer: value,
    });
  };
  onChangeSelect2 = (value: string) => {
    this.setState({
      type: value,
    });
  };
  onChangeSelect3 = (value: string) => {
    this.setState({
      used: value,
    });
  };
  onChangeRange = (value: string[]) => {
    this.setState({
      minPrice: value[0],
      maxPrice: value[1],
    });
  };
}

export default FilterForm;
