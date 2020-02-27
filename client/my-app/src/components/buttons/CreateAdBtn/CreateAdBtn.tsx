import React from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

import "./CreateAdBtn.scss";
import "../SearchButton/SearchButton";

class CreateAdBtn extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="button-create__container absolute">
        <button className="button button-create" onClick={this.props.handleClick}>
          {this.props.content}
        </button>
      </div>
    );
  }
}

export default CreateAdBtn;