import React from 'react';
import { Link } from 'react-router-dom';

import SearchButton from '../buttons/SearchButton/SearchButton';
import "./AdCard.scss";


function AdCard(props: any) {
  return (
        <div className="ad">
            <img src={props.img} alt="car"/>
            <div className="ad__title"> {props.title} </div>
            <div className="ad__description"> {props.description}</div>
            <div className="ad__button">
                <SearchButton className="button__card" content="More info &rsaquo;"/>
            </div>
        </div>
        );
}

export default AdCard;