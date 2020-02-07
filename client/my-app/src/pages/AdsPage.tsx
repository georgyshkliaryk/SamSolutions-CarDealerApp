import React from 'react';
import { Link } from 'react-router-dom';


const AdsPage = () => {
  return (
    <div> 
      <h3>Here will be ads for sale cars:</h3>
      <small>...</small>
      <div>
        <Link to="/ads/newcars">New Cars</Link><br/>
        <Link to="/ads/oldcars">Old Cars</Link>
      </div>
    </div>
  );
}

export default AdsPage;