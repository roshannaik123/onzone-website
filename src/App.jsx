import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UtilityBar from './components/UtilityBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoriesStrip from './components/CategoriesStrip';
import Story from './components/Story';
import Collections from './components/Collections';
import RetailFirst from './components/RetailFirst';
import Lookbook from './components/Lookbook';
import Strengths from './components/Strengths';
import Philosophy from './components/Philosophy';
import QuoteBlock from './components/QuoteBlock';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <div className="min-h-screen bg-cream-light font-sans text-ink">
      <UtilityBar />
      <Navbar />
      <main>
        <Hero />
        <CategoriesStrip />
        <Story />
        <Collections />
        <RetailFirst />
        <Lookbook />
        <Strengths />
        <Philosophy />
        <QuoteBlock />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
