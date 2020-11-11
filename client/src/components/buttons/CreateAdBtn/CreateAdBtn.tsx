import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

import "./CreateAdBtn.scss";
import "../SearchButton/SearchButton";

import translate from "../../../i18n/translate";

const CreateAdBtn = () => {

  const { isAuthenticated } = useAuth0();

  let display = {
    display: "none"
  }
  if (!isAuthenticated) {
    display = {
      display: "none"
    }
  } else {
    display = {
      display: "block"
    }
  }

    return (
      <div className="button-create__container absolute" data-testid="createAdBtn" style={display}>
        <button
          className="button button-create"
        >
          {translate("createBtn", { arrow: <span>&rsaquo;</span> })}
        </button>
      </div> 
    );

}

export default CreateAdBtn;
