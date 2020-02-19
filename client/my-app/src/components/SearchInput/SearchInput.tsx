import React from 'react';
import { Link } from 'react-router-dom';

import './SearchInput.scss';

interface ISearch {
  placeholder: string;
  label: string;
}


function SearchForm(props: ISearch) {
  return (
    <div className="search"> 
    
      <input className="search__input" type="text" placeholder={props.placeholder}/><br/>
      <span className="filter__label">{props.label}}</span>

    </div>
  );
}

export default SearchForm;