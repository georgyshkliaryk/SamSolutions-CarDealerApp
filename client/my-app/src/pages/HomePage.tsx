import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Slider, { IProps } from "../components/Slider/Slider";
import FilterForm from "../components/FilterForm/FilterForm";
import Welcome from "../components/Welcome/Welcome";
import MapComponent from "../components/MapComponent/MapComponent";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Ads from "../components/CarAds/Ads";
import Loading from "../components/Loading/Loading";

import { IAd } from "../models/IAd";

import RestService from "../services/RestService";
import AdService from "../services/AdsService";

import queryString from "query-string";

interface IState {
  ads: IAd[];
}
class HomePage extends React.Component {
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

  render() {
    return (
      <>
        <Header />

        {this.state.isLoaded ? (
          <Slider ads={this.state.ads} />
        ) : (
          <Loading loading_title="Popular cars" />
        )}

        <FilterForm />

        {this.state.isLoaded ? (
          <Ads ads={this.state.ads} title="Available cars" />
        ) : (
          <Loading loading_title="Available cars" />
        )}

        <Welcome ads={this.state.ads} />

        <Contacts />

        <MapComponent />

        <Footer />
      </>
    );
  }
}

export default HomePage;
