import React from 'react';
import { Link } from 'react-router-dom';

import './SearchButton.scss';


function SearchButton(props: any) {
  return (
    <div className="button-search__container"> 
      <button className="button-search">{props.content}</button>
    </div>
  );
}

export default SearchButton;