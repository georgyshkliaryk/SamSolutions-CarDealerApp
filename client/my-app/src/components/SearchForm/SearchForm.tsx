import React from 'react';
import { Link } from 'react-router-dom';

import './SearchForm.scss';


function SearchForm() {
  return (
    <div className="search"> 
    
      <input className="search__input" type="text" placeholder="Search"/><br/>
      <span className="filter__label">KEYWORD SEARCH?</span>

    </div>
  );
}

export default SearchForm;