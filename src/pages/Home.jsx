import React from 'react';
import Hero from '../components/sections/Hero';
import Navbar from '../components/sections/Navbar';
import Footer from '../components/sections/Footer';
import Apropos from '../components/sections/Apropos';
import Localisation from '../components/sections/Localisation';
import Formations from '../components/sections/Formations';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <hr />
      <div id="formations">
        <Formations />
      </div>
      <hr />
      <div id="apropos">
        <Apropos />
      </div>
      <hr />
      <div id="localisation">
        <Localisation />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
