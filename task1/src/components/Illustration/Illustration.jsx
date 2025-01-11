import React from 'react';
import './Illustration.css';

const Illustration = ({ className, description }) => {
  return (
    <div className={`illustration-container ${className || ''}`}>
      <img 
        src="https://dashboard.codeparrot.ai/api/assets/Z4D_CgIBBLnlud4L"
        alt="Illustration"
        className="illustration-image"
      />
      <div className="illustration-description">
        {description}
      </div>
    </div>
  );
};

Illustration.defaultProps = {
  className: '',
  description: 'Default description text'
};

export default Illustration;

