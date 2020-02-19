import React from 'react';
import { Link } from 'react-router-dom';

import './SearchButton.scss';




class SearchButton extends React.Component<any,{}> {
  constructor(props: any) {
    super(props); 
  }

  handleClick1 = (e: any) => {
    alert('why');
  }
  handleClick2 = (e: any) => {
    alert('cuz');
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