import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import FilterForm from '../components/FilterForm/FilterForm';
import Welcome from '../components/Welcome/Welcome';
import MapComponent from '../components/MapComponent/MapComponent';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';


const HomePage = () => {
  return (
    <> 
      <Header />

      <Slider /> 

      <FilterForm />

      <Welcome />

      <Contacts />

      <MapComponent />

      <Footer />

      

    </>
  );
}

export default HomePage;