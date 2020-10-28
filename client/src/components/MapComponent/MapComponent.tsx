import React from "react";

import "./MapComponent.scss";

function MapComponent() {
  return (
    <div className="map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae1058cef0a6e1d962b765dbdec6d18d96ba54f7afd5da9515706d2fa8da9f12e&amp;source=constructor"
        width="100%"
        height="450"
      ></iframe>
    </div>
  );
}

export default MapComponent;
