// src/components/TaladPoster.jsx
import React from 'react';
import posterImage from '../assets/Talad-Poster.jpg';
import './poster.css';

function Poster() {
  return (
    <div className="poster-container">
      <img
        src={posterImage}                
        alt="Talad Poster"
        className="full-screen-image"
      />
    </div>
  );
}

export default Poster;
