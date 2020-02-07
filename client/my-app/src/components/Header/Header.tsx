import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';


function Header() {
  return (
    <div> 

      <div className="header">
        <div className="header__links">

          <div>
            <Link to="/ads" className="link">Cars</Link> 
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/myads">My cars</Link> 
          </div>

        </div>
       
        <div className="header__title"><span>Car</span>Dealer</div>

        <div className="header__links"> 
         <Link to="/login">Login/Register</Link>
        </div> 
      </div>

    </div>
  );
}

export default Header;