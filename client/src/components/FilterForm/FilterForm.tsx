import React, {Component} from "react";
import {Link} from "react-router-dom";
import WOW from "wowjs";
import "./FilterForm.scss";
import SearchInput from "../SearchInput/SearchInput";
import SelectInput from "../SelectInput/SelectInput";
import RangeInput from "../RangeInput/RangeInput";
import SearchButton from "../buttons/SearchButton/SearchButton";
import {IAd} from "../../models/IAd";

import "../../components/RangeInput/RangeInput";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

interface IState {
    search?: string;
    manufacturer?: string;
    type?: string;
    used?: string;
    minPrice?: number;
    maxPrice?: number;
}

interface IProps {
    onSubmit(params: IState): void;
}

class FilterForm extends Component<IProps, any> {
    constructor(props: any) {
        super(props);
    }

    state = {
        search: "",
        manufacturer: "",
        type: "",
        used: "",
        minPrice: 500,
        maxPrice: 30000,

        value: [500, 15000],
        range: {min: 500, max: 15000},
        pips: {
            mode: "values",
            values: [(500 + 15000) / 2],
            density: 10
        },
        step: 100
    };

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <form
                className="filter"
                onSubmit={event => {
                    event.preventDefault(); // Prevents page reloading
                    /* TODO */

                    // let query =
                    //   //   this.state.search +
                    //   " " +
                    //   this.state.manufacturer +
                    //   " " +
                    //   this.state.type +
                    //   " " +
                    //   this.state.minPrice +
                    //   " " +
                    //   this.state.maxPrice;
                    // alert(query);

                    this.props.onSubmit(this.state);
                }}
            >
                <div className="filter__title">
                    Unsure which vehicle you are looking for? Find it here!
                </div>
                <div className="filter__components">
                    {/* <SearchInput
            onChange={this.onChangeSearch}
            placeholder="Search"
            label="KEYWORD SEARCH?"
          /> */}

                    <SelectInput
                        onChange={this.onChangeSelect1}
                        label="SELECT MANUFACTURER"
                        options={["", "Audi", "BMW", "Mercedes", "Ford", "Mazda", "Porsche"]}
                        values={["", "Audi", "BMW", "Mercedes", "Ford", "Mazda", "Porsche"]}
                    />

                    <SelectInput
                        onChange={this.onChangeSelect2}
                        label="SELECT CAR TYPE"
                        options={[
                            "",
                            "Sedan",
                            "Coupe",
                            "SUV",
                            "4x4",
                            "Hatchback",
                            "Pickup"
                        ]}
                    />

                    <SelectInput
                        onChange={this.onChangeSelect3}
                        label="SELECT CAR USAGE"
                        options={["", "Used car", "New car"]}
                        values={["", "Used car", "New car"]}
                    />

                    <div className="range__container">
                        <div className="range__title"> Price range ($):</div>
                        <Nouislider
                            className="range"
                            start={this.state.value}
                            range={this.state.range}
                            tooltips={true}
                            connect
                            pips={this.state.pips}
                            step={this.state.step}
                            onSlide={this.onChangeRange}
                        />
                    </div>

                    <div className="wow pulse">
                        <SearchButton content="Search"/>
                    </div>
                </div>
            </form>
        );
    }

    onChangeSearch = (value: string) => {
        this.setState({
            search: value
        });
    };
    onChangeSelect1 = (value: string) => {
        this.setState({
            manufacturer: value
        });
    };
    onChangeSelect2 = (value: string) => {
        this.setState({
            type: value
        });
    };
    onChangeSelect3 = (value: string) => {
        this.setState({
            used: value
        });
    };
    onChangeRange = (value: string[]) => {
        this.setState({
            minPrice: value[0],
            maxPrice: value[1]
        });
    };
}

export default FilterForm;
