import React from 'react';
import './LoginModel.css';
import FormSectionLogin from '../FormSectionLogin/FormSection'; // Form for Login
import Illustration from '../Illustration/Illustration';
import Footer from '../Footer/Footer';
import LoHeader from '../LHeader/LHeader';


const LoginModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Return null if modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <LoHeader/>
        <div className="modal-body">
          <FormSectionLogin /> {/* Form to handle login */}
          <Illustration description="" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LoginModel;
