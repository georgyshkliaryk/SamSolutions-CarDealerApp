import React from "react";
import WOW from "wowjs";

import "./Header.scss";

class Language extends React.Component<any, {}> {

  constructor(props: any) {
    super(props);
    // this.handleClickDe = this.handleClickDe.bind(this);
    // this.handleClickEng = this.handleClickEng.bind(this);
    // this.props.lang(this.state.lang);
  }



  render() {
    return (
      <div className="link wow bounceInDown" data-wow-delay="0.2s">
        <img
          className="flag uk"
          src="https://icon-library.com/images/icon-english/icon-english-11.jpg"
          alt="eng"
          title="English"
          onClick={this.props.handleClickEng}

          //   style={{ visibility: this.props.lang }}
        />
        <img
          className="flag de"
          src="https://cdn.countryflags.com/thumbs/germany/flag-round-250.png"
          alt="de"
          title="German"
          onClick={this.props.handleClickDe}

          //   style={{ visibility: this.props.lang }}
        />
      </div>
    );
  }
}

export default Language;
