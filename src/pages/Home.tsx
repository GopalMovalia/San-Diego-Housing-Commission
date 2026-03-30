import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactForm from '../components/ContactForm';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* Image break — community photo */}
      <div className="home-img-break" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}news-bg.png`} alt="" loading="lazy" />
        <div className="home-img-break__overlay" />
        <div className="home-img-break__text">
          <h2>"Every San Diegan deserves a safe, stable place to call home."</h2>
          <span>— San Diego Housing Commission</span>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Home;
