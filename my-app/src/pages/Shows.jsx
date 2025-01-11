import React, { useEffect } from 'react';
import '../styles/shows.css';
import showsImage from '../assets/shows.jpg'; // Import the image

const Shows = () => {
  useEffect(() => {
    // Create the script element dynamically to load the Seated widget
    const script = document.createElement('script');
    script.src = "https://widget.seated.com/app.js";
    script.async = true;
    script.onload = () => {
      // Additional code can go here if needed after the script is loaded
    };
    document.body.appendChild(script);

    // Cleanup: remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="image-section">
      {/* Background image */}
      <img
        src={showsImage}  // Using the imported image
        alt="Upcoming Shows"
        className="background-image"
      />
      {/* Shows container */}
      <div className="shows-container">
        <h1>Upcoming Shows</h1>
        <div
          id="seated-55fdf2c0"
          data-artist-id="1f8614f7-e935-4d48-ac57-6f61a30ee4dd"
          data-css-version="3"
        ></div>
      </div>
    </section>
  );
};

export default Shows;
