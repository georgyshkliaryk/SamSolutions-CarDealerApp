import React from 'react';

import "./Loading.scss";
import loading from '../../public/assets/imgs/wheel2.png';

function Loading(props: any) {
  return (
        <div className="loading">
           <div className="ads__title">{props.loading_title}</div>
           <img className="loading__img" src={loading} alt="loading..."/>
           <div>Loading data...</div>
        </div>
        );
}

export default Loading;