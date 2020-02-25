import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RestService from "../services/RestService";
import AdService from "../services/AdsService";
import Loading from '../components/Loading/Loading';
import CarAd from '../components/CarAd/CarAd';

import { IAd } from "../models/IAd";
import { IProps } from "../models/IProps";
import Ads from "../components/CarAds/Ads";

interface IId {
  _id: string;
}
interface IState {
  ad: IAd;
  isLoaded: boolean;
}
class NewCarPage extends React.Component {
  adService: AdService;
  state: IState = {
    ad : {},
    isLoaded: false
  };

  constructor(props: IProps) {
    super(props);
    const restService = new RestService();
    this.adService = new AdService(restService);
  }

  componentDidMount() {
    this.fetchAds({
      _id: "5e3ac598c151fb2e34bdee56"
    });

  }

  fetchAds(queryParams: IId) {
    this.adService
      .getAddById(queryParams._id)
      .then(data => {
        this.setState({ ad: data, isLoaded: true });
        console.log(this.state.ad);
      })
      .catch(data => { 
        alert(data);
      });
  }

  render() {
    return (
      <>
        <Header />
        {this.state.isLoaded ? (
          <CarAd title={this.state.ad.carName} image={this.state.ad.carImage} description={this.state.ad.carDescription}/>
        ) : (
          <Loading loading_title="Loading ad..." />
        )}
        <Footer />
      </>
    );
  }
}

export default NewCarPage;
