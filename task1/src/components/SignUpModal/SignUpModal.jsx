import React from 'react';
import './SignUpModal.css';
import SHeader from '../SignUp/SHeader';
import FormSection from '../FormSectionSignUp/FormSection';
import Illustration from '../Illustration/Illustration';
import Footer from '../Footer/Footer';

const SignUpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If modal is not open, return nothing

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <SHeader />
        <div className="modal-body">
          <FormSection />
          <Illustration description="" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SignUpModal;
