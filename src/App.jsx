import React from 'react';
import './styles.css';
import Hero from './components/Hero';
import ScrollingMask from './components/ScrollingMask';
import ScrollingMask06 from './components/ScrollingMask06';
import RevolutionaryDesign from './components/RevolutionaryDesign';
import CoreFunctionalities from './components/CoreFunctionalities';
import LiveDemo from './components/LiveDemo';
import TechnicalDetails from './components/TechnicalDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <RevolutionaryDesign />
      <CoreFunctionalities />
      <LiveDemo />
      <TechnicalDetails />
      <Footer />
    </div>
  );
}

export default App; 