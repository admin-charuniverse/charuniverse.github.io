import React from 'react';
import Navbar from '../components/molekul/Navbar';
import Hero from '../components/molekul/Hero';
import TigaPilar from '../components/molekul/TigaPilar';
import Portofolio from '../components/molekul/Portofolio';
import { Footer } from '../components/molekul/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TigaPilar />
      <Portofolio />
      <Footer />
    </>
  );
};

export default LandingPage;
