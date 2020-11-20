import React from "react";
import ReactDOM from "react-dom";
import MapComponent from "../MapComponent";

it("Map component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MapComponent />, div);
});
