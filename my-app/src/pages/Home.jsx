import React, { useState } from 'react';
import '../styles/home.css';
import headerVideo from '../assets/video_header.mp4';
import albumImage from '../assets/album.jpg';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the email submission (e.g., call API to save the email)
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <div className="home-container">
      {/* Big Photo Section */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted>
          <source src={headerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="https://linktr.ee/wilbereband" target="_blank" rel="noopener noreferrer">
          <button className="hero-button">Explore</button>
        </a>
      </section>


      {/* Latest Album/EP Release Section */}
      <section className="latest-album">
        <div className="album-details">
          <img
            src={albumImage}
            alt="Latest Album"
            className="album-cover"
          />
          <div className="album-info">
            <button className="listen-btn">Listen Now</button>
          </div>
        </div>
      </section>

      {/* Mailing List */}
      <section className="mailing-list">
        <h2>Join Our Mailing List</h2>
        <form className="mailing-form">
          <input type="email" placeholder="Email" required />
          <input type="phone" placeholder="Phone (optional)" />
          <input type="text" placeholder="State (optional)" />
          <input type="text" placeholder="Country (optional)" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
