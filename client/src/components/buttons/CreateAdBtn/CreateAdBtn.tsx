import React from "react";

import "./CreateAdBtn.scss";
import "../SearchButton/SearchButton";

class CreateAdBtn extends React.Component<any, {}> {
  render() {
    return (
      <div className="button-create__container absolute" data-testid="createAdBtn">
        <button
          className="button button-create"
          onClick={this.props.handleClick}
        >
          {this.props.content}
        </button>
      </div>
    );
  }
}

export default CreateAdBtn;
