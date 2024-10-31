// src/components/FAQsCustomers.js

import React from 'react';
import { Link } from 'react-router-dom';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const FAQsCustomers = () => {
  return (
    <div className="faqs-container">
      {/* Header */}
      <header className="navbar">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo large" />
          <div className="description">
            <h1>Home Revive</h1>
            <p>Connecting Local Professionals with Customers for Fast and Reliable Home Repairs</p>
          </div>
        </div>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/login-signup" className="nav-link">Login/Signup</Link>
        </nav>
      </header>

      {/* FAQ Content */}
      <section className="faq-content" style={{ padding: '80px 10px',  margin: '0 auto' }}>
        <h2>FAQs for Customers</h2>
        <div className="faq-item" style={{ marginBottom: '20px' }}>
          <h3>How do I book a service?</h3>
          <p>You can book a service by searching for the service provider in your area and clicking the 'Book Now' button next to the provider you want.</p>
        </div>
        <div className="faq-item" style={{ marginBottom: '20px' }}>
          <h3>What services are available?</h3>
          <p>We provide a variety of home repair services including plumbing, carpentry, electrical work, and electronics repair.</p>
        </div>
        <div className="faq-item" style={{ marginBottom: '20px' }}>
          <h3>Can I cancel a booking?</h3>
          <p>Yes, you can cancel a booking from your account dashboard before the service provider has confirmed the job.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '20px 0'}}>
        <div className="footer-links">
          <Link to="/FAQSCustomers">FAQs for Customers</Link>
          <Link to="/FAQsProviders">FAQs for Providers</Link>
          <Link to="/Terms">Terms of Service</Link>
          <Link to="/Privacy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default FAQsCustomers;
