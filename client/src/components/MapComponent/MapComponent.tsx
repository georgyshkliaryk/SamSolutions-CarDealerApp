import React from "react";

import "./MapComponent.scss";

function MapComponent() {
  return (
    <div className="map" data-testid="map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A365411133025d68de64a6b251899dd8ce61c2ba3f28571cf85bfe2aa46cc7dab&amp;source=constructor"
        width="100%"
        height="450"
      ></iframe>
    </div>
  );
}

export default MapComponent;
