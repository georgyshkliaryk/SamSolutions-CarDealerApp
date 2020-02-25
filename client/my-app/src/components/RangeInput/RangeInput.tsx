import React from 'react';


import './RangeInput.scss';
//import Range from './Range';

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
 
export default class RangeForm extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  state = {
    value: [this.props.min, this.props.max],
    range: { min: this.props.min, max: this.props.max },
    pips: {
      mode: 'values',
      values: [(this.props.min+this.props.max)/2],
      density: 10
    },
    step: 100, 
    
  };

  render() {
    const { value, range, pips, step } = this.state;
    
    return (
      <div className="range__container">
         <div className="range__title"> {this.props.label} </div>
        <Nouislider className="range" start={value} range={range} tooltips={true} connect pips={pips} step={step} onSlide={(data)=> console.log("data= " + data)}/>
      </div>
    );
  }
} 