import React from "react";
import { Redirect, Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Slider, { IProps } from "../components/Slider/Slider";
import FilterForm from "../components/FilterForm/FilterForm";
import Welcome from "../components/Welcome/Welcome";
import MapComponent from "../components/MapComponent/MapComponent";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Ads from "../components/CarAds/Ads";
import Loading from "../components/Loading/Loading";
import MoreButton from "../components/buttons/MoreButton/MoreButton";

import { IAd } from "../models/IAd";

import RestService from "../services/RestService";
import AdService from "../services/AdsService";

import WOW from "wowjs";

import translate from "../i18n/translate";

interface IState {
  ads: IAd[];
  startAds: IAd[];
  isLoaded: boolean; 
}

interface IAdQueryParams {
  carModel: string;
  carType: string;
  carName: string;
  carUsed: string;
  min_price: string;
  max_price: string;
}

class HomePage extends React.Component<any, {}> {
  adService: AdService;
  state: IState = {
    ads: [],
    startAds: [],
    isLoaded: false,
  };

  constructor(props: IProps) {
    super(props);

    const restService = new RestService();
    this.adService = new AdService(restService);

    const token: any = localStorage.getItem("token");

    let loggedIn: boolean = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      ads: [],
      startAds: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    new WOW.WOW().init();
    this.fetchAds({} as any);
    
  }

  componentDidUpdate() {
   // console.log(this.state.lang);
    
  }




  fetchAds(queryParams: IAdQueryParams) {
    this.adService
      .getAllAds(queryParams)
      .then((data) => {
        this.setState({ ads: data, isLoaded: true });
        for (let i = 0; i < 3; i++) {
          let newArr = this.state.startAds.concat(this.state.ads[i]);
          this.setState({
            startAds: newArr,
          });
        }
      })
      .catch((data) => {
        alert(data);
        this.setState({ isLoaded: false });
      });
  }

  render() {
    return (
      <>
        <Header lang={"visible"} handleClickEng={this.props.handleClickEng} handleClickDe={this.props.handleClickDe}/>

        {this.state.isLoaded ? (
          <Slider ads={this.state.startAds} />
        ) : (
          <Loading loading_title={translate("popularCars")} />
        )}

        {this.state.isLoaded ? (
          <Ads ads={this.state.startAds} title={translate("availableCars")} />
        ) : (
          <Loading loading_title="Available cars" />
        )}

        <div style={{textAlign: "center", marginBottom: "5em", marginTop: "-6em"}}>
          <Link to="/ads">
            <MoreButton
              content={translate("moreAds", {
                arrow: <span>&rsaquo;</span>,
              })}
            />
          </Link>
        </div>

        <Welcome ads={this.state.ads} />

        <Contacts />

        <MapComponent />

        <Footer />
      </>
    );
  }
}

export default HomePage;
