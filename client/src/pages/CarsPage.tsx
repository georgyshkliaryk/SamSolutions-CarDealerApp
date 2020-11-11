import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import Loading from "../components/Loading/Loading";
import Ads from "../components/CarAds/Ads";

import { IAd } from "../models/IAd";
import { IProps } from "../models/IProps";

import RestService from "../services/RestService";
import AdService from "../services/AdsService";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CreateAdBtn from "../components/buttons/CreateAdBtn/CreateAdBtn";
import FilterForm from "../components/FilterForm/FilterForm";

import translate from "../i18n/translate";

interface IState {
  ads: IAd[];
}

class NewCarsPage extends React.Component {
  adService: AdService;
  state = {
    ads: [],
    isLoaded: false,
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
      .then((data) => {
        this.setState({ ads: data, isLoaded: true });
      })
      .catch((data) => {
        alert(data);
      });
  }

  handleSubmit = (qparams) => {
    this.fetchAds({
      carModel: qparams.manufacturer || "",
      carName: qparams.search || "",
      carType: qparams.type || "",
      carUsed: qparams.used || "",
      min_price: qparams.minPrice?.toString() || "",
      max_price: qparams.maxPrice?.toString() || "",
    });
  };

  render() {
    return (
      <>
        <Header lang={"hidden"} />
        <Link to="ads/create">
            <CreateAdBtn/>
        </Link>

        <FilterForm onSubmit={this.handleSubmit} />

        {this.state.isLoaded ? (
          <Ads
            title={translate("availableCars")}
            ads={this.state.ads}
            usage="new"
          />
        ) : (
          <Loading loading_title={translate("availableCars")} />
        )}

        <Footer />
      </>
    );
  }
}

export default NewCarsPage;
