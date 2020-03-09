import React from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./CarAd.scss";

import SaveCancel from '../SaveCancel/SaveCancel';
import EditButton from "../buttons/EditButton/EditButton";

const CarAd = (props: any) => {
  return (
    <form className="car__container">
      <div className="car__image">
        <img src={props.image} alt="car image" />
      </div>

      <div className="car__info">
        <div className="car__title">
          {" "}
          <input
            className="car__title-input"
            type="text"
            value={props.title}
            disabled={props.inputs}
            placeholder="car brand and model"
          />{" "}
        </div>
        <div className="car__description">
          <textarea
            className="car__description-input"
            value={props.description}
            disabled={props.inputs}
            placeholder="short description"
          />
        </div>

        {
          props.mode == "edit" ? <SaveCancel save="Save changes" cancel="Cancel"/> : props.mode == "view" ? <EditButton content="Edit" linkTo={props.id}/> : <SaveCancel save="Apply" cancel="Cancel"/>  
        }
      
        
        
      </div>
    </form>
  );
};

export default CarAd;
