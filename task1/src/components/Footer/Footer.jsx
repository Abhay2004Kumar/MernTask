import React from 'react';
import './Footer.css';

const Footer = ({ termsLink = "#", privacyLink = "#" }) => {
  return (
    <div className="footer-container">
      <p className="footer-text">
        By signing up, you agree to our{' '}
        <a href={termsLink} className="footer-link">
          Terms & conditions
        </a>
        ,{' '}
        <a href={privacyLink} className="footer-link">
          Privacy policy
        </a>
      </p>
    </div>
  );
};

Footer.defaultProps = {
  termsLink: '#',
  privacyLink: '#'
};

export default Footer;

