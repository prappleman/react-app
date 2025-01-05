import React from 'react';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><a href="https://facebook.com/yourband">Facebook</a></li>
        <li><a href="https://twitter.com/yourband">Twitter</a></li>
        <li><a href="https://instagram.com/yourband">Instagram</a></li>
      </ul>
      <p>&copy; 2025 Your Band. All rights reserved.</p>
      <p>Contact us: contact@yourband.com</p>
      <form>
        <input type="email" placeholder="Join our mailing list" />
        <button type="submit">Subscribe</button>
      </form>
    </footer>
  );
};

export default Footer;
