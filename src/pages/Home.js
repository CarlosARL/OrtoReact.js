import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ProductsPreview from '../components/home/ProductsPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import Testimonials from '../components/home/Testimonials';
import Partners from '../components/home/Partners';
import ContactCTA from '../components/home/ContactCTA';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutPreview />
      <ProductsPreview />
      <ServicesPreview />
      <Testimonials />
      <Partners />
      <ContactCTA />
    </div>
  );
};

export default Home;