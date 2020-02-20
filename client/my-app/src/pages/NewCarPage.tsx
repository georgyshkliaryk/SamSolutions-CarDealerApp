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
import Ads from "../components/CarAds/Ads";

class NewCarPage extends React.Component {
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
    this.fetchAds({
      _id: "5e3ac598c151fb2e34bdee56"
    });
  }

  fetchAds(queryParams: any) {
    this.adService
      .getAddById(queryParams._id)
      .then(data => {
        this.setState({ ads: data, isLoaded: true });
        alert(data);
      })
      .catch(data => {
        alert(data);
      });
  }

  render() {
    return (
      <>
        <Header />
        <div></div>
        <Footer />
      </>
    );
  }
}

export default NewCarPage;
