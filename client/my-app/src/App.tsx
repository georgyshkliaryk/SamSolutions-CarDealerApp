import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useRouteMatch,
  useParams
} from "react-router-dom";

//Pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AdsPage from "./pages/AdsPage";
import AboutPage from "./pages/AboutPage";
import NewCarsPage from "./pages/NewCarsPage";
import UsedCarsPage from "./pages/UsedCarsPage";
import NewCarPage from "./pages/NewCarPage";
import UsedCarPage from "./pages/UsedCarPage";

class App extends React.Component {
  render() {
    return (
      <Router>
     
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Switch>
          <Route exact path="/ads/newcars">
            <NewCarsPage />
          </Route>
          <Route path="/ads/newcars/:id">
            <NewCarPage />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/ads/usedcars">
            <UsedCarsPage />
          </Route>
          <Route path="/ads/usedcars/:id">
            <UsedCarPage />
          </Route>
        </Switch>

        <Route exact path="/about">
          <AboutPage />
        </Route>

        {/* <Route exact path="/404">
          <NotFoundPage />
        </Route>
        <Redirect to="/404" /> */}
      
      </Router>
    );
  }
}

export default App;
