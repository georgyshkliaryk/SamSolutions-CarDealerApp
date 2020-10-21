import React from "react";
import { Link } from "react-router-dom";
import Login from '../components/Login/Login';
import App from '../App';
import AdService from "../services/AdsService";
import {IProps} from "../components/Slider/Slider";



class LoginPage extends React.Component<any,any> {

    state = {
        name: ""
    };
    constructor(props: any) {
        super(props);
    }
    // componentDidMount(): void {
    //     this.props.updateData2(this.state.name);
    // };

    updateData = (value) => {
        this.setState({ name: value });
       // console.log(this.state.name);
    };


    render() {
        return (
            <>
                <Login updateData={() => {this.props.updateData2(this.state.name)}}/>
            </>
        );
    };
}

export default LoginPage;
