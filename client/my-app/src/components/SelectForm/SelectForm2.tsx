import React from 'react';
import { Link } from 'react-router-dom';

import './SelectForm.scss';


function SelectForm2() {
  return (
    <div className="select"> 
      <div className="select__container">
        <input type="select"/><br/>
        <span className="filter__label">MISSING BRAND?</span>
    </div>

    </div>
  );
}


export default SelectForm2;