import React from 'react';
import Nav from './components/Nav'; // Import Nav component
import Footer from './components/Footer'; // Import Footer component
import Home from './components/Home'; // Import Home component

function App() {
  return (
    <div>
      <Nav />
      <Home />  {/* Add your other components here */}
      <Footer />
    </div>
  );
}

export default App;
