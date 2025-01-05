import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'; // Navigation component
import Footer from './components/Footer'; // Footer component
import Home from './components/Home'; // Home page component
import Shows from './components/Shows'; // Shows page component
import Merch from './components/Merch'; // Merch page component

const App = () => {
  return (
    <Router>
      <Nav /> {/* Navigation bar is displayed on all pages */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>

      <Footer /> {/* Footer is displayed on all pages */}
    </Router>
  );
};

export default App;
