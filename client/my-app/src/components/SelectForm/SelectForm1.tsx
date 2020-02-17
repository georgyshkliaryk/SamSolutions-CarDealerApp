import React from 'react';
import { Link } from 'react-router-dom';

import './SelectForm.scss';


function SelectForm1() {
  return (
    <div className="select"> 
      <div className="select__container">
        <select>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
        </select><br/>
        <span className="filter__label">SELECT MANUFACTURER</span>
      </div>
    </div>
  );
}


export default SelectForm1;
