import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import AdPage from './AdPage';


const OldCarsPage = () => {
  let { path, url } = useRouteMatch();
  return (
      <div>
        <ul>
          <li>          
            <Link to={`${url}/ford-focus`}>Ford Focus</Link>
          </li>
          <li>
            <Link to={`${url}/mercedes-w220`}>Mercedes w220</Link>
          </li>
          <li>
            <Link to={`${url}/skoda-fabia`}>Scoda Fabia</Link>
          </li>
        </ul>
  
        <Route path={`${path}/:AdId`}>
            <AdPage />
        </Route>
        
      </div>
    );
  }

  export default OldCarsPage;