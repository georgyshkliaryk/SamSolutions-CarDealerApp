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
import NewCarPage from "./NewCarPage";
import { getStatus } from "../components/Welcome/Welcome";
import CreateAdBtn from "../components/buttons/CreateAdBtn/CreateAdBtn";
import FilterForm from '../components/FilterForm/FilterForm'; 

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
        <Link to="ads/create">
          <CreateAdBtn content="Create new ad &rsaquo;" />
        </Link>

        <FilterForm
          onSubmit={qparams =>
            this.fetchAds({
              carModel: qparams.manufacturer || "",
              carName: qparams.search || "",
              carType: qparams.type || "",
              min_price: qparams.minPrice?.toString() || "",
              max_price: qparams.maxPrice?.toString() || ""
            })
          }
        />

        {this.state.isLoaded ? (
          <Ads
            title="Available cars"
            // ads={getStatus(this.state.ads, false)}
            ads={this.state.ads}
            usage="new"
          />
        ) : (
          <Loading loading_title="Available cars" />
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
