import React from "react";

import "./MoreButton.scss";
class MoreButton extends React.Component<any, {}> {
  render() {
    return (
      <div className="button-search__container">
        <button
          className="button-search button btn-more"
          onClick={this.props.handleClick}
        >
          {this.props.content}
        </button>
      </div>
    );
  }
}

export default MoreButton;
