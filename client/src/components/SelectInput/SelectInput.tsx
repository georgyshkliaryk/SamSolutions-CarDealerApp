import React from "react";

import "./SelectInput.scss";

interface ISelect {
  label: string;
  options: string[];
  onChange(value: string): void;
}
class SelectInput extends React.Component<any, {}> {
  constructor(props: ISelect) {
    super(props);
    this.state = { value: this.props.options[0] };
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
      <div className="select__container">
        <select onChange={(event) => this.props.onChange(event.target.value)}>
          {this.props.options.map((option: string, i: number = 0) => (
            <option value={option} key={i++}>
              {" "}
              {option}{" "}
            </option>
          ))}
        </select>
        <br />
        <span className="filter__label">{this.props.label}</span>
      </div>
    );
  }
}

export default SelectInput;
