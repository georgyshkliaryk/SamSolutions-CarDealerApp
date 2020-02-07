import React, { Component } from 'react';
import './App.scss';

import { 
  BrowserRouter as Router,
  Route, 
  Switch, 
  Link, 
  Redirect,
  useRouteMatch,
  useParams 
} from 'react-router-dom';

//Pages
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AdsPage from './pages/AdsPage';
import AboutPage from './pages/AboutPage';
import NewCarsPage from './pages/NewCarsPage';
import OldCarsPage from './pages/OldCarsPage';



class App extends Component {
  render() {
    return <Router>
      <Switch>

        <Route exact path="/login">
          < LoginPage />
        </Route>

        <Route exact path="/">
          < HomePage /> 
        </Route>

        <Route exact path="/ads">
          < AdsPage /> 
        </Route> 

          <Route path="/ads/newcars">
           < NewCarsPage /> 
          </Route>
          <Route path="/ads/oldcars">
           < OldCarsPage />  
          </Route>

        <Route exact path="/about">
          < AboutPage />
        </Route>

        
        <Route exact path="/404">
          < NotFoundPage /> 
        </Route>
        <Redirect to="/404" />

      </Switch>
    </Router>
  }
}

export default App;
