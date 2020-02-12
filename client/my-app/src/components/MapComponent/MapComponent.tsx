import React from 'react';
import { Link } from 'react-router-dom';



import "./MapComponent.scss";


function MapComponent() {
  return (
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16796.972066358718!2d-78.64209176068172!3d35.74935903530347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scar%20dealer%20usa!5e0!3m2!1sru!2sby!4v1581464038910!5m2!1sru!2sby"
             width="100%" height="450"></iframe>
        </div>
        );
}

export default MapComponent;