// src/components/ServiceProviderDashboard.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBillWave, faComments, faCog } from '@fortawesome/free-solid-svg-icons';
import './ServiceProviderDashboard.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const ServiceProviderDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [professionals, setProfessionals] = useState([]);
  const [showFindButton, setShowFindButton] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyServices = [
      {
        id: 1,
        title: 'Earnings',
        subServices: [],
      },
      {
        id: 2,
        title: 'Past-Work',
        subServices: [],
      },
      {
        id: 3,
        title: 'Upcoming-Work',
        subServices: [],
      },
      {
        id: 4,
        title: 'New Request',
        subServices: [],
      },
    ];
    setServices(dummyServices);
  }, []);

  const handleJobClick = (serviceId) => {
    setSelectedServiceId(serviceId);
    setShowFindButton(true);
  };

  const handleViewJobDetails = () => {
    const fetchedProfessionals = [
      { id: 1, name: 'John Doe', rating: '4.9' },
      { id: 2, name: 'Jane Smith', rating: '4.7' },
    ];
    setProfessionals(fetchedProfessionals);
  };

  const toggleProfileDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleLogoutClick = () => {
    // Clear user data (like tokens) here
    // For example: localStorage.removeItem('token');

    // Redirect to the home screen
    navigate('/');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="service-provider-dashboard">
      <header className="header">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <span className="logo-text">Home Revive</span>
        </div>
        <div className="nav">
          <div className="nav-item" onClick={() => navigate('/')}>Home</div>
          <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
          <div className="profile" onClick={toggleProfileDropdown}>
            <img src="https://via.placeholder.com/40" alt="Profile" />
            <span className="profile-name">My Profile</span>
          </div>
          {showDropdown && (
            <div className="profile-dropdown active" ref={dropdownRef}>
              <ul>
                <li>View Profile</li>
                <li>Account Settings</li>
                <li onClick={handleLogoutClick}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <div className="service-selection-buttons">
        <h2>Your Jobs</h2>
        <div className="services-buttons">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <button
                className={`service-button ${selectedServiceId === service.id ? 'active' : ''}`}
                onClick={() => handleJobClick(service.id)}
              >
                {service.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedServiceId && (
        <div className="sub-services-list">
          <h3>Available Information:</h3>
          {services
            .find(service => service.id === selectedServiceId)
            .subServices.map(subService => (
              <div key={subService.id} className="sub-service-card">
                <h4>{subService.title}</h4>
              </div>
            ))}
        </div>
      )}

      {showFindButton && (
        <div className="View Details">
          <button onClick={handleViewJobDetails} className="View-Details">View Details</button>
        </div>
      )}
    </div>
  );
};

export default ServiceProviderDashboard;
