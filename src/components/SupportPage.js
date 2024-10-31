// src/components/SupportPage.js

import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
import { getAuth, signOut } from "firebase/auth"; // Import Firebase auth and signOut function
// import './SupportPage.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';
import userProfile from '../assets/user-placeholder.png.webp';

const SupportPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("User signed out successfully.");
      navigate('/'); // Navigate to home after logout
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <div className="support-page">
      <header className="navbar">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <div className="description">
            <h1>Home Revive</h1>
            <p>Connecting Local Professionals with Customers for Fast and Reliable Home Repairs</p>
          </div>
        </div>
        <div className="nav">
          <div className="nav-item" onClick={() => navigate('/customer-dashboard')}>Home</div>
          <div className="nav-item" onClick={() => navigate('/support')}>Support</div>
          <div className="profile" onClick={handleLogout}>
            <img src={userProfile} alt="Profile" />
            <span className="profile-name">My Profile</span>
          </div>
        </div>
      </header>

      <div className="support-content" style={{ padding: '80px 20px',  }}>
        <h2>Customer Support</h2>
        <p>If you need assistance with our services or have any inquiries, please refer to the following resources:</p>
        
        <h3>Frequently Asked Questions (FAQs)</h3>
        <ul>
          <li><Link to="/FAQsCustomers">FAQs for Customers</Link></li>
          <li><Link to="/FAQsProviders">FAQs for Providers</Link></li>
        </ul>

        <h3>Contact Us</h3>
        <p>If your issue isn't resolved through our FAQs, you can contact our support team:</p>
        <p>Email: <a href="mailto:support@homerevive.com">support@homerevive.com</a></p>
        <p>Phone: +91 123 456 7890</p>

        <h3>Live Chat</h3>
        <p>For immediate assistance, you can use our live chat feature available on the website during business hours.</p>
        
        <h3>Business Hours</h3>
        <p>Our customer support team is available:</p>
        <p>Monday to Friday: 9 AM to 6 PM</p>
        <p>Saturday: 10 AM to 4 PM</p>
        <p>Sunday: Closed</p>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-links">
          <Link to="/fAQSCustomers">FAQs for Customers</Link>
          <Link to="/FAQsProviders">FAQs for Providers</Link>
          <Link to="/Terms">Terms of Service</Link> 
          <Link to="/Privacy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};


export default SupportPage;
