import React from 'react';
import './styles/App.css';
import Header        from './components/Header';
import Hero          from './components/Hero';
import Slogan          from './components/Slogan';
import SeasonSection from './components/SeasonSection';
import ProgramSection from './components/ProgramSection';
import NewsSection   from './components/NewsSection';
import FaqSection    from './components/FaqSection';
import Footer        from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Slogan />
      <SeasonSection />
      <ProgramSection />
      <NewsSection />
      <FaqSection />
      <Footer />
    </>
  );
}
