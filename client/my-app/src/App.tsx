import React, { Component } from 'react';
import './App.scss';

import { 
  BrowserRouter as Router,
  Route, 
  Switch, 
  Link, 
  Redirect 
} from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AdsPage from './pages/AdsPage';
import AboutPage from './pages/AboutPage';


class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route exact path="/ads" component={AdsPage} /> 
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/404" component={NotFoundPage} /> 
        <Redirect to="/404" />
      </Switch>
    </Router>
  }
}

export default App;
