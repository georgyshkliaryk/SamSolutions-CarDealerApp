import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div> 

      <h3>Main Page of the App</h3>
      <small>Main Page</small>

      <ul>
        <li>
          <Link to="/ads">Ads</Link> 
        </li>
        <li>
          <Link to="/about">About</Link> 
        </li>
        <li>
          <Link to="/myads">MyAds</Link> 
        </li>
      </ul>

    </div>
  );
}

export default HomePage;