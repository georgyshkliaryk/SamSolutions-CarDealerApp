import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../Loading';
import { I18nProvider, LOCALES } from "../../../i18n";

it("Loading component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<I18nProvider locale={LOCALES.ENGLISH}><Loading /></I18nProvider>, div)
})