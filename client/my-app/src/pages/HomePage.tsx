import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import FilterForm from '../components/FilterForm/FilterForm';
import Welcome from '../components/Welcome/Welcome';
import MapComponent from '../components/MapComponent/MapComponent';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';
import Ads from '../components/CarAds/Ads';
import {IAd} from '../models/IAd';

import RestService from '../services/RestService';
import AdService from '../services/AdsService';



interface IState {
  ads: IAd[];
}
class HomePage extends React.Component {
  state = {
    ads: [],
    isLoaded: false
  }

  componentDidMount() {
    const restService = new RestService;
    const adService = new AdService(restService);
    adService.getAllAds().then((data) => {this.setState({ ads: data, isLoaded: true}) }).catch( (data) => {alert(data)});
}

  render() {
    return (
      <> 

        <Header />

        <Slider /> 

        <FilterForm />

        {
          this.state.isLoaded?<Ads ads={this.state.ads}/>:'loading...'
        }

        <Welcome />

        <Contacts />

        <MapComponent />

        <Footer />

      </>
    );
  }
}

export default HomePage;

