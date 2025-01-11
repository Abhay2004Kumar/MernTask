import React, { useState } from 'react';
import './LHeader.css';
import SignUpModal from '../SignUpModal/SignUpModal'; // Import SignUpModal
import LoginModel from '../LoginModel/LoginModel'; // Import LoginModel

const LoHeader = ({ 
  introText = "Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼",
  signInText = "Create Free Account? Sign Up", // Keep the same text for the button
  onSignIn = () => {},
  onSignUp = () => {},
}) => {
  const [isSignUpOpen, setSignUpOpen] = useState(false); // For SignUp modal
  const [isLoginOpen, setLoginOpen] = useState(false); // For Login modal

  const toggleSignUpModal = () => {
    // When opening SignUp, close Login
    setSignUpOpen(true);  
    setLoginOpen(false); 
  };

  const toggleLoginModal = () => {
    // When opening Login, close SignUp
    setLoginOpen(true);   
    setSignUpOpen(false); 
  };

  const handleModalClose = () => {
    // Close both modals
    setSignUpOpen(false);  
    setLoginOpen(false);   
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-text-container">
          <p className="header-text">{introText}</p>
        </div>
        <div className="auth-text-container">
          {/* When "Create Free Account? Sign Up" text is clicked, it opens the SignUp modal */}
          <span className="sign-in-link" onClick={toggleSignUpModal}>{signInText}</span>
        </div>
      </div>

      {/* Sign Up Modal */}
      <SignUpModal isOpen={isSignUpOpen} onClose={handleModalClose} />

      {/* Login Modal */}
      <LoginModel isOpen={isLoginOpen} onClose={handleModalClose} />
    </div>
  );
};

export default LoHeader;
