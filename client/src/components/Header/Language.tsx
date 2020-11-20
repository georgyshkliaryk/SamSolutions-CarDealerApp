import React from "react";

import "./Header.scss";

class Language extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.classes} data-wow-delay="0.2s">
        <img
          className="flag uk"
          src="https://icon-library.com/images/icon-english/icon-english-11.jpg"
          alt="eng"
          title="English"
          onClick={this.props.handleClickEng}
        />
        <img
          className="flag de"
          src="https://cdn.countryflags.com/thumbs/germany/flag-round-250.png"
          alt="de"
          title="German"
          onClick={this.props.handleClickDe}
        />
      </div>
    );
  }
}

export default Language;
