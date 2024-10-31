// src/components/FAQsProviders.js

import React from 'react';
import { Link } from 'react-router-dom';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

const FAQsProviders = () => {
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
      <section className="faq-content" style={{ padding: '80px 20px',  }}>
        <h2>FAQs for Providers</h2>
        <div className="faq-item" style={{ marginBottom: '20px' }}>
          <h3>How do I register as a service provider?</h3>
          <p>You can register by clicking on the 'Join Us' button and filling out the registration form with your service details.</p>
        </div>
        <div className="faq-item" style={{ marginBottom: '20px' }}>
          <h3>How do I receive job requests?</h3>
          <p>Once registered, customers in your area can find you and send job requests directly through the platform.</p>
        </div>
        <div className="faq-item" style={{ marginBottom: '20px' }}>
          <h3>Can I set my own availability?</h3>
          <p>Yes, you can manage your availability through your account settings.</p>
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

export default FAQsProviders;
