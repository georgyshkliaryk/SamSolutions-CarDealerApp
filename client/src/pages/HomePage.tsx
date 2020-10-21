import React from "react";
import {Link, Redirect} from "react-router-dom";

import Header from "../components/Header/Header";
import Slider, {IProps} from "../components/Slider/Slider";
import FilterForm from "../components/FilterForm/FilterForm";
import Welcome from "../components/Welcome/Welcome";
import MapComponent from "../components/MapComponent/MapComponent";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Ads from "../components/CarAds/Ads";
import Loading from "../components/Loading/Loading";

import {IAd} from "../models/IAd";

import RestService from "../services/RestService";
import AdService from "../services/AdsService";

import queryString from "query-string";
import WOW from "wowjs";

interface IState {
    ads: IAd[];
}

interface IAdQueryParams {
    carModel: string;
    carType: string;
    carName: string;
    carUsed: string;
    min_price: string;
    max_price: string;
}

class HomePage extends React.Component {

    adService: AdService;
    state = {
        ads: [],
        isLoaded: false,
        loggedIn: true
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
            isLoaded: false,
            loggedIn
        }

    }

    componentDidMount() {
        new WOW.WOW().init();
        this.fetchAds({} as any);
    }


    fetchAds(queryParams: IAdQueryParams) {
        this.adService
            .getAllAds(queryParams)
            .then(data => {
                this.setState({ads: data, isLoaded: true});
            })
            .catch(data => {
                alert(data);
                this.setState({isLoaded: false});
            });
    }

    render() {
        if (this.state.loggedIn == false) {
            return <Redirect to="/login"/>
        }
        return (
            <>
                <Header/>

                {this.state.isLoaded ? (
                    <Slider ads={this.state.ads}/>
                ) : (
                    <Loading loading_title="Popular cars"/>
                )}

                <FilterForm
                    onSubmit={qparams =>
                        this.fetchAds({
                            carModel: qparams.manufacturer || "",
                            carName: qparams.search || "",
                            carType: qparams.type || "",
                            carUsed: qparams.used || "",
                            min_price: qparams.minPrice?.toString() || "",
                            max_price: qparams.maxPrice?.toString() || ""
                        })
                    }
                />

                {this.state.isLoaded ? (
                    <Ads ads={this.state.ads} title="Available cars"/>
                ) : (
                    <Loading loading_title="Available cars"/>
                )}

                <Welcome ads={this.state.ads}/>

                <Contacts/>

                <MapComponent/>

                <Footer/>
            </>
        );
    }
}

export default HomePage;
