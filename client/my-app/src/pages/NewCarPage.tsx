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
import Loading from "../components/Loading/Loading";
import CarAd from "../components/CarAd/CarAd";
import App from '../App';

import { IAd } from "../models/IAd";
import { IProps } from "../models/IProps";
import Ads from "../components/CarAds/Ads";
import { withRouter } from "react-router";

interface IId {
  _id: string;
}
interface IState {
  ad: IAd;
  isLoaded: boolean;
  mode?: string;
}


//TODO: Add interface for router
class NewCarPage extends React.Component<any, any> {
  adService: AdService;
  state: IState = {
    ad: {},
    isLoaded: false,
    mode: ""
  };

  updateData = (value) => {
    this.setState({ mode: value })
  }

  constructor(props: any) {
    super(props);
    const restService = new RestService();
    this.adService = new AdService(restService);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.fetchAd(this.props.match.params.id);

  }

  fetchAd(id: string) {
    this.adService
      .getAddById(id)
      .then(data => {
        this.setState({ ad: data, isLoaded: true });
        console.log(this.state.ad);
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
          <CarAd
            title={this.state.ad.carName}
            image={this.state.ad.carImage}
            description={this.state.ad.carDescription}
            id={this.props.match.params.id}
            
            inputs={this.props.inputDisabled}
            mode={this.props.pageMode}
            
          />
        ) : (
          <Loading loading_title="Loading ad..." />
        )}
        
        
        <Footer />
        
      </>
    );
  }
}

export default withRouter(NewCarPage as any);
