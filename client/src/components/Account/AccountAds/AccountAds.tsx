import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import Loading from "../../Loading/Loading";
import Ads from "../../CarAds/Ads";
import "./AccountAds.scss";

import { IAd } from "../../../models/IAd";
import { IProps } from "../../../models/IProps";

import RestService from "../../../services/RestService";
import AdService from "../../../services/AdsService";
import CreateAdBtn from "../../buttons/CreateAdBtn/CreateAdBtn";

import translate from "../../../i18n/translate";

interface IState {
  ads: IAd[];
  myAds: IAd[];
  isLoaded: boolean;
}

class AccountAds extends React.Component<any, {}> {
  adService: AdService;
  state: IState = {
    ads: [],
    myAds: [],
    isLoaded: false,
  };

  constructor(props: IProps) {
    super(props);
    const restService = new RestService();
    this.adService = new AdService(restService);
    let myAds = [];
  }

  componentDidMount() {
    this.fetchAds();
  }

  fetchAds(queryParams = {}) {
    this.adService
      .getAllAds(queryParams)
      .then((data) => {
        this.setState({ ads: data, isLoaded: true });
        console.log(this.state.ads.length);
        for (let i = 0; i < this.state.ads.length; i++) {
          if (this.state.ads[i].createdBy == this.props.nickname) {
            let newArr = this.state.myAds.concat(this.state.ads[i]);
            this.setState({
              myAds: newArr,
            });
          }
        }
      })
      .catch((data) => {
        alert(data);
      });
  }

  render() {
    if (this.state.myAds.length != 0) {
      return (
        <>
          {this.state.isLoaded ? (
            <Ads
              title={translate("yourCars")}
              ads={this.state.myAds}
              usage="new"
            />
          ) : (
            <Loading loading_title={translate("availableCars")} />
          )}
        </>
      );
    } else {
      return (
        <>
          <div className="ads__title"> {translate("yourCars")} </div>
          <div className="no_ads">{translate("noCars")}</div>
        </>
      );
    }
  }
}

export default AccountAds;
