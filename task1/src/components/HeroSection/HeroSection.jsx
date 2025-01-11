import React from 'react';
import './HeroSection.css';

const HeroSection = ({ 
  title = "Computer Engineering",
  subtitle = "142,765 Computer Engineers follow this",
  backgroundImage = "https://dashboard.codeparrot.ai/api/assets/Z4Dr2wIBBLnlud2T",
  overlayImage = "https://dashboard.codeparrot.ai/api/assets/Z4Dr2wIBBLnlud2U"
}) => {
  return (
    <div className="hero-section">
      <div className="hero-background">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <img src={overlayImage} alt="Overlay" className="overlay-image" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSection;
