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

import { IAd } from "../models/IAd";
import { IProps } from "../models/IProps";

class UsedCarPage extends React.Component {
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
          used car
        <Footer />
      </>
    );
  }
}

export default UsedCarPage;