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
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import CarsPage from "./pages/CarsPage";
import NewCarPage from "./pages/NewCarPage";
import CreateAdPage from "./pages/CreateAdPage";
import AccountPage from "./pages/AccountPage";
import EditAdPage from "./pages/EditAdPage";

import { I18nProvider, LOCALES } from "./i18n";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.handleClickDe = this.handleClickDe.bind(this);
    this.handleClickEng = this.handleClickEng.bind(this);
  }

  state = {
    locales: [LOCALES.ENGLISH, LOCALES.GERMAN],
    name: 0,
  };

  componentDidMount() {
    this.setState({
      name: sessionStorage.getItem("lang")
    })
  }

  async handleClickEng() {
    await this.setState({
      name: 0,
    });
    sessionStorage.setItem("lang", "0");
  }

  async handleClickDe() {
    await this.setState({
      name: 1,
    });
    sessionStorage.setItem("lang", "1");
  }

  onUpdate = (value) => {};

  //{this.state.locales[this.state.name]}
  render() {
    return (
      <I18nProvider locale={this.state.locales[this.state.name]}>
        <Router>
          <Switch>
            <Route exact path="/profile">
              <AccountPage handleClickEng={this.handleClickEng} handleClickDe={this.handleClickDe}/>
            </Route>

            <Route exact path="/">
              <HomePage handleClickEng={this.handleClickEng} handleClickDe={this.handleClickDe}/>
            </Route>

            <Route exact path="/ads">
              <CarsPage handleClickEng={this.handleClickEng} handleClickDe={this.handleClickDe}/>
            </Route>
            <Route
              path="/ads/view/:id"
              component={(props) => (
                <NewCarPage {...props} inputDisabled={true} pageMode="view" handleClickEng={this.handleClickEng} handleClickDe={this.handleClickDe}/>
              )}
            />
            <Route path="/ads/create">
              <CreateAdPage handleClickEng={this.handleClickEng} handleClickDe={this.handleClickDe}/>
            </Route>
            <Route
              path="/ads/edit/:id"
              component={(props) => <EditAdPage {...props} handleClickEng={this.handleClickEng} handleClickDe={this.handleClickDe}/>}
            />

            <Route exact path="/about">
              <AboutPage handleClickEng={this.handleClickEng} handleClickDe={this.handleClickDe}/>
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
