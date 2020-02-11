import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import FilterForm from '../components/FilterForm/FilterForm';
import Welcome from '../components/Welcome/Welcome';


const HomePage = () => {
  return (
    <> 
      <Header />

      <Slider /> 

      <FilterForm />

      <Welcome />


      

    </>
  );
}

export default HomePage;