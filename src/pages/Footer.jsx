import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <ul className="footer-vertical-links">
            <li><a href="/about">Denims</a></li>
            <li><a href="/contact">Tops</a></li>
            <li><a href="/privacy">Dresses</a></li>
            <li><a href="/terms">Matching Sets</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="footer-horizontal-links">
            <li><a href="/facebook">Facebook</a></li>
            <li><a href="/twitter">Twitter</a></li>
            <li><a href="/instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
