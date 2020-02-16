import React from 'react';
import { Link } from 'react-router-dom';

import "./Statistics.scss";

function Statistics(props: any) {
  return (
        <div className="statistics">
            <div className="statistics__card">
                <span> {props.newCars} </span><br/>
                NEW CARS IN STOCK
            </div>
            <div className="statistics__card">
                <span> {props.usedCars} </span><br/>
                USED CARS IN STOCK
            </div>
            <div className="statistics__card">
                <span> 0 </span><br/>
                HAPPY CLIENTS
            </div>
        </div>
        );
}

export default Statistics;