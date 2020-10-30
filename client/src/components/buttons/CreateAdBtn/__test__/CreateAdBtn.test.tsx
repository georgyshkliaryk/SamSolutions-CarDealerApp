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

it("Create ad button renders correctly", () => {
    const {getByTestId} = render(<I18nProvider locale={LOCALES.ENGLISH}><CreateAdBtn content="Create new ad"/></I18nProvider>);
    expect(getByTestId("createAdBtn")).toHaveTextContent("Create new ad")
});
it("Create ad button renders correctly", () => {
    const {getByTestId} = render(<I18nProvider locale={LOCALES.ENGLISH}><CreateAdBtn content="Save"/></I18nProvider>);
    expect(getByTestId("createAdBtn")).toHaveTextContent("Save") 
});

it("Create ad button matches snapshot 1", () => {
    const tree = renderer.create(<I18nProvider locale={LOCALES.ENGLISH}><CreateAdBtn content="Create new ad"/></I18nProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});
it("Create ad button matches snapshot 2", () => {
    const tree = renderer.create(<I18nProvider locale={LOCALES.ENGLISH}><CreateAdBtn content="Save"/></I18nProvider>).toJSON();
    expect(tree).toMatchSnapshot();
})
