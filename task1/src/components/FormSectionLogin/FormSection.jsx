import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import { useNavigate } from 'react-router-dom'; // Import navigate from react-router-dom
import './FormSection.css';

const LoginForm = ({ title = "Login" }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    try {
      // Send data to the backend API using axios
      const response = await axios.post('http://localhost:5000/api/v1/users/login', formData);

      if (response.status === 200) {
        // Assume the response contains the JWT tokens in the response body
        const { accessToken, refreshToken } = response.data;

        // You can store the tokens in localStorage or cookies for later use
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        alert("Login successful!");
        navigate('/logged-in'); // Navigate to the logged-in page upon successful login
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="form-section">
      <h1 className="form-title">{title}</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="login-btn">
          Login
        </button>

        <button type="button" className="social-btn facebook-btn">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4D_CgIBBLnlud4G" alt="Facebook" />
          <span>Login with Facebook</span>
        </button>

        <button type="button" className="social-btn google-btn">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4D_CgIBBLnlud4H" alt="Google" />
          <span>Login with Google</span>
        </button>
      </form>
    </div>
  );
};

LoginForm.defaultProps = {
  onSubmit: () => {},
  title: "Login"
};

export default LoginForm;
