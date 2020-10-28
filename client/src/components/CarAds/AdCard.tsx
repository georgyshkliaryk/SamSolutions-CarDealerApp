import React from "react";
import { Link } from "react-router-dom";

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./AdCard.scss";

import translate from "../../i18n/translate";

const AdCard = (props: any) => {
  return (
    <div className="ad" data-wow-delay={`0.5s`}>
      <img src={props.img} alt="" />
      <div className="ad__title"> {props.title} </div>
      <div className="ad__price">{props.price} $</div>
      <div className="ad__usage">{props.usage}</div>
      <div className="ad__description"> {props.description} </div>
      <div className="ad__carTypeImg">
        <img src={props.typeImg} alt="type" title={props.type} />
        <div className="ad__year">{props.year}</div>
      </div>

      <div className="ad__button">
        <Link to={props.path}>
          <SearchButton
            className="button__card"
            content={translate("moreInfoBtn", { arrow: <span>&rsaquo;</span> })}
          />
        </Link>
      </div>
    </div>
  );
};

export default AdCard;
