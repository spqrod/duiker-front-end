import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop";
import './style.css';  // Import the combined styles here

function App() {
  return (
    // <Router>

    <HashRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>    
      <Footer />
    </HashRouter>


    // </Router>
  );
}

export default App;