import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import AdPage from "./AdPage";

const NewCarsPage = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/audi-a4`}>Audi A4</Link>
        </li>
        <li>
          <Link to={`${url}/mercedes-s-class`}>Mercedes S-class</Link>
        </li>
        <li>
          <Link to={`${url}/bmw-m3`}>BMW m3</Link>
        </li>
      </ul>

      <Route path={`${path}/:AdId`}>
        <AdPage />
      </Route>
    </div>
  );
};

export default NewCarsPage;
