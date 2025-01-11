import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import { useNavigate } from 'react-router-dom'; // Import navigate from react-router-dom
import './FormSection.css';

const FormSection = ({ title = "Create Account" }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // Send data to backend API using axios
      const response = await axios.post('https://merntask-agp4.onrender.com//api/v1/users/register', formData);

      if (response.status === 201) {
        alert("User registered successfully!");
        navigate('/logged-in'); // Navigate to the logged-in page upon successful registration
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="form-section">
      <h1 className="form-title">{title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <div className="name-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="name-input"
            />
            <div className="vertical-line"></div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="name-input"
            />
          </div>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />

        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          />
          <button 
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-input"
        />

        <button type="submit" className="create-account-btn">
          Create Account
        </button>

        <button type="button" className="social-btn facebook-btn">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4D_CgIBBLnlud4G" alt="Facebook" />
          <span>Sign up with Facebook</span>
        </button>

        <button type="button" className="social-btn google-btn">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4D_CgIBBLnlud4H" alt="Google" />
          <span>Sign up with Google</span>
        </button>
      </form>
    </div>
  );
};

FormSection.defaultProps = {
  title: "Create Account"
};

export default FormSection;
