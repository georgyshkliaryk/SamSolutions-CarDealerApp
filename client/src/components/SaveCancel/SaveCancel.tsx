import React from "react";
import { Link } from "react-router-dom";

import "../buttons/SearchButton/SearchButton";
import "./SaveCancel.scss";

class SaveCancel extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="button-search__container btn">
        <button className="button-search button save" onClick={this.props.handleClick}> 
          {this.props.save}
        </button>
        <button className="button-search button cancel" onClick={this.props.handleClick}>  
          {this.props.cancel}
        </button>
      </div>
    );
  }
}

export default SaveCancel;