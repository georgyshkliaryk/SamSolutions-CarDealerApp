import React from 'react';
import { Link } from 'react-router-dom';


import SearchButton from '../buttons/SearchButton/SearchButton';
import "./Welcome.scss";


function Welcome() {
  return (
        <div className="welcome">
         <div className="welcome__title">Welcome to <strong>CarDealer</strong>!</div>
         <div className="welcome__components">
            
            <SearchButton content="Learn More &rsaquo;"/>
         </div>
        </div>
        );
}

export default Welcome;