import React from 'react';
import './styles.css';
import Hero from './components/Hero';
import ScrollingMask from './components/ScrollingMask';
import ScrollingMask06 from './components/ScrollingMask06';
import RevolutionaryDesign from './components/RevolutionaryDesign';
import CoreFunctionalities from './components/CoreFunctionalities';
import TechnicalDetails from './components/TechnicalDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <ScrollingMask06 />
      <ScrollingMask />
      <RevolutionaryDesign />
      <CoreFunctionalities />
      <TechnicalDetails />
      <Footer />
    </div>
  );
}

export default App; 