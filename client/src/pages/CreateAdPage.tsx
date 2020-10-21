import React from "react";
import { useParams, Link } from "react-router-dom";
import App from '../App';
import AdService from "../services/AdsService";
import {IAd} from "../models/IAd";
import RestService from "../services/RestService";
import AdPage from "./AdPage";
import Loading from "../components/Loading/Loading";
import Ads from "../components/CarAds/Ads";
import {IProps} from "../models/IProps";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewCarPage from "./NewCarPage";
import {getStatus} from "../components/Welcome/Welcome";
import CreateAdBtn from "../components/buttons/CreateAdBtn/CreateAdBtn";
import FilterForm from '../components/FilterForm/FilterForm';
import CreateAd from '../components/CreateAd/CreateAd';


interface IState {
    ads: IAd[];
}

class CreateAdPage extends React.Component {
    state = {
      
    };
render() {
  return (
    <div>
      <Header />
      <CreateAd />
      <Footer />
    </div>
  );
};
}

export default CreateAdPage;