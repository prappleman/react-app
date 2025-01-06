import React from 'react';
import { Link } from 'react-router-dom'; // for React Router navigation

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/merch">Merch</Link></li>
        <li><Link to="/shows">Shows</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
