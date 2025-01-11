import React from 'react';

import './SignUpPage.css';
import SHeader from '../../components/SignUp/SHeader';
import FormSection from '../../components/FormSection/FormSection';
import Illustration from '../../components/Illustration/Illustration';
import Footer from '../../components/Footer/Footer';

const SignUpPage = () => {
  const handleSignIn = (credentials) => {
    console.log('Sign In:', credentials);
  };

  const handleSignUp = (credentials) => {
    console.log('Sign Up:', credentials);
  };

  return (
    <div className="signup-page">
      <SHeader onSignIn={handleSignIn} onSignUp={handleSignUp} />
      <div className="signup-content">
        <FormSection onSubmit={handleSignUp} />
        <Illustration description="Join our community and start learning today!" />
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
