import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RestService from "../services/RestService";
import AdService from "../services/AdsService";
import Loading from "../components/Loading/Loading";
import CarAd from "../components/CarAd/CarAd";

import { IAd } from "../models/IAd";

import translate from "../i18n/translate";

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
        <Header
          lang={"visible"}
          handleClickEng={this.props.handleClickEng}
          handleClickDe={this.props.handleClickDe}
        />
        {this.state.isLoaded ? (
          <CarAd
            title={this.state.ad.carName}
            image={this.state.ad.carImage}
            description={this.state.ad.carDescription}
            fulldescription={this.state.ad.carFullDescription}
            model={this.state.ad.carModel}
            price={this.state.ad.carPrice}
            year={this.state.ad.carYear}
            used={this.state.ad.carUsed}
            type={this.state.ad.carType}
            mileage={this.state.ad.carMileage}
            maxspeed={this.state.ad.maxSpeed}
            fuel={this.state.ad.fuelConsumption}
            createdBy={this.state.ad.createdBy}
            createdByEmail={this.state.ad.createdByEmail}
            id={this.props.match.params.id}
            inputs={this.props.inputDisabled}
            mode={this.props.pageMode}
          />
        ) : (
          <Loading loadingTitle={translate("loading")} loadingStyle={{minHeight: "80vh"}}/>
        )}

        <Footer />
      </>
    );
  }
}

export default NewCarPage;
