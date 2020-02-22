import React from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

import './SearchButton.scss';




class SearchButton extends React.Component<any,{}> {
  constructor(props: any) {
    super(props); 
  }

  componentDidMount() {
    new WOW.WOW().init();
  }
  
  render() {
    return (
      <div className="button-search__container"> 
        <button className="button-search" onClick={ this.props.handleClick }>{this.props.content}</button>
      </div>
    );
  }
}

export default SearchButton;