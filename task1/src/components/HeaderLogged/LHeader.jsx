import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LHeader.css';

const LHeader = ({ logo, searchPlaceholder, userProfile }) => {
  return (
    <header className="header">
      <div className="container-fluid">
        {/* Logo at Top Left */}
        <div className="row align-items-center py-2">
          <div className="col-12 col-md-2 d-flex justify-content-md-start justify-content-center">
            <img src={logo} alt="ATG World" className="logo" />
          </div>

          {/* Search and User Profile Section */}
          <div className="col-12 col-md-6 d-flex justify-content-md-center justify-content-center mt-md-0 mt-3">
            <div className="search-box d-flex align-items-center">
              <img
                src="https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3E"
                alt="Search"
                className="search-icon"
              />
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="search-input"
              />
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-center mt-md-0 mt-3">
            <div className="user-profile d-flex align-items-center">
              <img src={userProfile} alt="User" className="profile-image" />
              <span className="username">Siddharth Goyal</span>
              <img
                src="https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3G"
                alt="Dropdown"
                className="dropdown-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

LHeader.defaultProps = {
  logo: "https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3D",
  searchPlaceholder: "Search for your favorite groups in ATG",
  userProfile: "https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3F",
};

export default LHeader;
