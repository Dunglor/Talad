// src/components/TaladPoster.jsx
import React from 'react';
import posterImage from '../assets/Talad_poster.jpg';  // 1. Note the renamed file (no spaces)
import './Poster.css';

function TaladPoster() {
  return (
    <div className="poster-container">
      <img
        src={posterImage}                // 2. Use the imported variable
        alt="Talad Poster"
        className="full-screen-image"
      />
    </div>
  );
}

export default TaladPoster;
