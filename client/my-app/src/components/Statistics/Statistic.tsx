import React from 'react';
import { Link } from 'react-router-dom';

import "./Statistics.scss";

function Statistics() {
  return (
        <div className="statistics">
            <div className="statistics__card">
                <span>250</span><br/>
                NEW CARS IN STOCK
            </div>
            <div className="statistics__card">
                <span>348</span><br/>
                USED CARS IN STOCK
            </div>
            <div className="statistics__card">
                <span>1250</span><br/>
                HAPPY CLIENTS
            </div>
        </div>
        );
}

export default Statistics;