import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { I18nProvider, LOCALES } from "../i18n/";

it("App component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <App />
    </I18nProvider>,
    div
  );
});