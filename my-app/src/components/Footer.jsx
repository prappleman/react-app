import React, { useState } from 'react';
import '../styles/footer.css';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLearnMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className="footer">

      {/* Social Media Links */}
      <section className="social-links">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook-logo.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="twitter-logo.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram-logo.png" alt="Instagram" />
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p id="bio-preview">
          We are a passionate band making music that resonates with our audience.
        </p>
        <button id="learn-more" onClick={handleLearnMoreClick}>
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
        {isExpanded && (
          <div id="bio-full"><p>Born from the vibrant backdrop of Salt Lake City’s mountainous landscape, Wilbere is an indie rock quartet creating a sound that blends heartfelt intensity with a modern indie rock edge. Formed in 2022 through high school friendships, the band—Davis McBride (guitar, vocals), Max Moon (drums), Parker Rappleye (guitar), and Ethan Powell (bass)—has quickly transitioned from their early beginnings to commanding stages with a tight and dynamic presence.</p>
        
          <p>Wilbere’s music bridges the raw energy of alternative rock with the introspection of folk and the sensibilities of indie rock. Their songs are imbued with emotional resonance, weaving stories of identity, belonging, and change that speak directly to their generation.</p>
          
          <p>In December 2024, Wilbere solidified their reputation as a rising force by winning the prestigious Velour Battle of the Bands—a proving ground for many successful acts. This milestone added to their growing list of achievements, including the release of their debut EP, <strong>Quiet Eyes</strong> (November 2023), which earned critical praise for its heartfelt lyricism and dynamic compositions. Just months later, their sophomore release, <strong>My Given Name</strong> (August 2024), showcased a band maturing in confidence and ambition, with layered soundscapes that elevated their storytelling to new heights.</p>
          
          <p>Wilbere’s music resonates with fans who crave authenticity. Their live performances crackle with electricity, leaving audiences both exhilarated and introspective.</p>
          
          <p>As they expand their discography and reach, Wilbere is poised to become more than just a local treasure. For those following indie rock’s evolution, Wilbere is a name to remember.</p>
        </div>
        )}
      </section>
    </footer>
  );
};

export default Footer;
