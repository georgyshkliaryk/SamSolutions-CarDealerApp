import React from 'react';
import ReactDOM from 'react-dom';
import RangeInput from '../RangeInput';

it("RangeInput component renders without crashing", () => {
    const div = document.createElement("div"); 
    ReactDOM.render(<RangeInput />, div)
})