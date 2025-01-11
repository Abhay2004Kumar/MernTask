import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";

const LSidebar = ({ onLocationChange }) => {
  const recommendedGroups = [
    { name: "Leisure", image: "https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3K" },
    { name: "Activism", image: "https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3L" },
    { name: "MBA", image: "https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3M" },
    { name: "Philosophy", image: "https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3N" },
  ];

  return (
    <div className="sidebar bg-light p-3">
      {/* Logo */}
      <div className="logo-container mb-4 text-center">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3O"
          alt="Logo"
          className="logo img-fluid"
        />
      </div>

      {/* Location Input */}
      <div className="location-input d-flex align-items-center mb-4">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z4D1eQIBBLnlud3O"
          alt="Location Icon"
          className="location-icon me-2"
        />
        <input
          type="text"
          placeholder="Enter your location"
          onChange={(e) => onLocationChange?.(e.target.value)}
          className="form-control location-field"
        />
      </div>

      {/* Recommended Groups */}
      <div className="recommended-section">
        <h2 className="section-title text-uppercase text-muted small mb-3">
          Recommended Groups
        </h2>
        <div className="groups-list">
          {recommendedGroups.map((group, index) => (
            <div
              key={index}
              className="group-item d-flex align-items-center justify-content-between mb-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={group.image}
                  alt={group.name}
                  className="group-image rounded me-3"
                />
                <span className="group-name text-dark">{group.name}</span>
              </div>
              <button className="btn btn-outline-primary btn-sm">Follow</button>
            </div>
          ))}
        </div>
        <div className="text-end see-more text-primary mt-3">See More...</div>
      </div>
    </div>
  );
};

LSidebar.defaultProps = {
  onLocationChange: () => {},
};

export default LSidebar;
