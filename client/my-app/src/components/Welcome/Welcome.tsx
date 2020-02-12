import React from 'react';
import { Link } from 'react-router-dom';


import SearchButton from '../buttons/SearchButton/SearchButton';
import "./Welcome.scss";
import Statistics from '../Statistics/Statistic';


function Welcome() {
  return (
        <div className="welcome">
         <div className="welcome__title">Welcome to CarDealer!</div>
         <div className="welcome__components">

         <Statistics />
            
            <SearchButton content="Learn More &rsaquo;"/>
         </div>
        </div>
        );
}

export default Welcome;