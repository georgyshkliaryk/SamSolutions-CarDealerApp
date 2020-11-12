import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useRouteMatch,
  useParams,
} from "react-router-dom";



//Pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import CarsPage from "./pages/CarsPage";
import NewCarPage from "./pages/NewCarPage";
import LogoutPage from "./pages/LogoutPage";
import CreateAdPage from "./pages/CreateAdPage";
import AccountPage from './pages/AccountPage';

import { I18nProvider, LOCALES } from "./i18n";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  state = {
    locales: [LOCALES.ENGLISH, LOCALES.GERMAN],
    name: 0
  };

  onUpdate = (value) => {};

  updateData = (value) => {
    if (this.state.name != value) {
    this.setState({ name: value })
    }
  };

  render() {
    return (
      <I18nProvider locale={this.state.locales[this.state.name]}>
        <Router>
            <Switch>

          <Route exact path="/profile">
            <AccountPage />
          </Route>

          <Route exact path="/">
            <HomePage updateData={this.updateData} />
          </Route>

            <Route exact path="/ads">
              <CarsPage />
            </Route>
            <Route
              path="/ads/view/:id"
              component={(props) => (
                <NewCarPage {...props} inputDisabled={true} pageMode="view" />
              )}
            />
            <Route path="/ads/create">
              <CreateAdPage />
            </Route>
            <Route
              path="/ads/edit/:id"
              component={(props) => (
                <NewCarPage {...props} inputDisabled={false} pageMode="edit" />
              )}
            />

          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/404">
            <NotFoundPage />
          </Route>
          <Redirect to="/404" />
          </Switch>
        </Router>
      </I18nProvider>
    );
  }
}

export default App;
