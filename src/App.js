import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Transition from './components/Transition';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Reserve from './pages/Reserve';
import Events from './pages/Events';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import WhatsAppButton from './components/WhatsAppButton';
import './styles/global.css';
import './styles/header.css';
import './styles/home.css';

function AppContent() {
    const location = useLocation();

    // The timeout is present to account for the page transition effect.
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'auto' });
            }, 300); 
        }, [location.pathname]);


  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HashRouter>
      <Header />
      <AppContent />
      <WhatsAppButton />
      <Footer />
    </HashRouter>
  );
}

export default App;