import React from "react";
import "./RangeInput.scss";

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

export default class RangeForm extends React.Component<any> {
  state = {
    value: [this.props.min, this.props.max],
    range: { min: this.props.min, max: this.props.max },
    pips: {
      mode: "values",
      values: [(this.props.min + this.props.max) / 2],
      density: 10
    },
    step: 100
  };

  render() {
    return (
      <div className="range__container">
        <div className="range__title"> {this.props.label} </div>
        <Nouislider
          className="range"
          start={this.state.value}
          range={this.state.range}
          tooltips={true}
          connect
          pips={this.state.pips}
          step={this.state.step}
          onSlide={data => {
            this.setState({
              value: data
            });
          }}
        />
      </div>
    );
  }
}
