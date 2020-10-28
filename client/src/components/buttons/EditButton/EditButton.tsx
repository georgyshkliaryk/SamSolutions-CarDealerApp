import React from "react";
import { Link } from "react-router-dom";

import "../SearchButton/SearchButton";
import "./EditButton";

class EditButton extends React.Component<any, {}> {
  render() {
    return (
      <div className="button-search__container">
        <Link to={`/ads/edit/${this.props.linkTo}`}>
          <button className="button" onClick={this.props.handleClick}>
            {this.props.content}
          </button>
        </Link>
      </div>
    );
  }
}

export default EditButton;
