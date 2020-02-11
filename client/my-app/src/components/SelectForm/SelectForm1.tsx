import React from 'react';
import { Link } from 'react-router-dom';

import './SelectForm.scss';


function SelectForm1() {
  return (
    <div className="select"> 
      <div className="select__container">
        <input type="select"/><br/>
        <span className="filter__label">MISSING MANUFACRURER?</span>
      </div>
    </div>
  );
}


export default SelectForm1;
