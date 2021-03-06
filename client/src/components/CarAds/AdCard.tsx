import React from "react";
import { Link } from "react-router-dom";

import SearchButton from "../buttons/SearchButton/SearchButton";
import { useAuth0 } from "@auth0/auth0-react";


import translate from "../../i18n/translate";

import "./AdCard.scss";

const AdCard = (props: any) => {
  const { user, isAuthenticated } = useAuth0();

  const onError = (e: any) => {
    {
      e.target.onerror = null;
      e.target.title = "Image not found";
      e.target.src =
        "https://images.wallpaperscraft.com/image/lights_car_dark_128635_1920x1080.jpg";
    }
  }

  let backgroundColor = {
    backgroundColor: "red",
  };
  if (isAuthenticated && user.nickname == props.createdBy) {
    backgroundColor = {
      backgroundColor: "green",
    };
  } else {
    backgroundColor = {
      backgroundColor: "red",
    };
  }

  return (
    <div className="ad" data-wow-delay={`0.5s`}>
      <img src={props.img} alt="" onError={onError}/>
      <div className="ad__title"> {props.title} </div>
      <div className="ad__price">{props.price} $</div>
      <div className="ad__usage">{props.usage}</div> 
      <div className="ad__description"> {props.description} </div>
      <div className="ad__createdBy" style={backgroundColor}>
        {props.createdBy}
      </div>
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
