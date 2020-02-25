import React, { Component } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import "./FilterForm.scss";
import SearchInput from "../SearchInput/SearchInput";
import SelectInput from "../SelectInput/SelectInput";
import RangeInput from "../RangeInput/RangeInput";
import SearchButton from "../buttons/SearchButton/SearchButton";
import { IAd } from "../../models/IAd";

interface IState {
  search?: string;
  manufacturer?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
}

interface IProps {
  onSubmit(params: IState): void;
}
class FilterForm extends Component<IProps, any> {
  state: IState = {
    search: "",
    manufacturer: "Audi",
    type: "Sedan",
    minPrice: 500,
    maxPrice: 30000
  };

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <form
        className="filter"
        onSubmit={event => {
          event.preventDefault(); // Prevents page reloading
          /* TODO */

          let query =
            //   this.state.search +
            " " +
            this.state.manufacturer +
            " " +
            this.state.type +
            " " +
              this.state.minPrice +
            " " +
            this.state.maxPrice;
          alert(query);

          this.props.onSubmit(this.state);
          // console.log(this.state);
        }}
      >
        <div className="filter__title">
          Unsure which vehicle you are looking for? Find it here!
        </div>
        <div className="filter__components">
          <SearchInput
            onChange={this.onChangeSearch}
            placeholder="Search"
            label="KEYWORD SEARCH?"
          />

          <SelectInput
            onChange={this.onChangeSelect1}
            label="SELECT MANUFACTURER"
            options={["Audi", "BMW", "Mercedes"]}
          />

          <SelectInput
            onChange={this.onChangeSelect2}
            label="SELECT CAR TYPE"
            options={["Sedan", "Coupe", "SUV", "4x4", "Hatchback", "Pickup"]}
          />

          <RangeInput
            onChange={() => this.onChangeRange}
            min={500}
            max={30000}
            label="Price range ($):"
          />

          <div className="wow pulse">
            <SearchButton content="Search" />
          </div>
        </div>
      </form>
    );
  }
  onChangeSearch = (value: string) => {
    this.setState({
      search: value
    });
  };
  onChangeSelect1 = (value: string) => {
    this.setState({
      manufacturer: value
    });
  };
  onChangeSelect2 = (value: string) => {
    this.setState({
      type: value
    });
  };
  onChangeRange = (value: string[]) => {
    this.setState({
      minPrice: value[0],
      maxPrice: value[1]
    });
  };
}

export default FilterForm;
