import React from "react";
import { Link } from "react-router-dom";

import "./FilterForm.scss";
import SearchInput from "../SearchInput/SearchInput";
import SelectInput from "../SelectInput/SelectInput";
import RangeInput from "../RangeInput/RangeInput";
import SearchButton from "../buttons/SearchButton/SearchButton";

interface IFilterParams {
  search: string;
  manufacturer: string;
  brand: string;
  minPrice: number;
  maxPrice: number;
}

function FilterForm() {
  return (
    <form
      className="filter"
      onSubmit={event => {
        event.preventDefault(); // Prevents page reloading
        /* TODO */
      }}
    >
      <div className="filter__title">
        Unsure which vehicle you are looking for? Find it here!
      </div>
      <div className="filter__components">
        <SearchInput placeholder="Search" label="KEYWORD SEARCH?"/>
        <SelectInput label="SELECT MANUFACTURER" options={["Audi", "BMW", "Mercedes"]}/>
        <SelectInput label="SELECT CAR TYPE" options={["Sedan", "SUV", "4x4", "Hatchback", "Pickup"]} />
        <RangeInput min={500} max={30000} label="Price range ($):"/>
        <SearchButton content="Search" />
      </div>
    </form>
  );
}

export default FilterForm;
