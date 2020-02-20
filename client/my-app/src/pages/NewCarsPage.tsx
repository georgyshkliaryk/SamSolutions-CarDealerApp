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
import Loading from "../components/Loading/Loading";
import Ads from "../components/CarAds/Ads";

import { IAd } from "../models/IAd";
import { IProps } from "../models/IProps";

import RestService from "../services/RestService";
import AdService from "../services/AdsService";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewCarPage from '../pages/NewCarPage';
import { getStatus } from "../components/Welcome/Welcome";

interface IState {
  ads: IAd[];
}

class NewCarsPage extends React.Component {
  adService: AdService;
  state = {
    ads: [],
    isLoaded: false
  };

  constructor(props: IProps) {
    super(props);
    const restService = new RestService();
    this.adService = new AdService(restService);
  }
  componentDidMount() {
    this.fetchAds();
  }

  fetchAds(queryParams = {}) {
    this.adService
      .getAllAds(queryParams)
      .then(data => {
        this.setState({ ads: data, isLoaded: true });
      })
      .catch(data => {
        alert(data);
      });
  }

  //let { path, url } = useRouteMatch();
  render() {
    //let { path, url } = useRouteMatch();
    return (
      <>
        <Header />
        {/*    <ul>
          <li>
            <Link to={`$/audi-a4`}>Audi A4</Link>
          </li>
          <li>
            <Link to={`$/mercedes-s-class`}>Mercedes S-class</Link>
          </li>
          <li>
            <Link to={`$/bmw-m3`}>BMW m3</Link>
          </li>
        </ul>    */}

        {this.state.isLoaded ? (
          <Ads
            title="Available new cars"
            ads={getStatus(this.state.ads, false)}
            usage="new"
          />
        ) : (
          <Loading loading_title="Available new cars" />
        )}

        {/*<Route path={`$/:AdId`}>
          <AdPage />
        </Route>*/}

        <Footer />


        
     
      </>
    );
  }
}

export default NewCarsPage;
