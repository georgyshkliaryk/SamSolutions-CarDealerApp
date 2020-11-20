import React from "react";

import "../SearchButton/SearchButton";
import "./EditButton";

class EditButton extends React.Component<any, {}> {
  render() {
    return (
      <div className="button-search__container">
        <button className="button" onClick={this.props.handleClick}>
          {this.props.content}
        </button>
      </div>
    );
  }
}

export default EditButton;
