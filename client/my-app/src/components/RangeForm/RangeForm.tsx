import React from 'react';


import './RangeForm.scss';
//import Range from './Range';

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
 
export default class RangeForm extends React.Component {
  state = {
    value: [500, 100000],
    range: { min: 500, max: 30000 },
    pips: {
      mode: 'values',
      values: [15000],
      density: 10
    },
    step: 100, 
    
  };

  render() {
    const { value, range, pips, step } = this.state;

    return (
      <div className="range__container">
         <div className="range__title"> Price range ($): </div>
        <Nouislider className="range" start={value} range={range} tooltips={true} connect pips={pips} step={step}/>
      </div>
    );
  }
}