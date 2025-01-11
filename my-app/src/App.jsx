import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Shows from "./pages/Shows";
import paperImage from './assets/paper.jpg';


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
