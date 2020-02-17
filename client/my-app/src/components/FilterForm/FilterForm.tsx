import React from "react";
import { Link } from "react-router-dom";

import "./FilterForm.scss";
import SearchForm from "../SearchForm/SearchForm";
import SelectForm1 from "../SelectForm/SelectForm1";
import SelectForm2 from "../SelectForm/SelectForm2";
import RangeForm from "../RangeForm/RangeForm";
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
        <SearchForm />
        <SelectForm1 />
        <SelectForm2 />
        <RangeForm />
        <SearchButton content="Search" />
      </div>
    </form>
  );
}

export default FilterForm;
