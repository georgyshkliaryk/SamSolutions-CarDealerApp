import React from 'react';
import ReactDOM from 'react-dom';
import CreateAdBtn from '../CreateAdBtn';
import { I18nProvider, LOCALES } from "../../../../i18n";

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";

import renderer from 'react-test-renderer';

afterEach(cleanup);

it("CreateAdBtn component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<I18nProvider locale={LOCALES.ENGLISH}><CreateAdBtn /></I18nProvider>, div)
});
