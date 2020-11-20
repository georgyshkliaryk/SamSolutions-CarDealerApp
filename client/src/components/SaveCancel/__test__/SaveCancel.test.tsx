import React from "react";
import ReactDOM from "react-dom";
import SaveCancel from "../SaveCancel";

it("SaveCancel component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SaveCancel />, div);
});
