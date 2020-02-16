import React from "react";
import { Link } from "react-router-dom";
import Img from 'react-image'

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./AdCard.scss";
import Loading from "../Loading/Loading";

const AdCard = (props: any) => {
  return (
    <div className="ad">
      
    {/* <Img src={props.img} unloader={ <Loading/> }/> */}
      <img src={props.img} alt=""/>
      <div className="ad__title"> {props.title} </div>
      <div className="ad__description"> {props.description} </div>
      <div className="ad__button">
        <SearchButton className="button__card" content="More info &rsaquo;" />
      </div>
    </div>
  );
}


export default AdCard;
