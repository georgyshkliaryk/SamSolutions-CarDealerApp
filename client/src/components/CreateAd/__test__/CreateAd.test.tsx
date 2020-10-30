import React from 'react';
import ReactDOM from 'react-dom';
import CreateAd from '../CreateAd';
import { I18nProvider, LOCALES } from "../../../i18n";

it("CreateAd component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<I18nProvider locale={LOCALES.ENGLISH}><CreateAd /></I18nProvider>, div)
})