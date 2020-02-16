import React from 'react';

import "./Loading.scss";
import loading from '/public/assets/imgs/wheel2.png';

function Loading() {
  return (
        <div className="loading">
           <img className="loading__img" src={loading} alt="loading..."/>
           <div>Loading data...</div>
        </div>
        );
}

export default Loading;