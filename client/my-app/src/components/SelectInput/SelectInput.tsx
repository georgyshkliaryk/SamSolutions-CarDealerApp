import React from "react";
import { Link } from "react-router-dom";

import "./SelectInput.scss";
import { render } from "@testing-library/react";

interface ISelect {
  label: string;
  options: string[];
}

class SelectInput extends React.Component<
  any,
  {
    value: string;
  }
> {
  constructor(props: ISelect) {
    super(props);
    this.state = { value: this.props.options[0] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
    alert("You chose car: " + event.target.value);
    // criteria.carModel = event.target.value;
    event.preventDefault();
  }

  handleSubmit(event: any) {
    event.preventDefault();
  }

  Options(options: string[]) {
    let i = 0;
    function Option(props: any) {
      return <option value={options[i]}>{options[i]}</option>;
    }

    for (i = 0; i < options.length; i++) {
      return <Option />;
    }
  }

  render() {
    return (
      <form className="select" onSubmit={this.handleSubmit}>
        <div className="select__container">
          <select value={this.state.value} onChange={this.handleChange}>
            {this.props.options.map((option: any) => (
              <option value={option}> {option} </option>
            ))}
          </select>
          <br />
          <span className="filter__label">{this.props.label}</span>
        </div>
      </form>
    );
  }
}

export default SelectInput;
