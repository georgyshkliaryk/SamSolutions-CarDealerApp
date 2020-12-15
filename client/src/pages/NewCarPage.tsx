import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RestService from "../services/RestService";
import AdService from "../services/AdsService";
import Loading from "../components/Loading/Loading";
import CarAd from "../components/CarAd/CarAd";

import { IAd } from "../models/IAd";

import translate from "../i18n/translate";
import withBasicLayout from "../hoc/withBasicLayout";

interface IState {
  ad: IAd;
  isLoaded: boolean;
  mode?: string;
}

class NewCarPage extends React.Component<any, any> {
  adService: AdService;
  state: IState = {
    ad: {},
    isLoaded: false,
    mode: "",
  };

  updateData = (value) => {
    this.setState({ mode: value });
  };

  constructor(props: any) {
    super(props);
    const restService = new RestService();
    this.adService = new AdService(restService);
  }

  componentDidMount() {
    this.fetchAd(this.props.match.params.id);
  }

  fetchAd(id: string) {
    this.adService
      .getAddById(id)
      .then((data) => {
        this.setState({ ad: data, isLoaded: true });
      })
      .catch((data) => {
        alert(data);
      });
  }

  render() {
    return (
      <>
        {this.state.isLoaded ? (
          <CarAd
            ad={this.state.ad} 
            id={this.props.match.params.id}
            inputs={this.props.inputDisabled}
          />
        ) : (
          <Loading loadingTitle={translate("loading")} loadingStyle={{minHeight: "80vh"}}/>
        )}
      </>
    );
  }
}

export default withBasicLayout(NewCarPage);
