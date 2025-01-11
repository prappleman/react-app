import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/nav.css';
import wilbereWhite from '../assets/wilbereWhite.png';
import wilbereBlack from '../assets/wilbereBlack.png';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logic to determine theme color
  const isHomeOrShows = location.pathname === '/' || location.pathname === '/shows';

  const isBlackTheme = isHomeOrShows && (isScrolled || location.pathname === '/');

  return (
    <nav className={isScrolled ? 'fixed' : ''}>
      <img
        src={isBlackTheme ? wilbereBlack : wilbereWhite}
        alt="Band Logo"
        className="wilbereTitle"
      />
      <ul className={isBlackTheme ? 'black-theme' : 'white-theme'}>
        <li><a href="/">Home</a></li>
        <li><a href="/merch">Merch</a></li>
        <li><a href="/shows">Shows</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
