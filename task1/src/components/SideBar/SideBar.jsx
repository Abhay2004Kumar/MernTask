import React from 'react';
import './Sidebar.css';

const Sidebar = ({ location = 'Noida, India' }) => {
  return (
    <div className="sidebar p-3">
      {/* Action Buttons Section (Horizontal Layout) */}
      <div className="d-flex gap-3 mb-4">
        <button className="write-post d-flex align-items-center justify-content-between">
          Write a Post
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2j"
            alt="dropdown"
            className="dropdown-icon"
          />
        </button>

        <button className="join-group d-flex align-items-center gap-2">
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2k"
            alt="group"
            className="group-icon"
          />
          Join Group
        </button>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <div className="location-header d-flex align-items-center gap-2 mb-2">
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2l"
            alt="location"
            className="location-icon"
          />
          <span className="location-text flex-grow-1">{location}</span>
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2m"
            alt="edit"
            className="edit-icon"
          />
        </div>
        <div className="location-divider mb-2"></div>
        <div className="location-info d-flex gap-2 align-items-start">
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z4DsEwIBBLnlud2n"
            alt="info"
            className="info-icon"
          />
          <p className="info-text">
            Your location will help us serve better and extend a personalised experience.
          </p>
        </div>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  location: 'Noida, India',
};

export default Sidebar;
