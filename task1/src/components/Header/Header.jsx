import React, { useState } from 'react';
import './Header.css';
import SignUpModal from '../SignUpModal/SignUpModal';

const Header = ({ onCreateAccount }) => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for managing the search input

  const toggleSignUpModal = () => setSignUpOpen((prev) => !prev);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query state
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          {/* Logo Section */}
          <div className="col-auto">
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z4Dr2wIBBLnlud2Q"
              alt="ATG World Logo"
              className="logo"
            />
          </div>

          {/* Search Section */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="search-box d-flex align-items-center">
              <img
                src="https://dashboard.codeparrot.ai/api/assets/Z4Dr2wIBBLnlud2R"
                alt="Search"
                className="search-icon"
              />
              <input
                type="text"
                className="search-input"
                placeholder="Search for your favorite groups in ATG"
                value={searchQuery}
                onChange={handleSearchChange} // Update search query on input change
              />
            </div>
          </div>

          {/* Account Section */}
          <div className="col-auto">
            <button className="create-account" onClick={toggleSignUpModal}>
              Create account. It’s free!
              <img
                src="https://dashboard.codeparrot.ai/api/assets/Z4Dr2wIBBLnlud2S"
                alt="Dropdown Icon"
                className="dropdown-icon"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <SignUpModal isOpen={isSignUpOpen} onClose={toggleSignUpModal} />
    </header>
  );
};

Header.defaultProps = {
  onCreateAccount: () => {},
};

export default Header;
