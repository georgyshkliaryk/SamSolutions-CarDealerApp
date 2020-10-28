import React from "react";

import "./SearchButton.scss";
class SearchButton extends React.Component<any, {}> {
  render() {
    return (
      <div className="button-search__container">
        <button
          className="button-search button"
          onClick={this.props.handleClick}
        >
          {this.props.content}
        </button>
      </div>
    );
  }
}

export default SearchButton;
