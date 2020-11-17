import React from "react";
import WOW from "wowjs";

import "./Header.scss";

class Language extends React.Component<any, {}> {
  state = {
    lang: 0,
  };
  constructor(props: any) {
    super(props);
    this.handleClickDe = this.handleClickDe.bind(this);
    this.handleClickEng = this.handleClickEng.bind(this);
    // this.props.lang(this.state.lang);
  }

  async handleClickEng() {
    await this.setState({
      lang: 0,
    });

    //console.log(this.state.lang);
    this.props.updateLang(this.state.lang);
    this.handleClickEng = this.handleClickEng.bind(this);
  }
  async handleClickDe() {
    await this.setState({
      lang: 1,
    });

    //console.log(this.state.lang);
    this.props.updateLang(this.state.lang);
    this.handleClickDe = this.handleClickDe.bind(this);
  }

  render() {
    return (
      <div className="link wow bounceInDown" data-wow-delay="0.2s">
        <img
          className="flag uk"
          src="https://icon-library.com/images/icon-english/icon-english-11.jpg"
          alt="eng"
          title="English"
          onClick={this.handleClickEng}

          //   style={{ visibility: this.props.lang }}
        />
        <img
          className="flag de"
          src="https://cdn.countryflags.com/thumbs/germany/flag-round-250.png"
          alt="de"
          title="German"
          onClick={this.handleClickDe}

          //   style={{ visibility: this.props.lang }}
        />
      </div>
    );
  }
}

export default Language;
