import React from "react";

import RestService from "../services/RestService";
import AdService from "../services/AdsService";
import Loading from "../components/Loading/Loading";
import EditAd from "../components/EditAd/EditAd";
import withAuthentication from '../hoc/withAuthentication';
import withBasicLayout from "../hoc/withBasicLayout";


import { IAd } from "../models/IAd";

import translate from "../i18n/translate";

interface IState {
  ad: IAd;
  isLoaded: boolean;
  mode?: string;
}

class EditAdPage extends React.Component<any, any> {
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
          <EditAd
            ad={this.state.ad}
            id={this.props.match.params.id}
          />
        ) : (
          <Loading loadingTitle={translate("loading")} loadingStyle={{minHeight: "80vh"}}/>
        )}
      </>
    );
  }
}

export default withAuthentication(withBasicLayout(EditAdPage));
