import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

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

class NewCarsPage extends React.Component<any, {}> {
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
    if (this.state.ads.length > 0) {
      return (
        <>
          <Header
            lang={"visible"}
            handleClickEng={this.props.handleClickEng}
            handleClickDe={this.props.handleClickDe}
          />
          <Link to="ads/create">
            <CreateAdBtn />
          </Link>

          <FilterForm onSubmit={this.handleSubmit} />

          {this.state.isLoaded ? (
            <Ads
              title={translate("availableCars")}
              ads={this.state.ads}
              usage="new"
              moreAdsBtn={{display: "none"}}
            />
          ) : (
            <Loading loadingTitle={translate("availableCars")} />
          )}

          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Header
            lang={"hidden"}
            handleClickEng={this.props.handleClickEng}
            handleClickDe={this.props.handleClickDe}
          />

          <Link to="ads/create">
            <CreateAdBtn />
          </Link>

          <FilterForm onSubmit={this.handleSubmit} />

          <div className="ads">
            {this.state.isLoaded ? (
              <div>
                <div className="ads__title wow flipInY" data-wow-delay="0.3s">
                  {translate("availableCars")}
                </div>
                <div>{translate("noCarsFilter")}</div>
              </div>
            ) : (
              <Loading loadingTitle={translate("availableCars")} />
            )}
          </div>
          <Footer />
        </>
      );
    }
  }
}

export default NewCarsPage;
