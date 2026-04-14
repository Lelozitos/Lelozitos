import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Passions from './components/Passions';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Passions />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
