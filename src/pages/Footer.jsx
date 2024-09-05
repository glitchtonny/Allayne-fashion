
import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>DASHBOARDS</h4>
          <ul>
            <li><a href="/seller">Seller</a></li>
            <li><a href="/admin/dashboard">Admin</a></li>
            <li><a href="/buyer">Buyer</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns & Refunds</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        {/* <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@onlineshop.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 1234 Market St, Suite 100, San Francisco, CA 94103</p>
        </div> */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Online Shop. All Rights Reserved.</p>
        <ul className="footer-bottom-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
