// Footer.js

import React from "react";
import "./Footer.css"; // Make sure the path to your CSS file is correct
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          {/* Apply styling directly to the Link component */}
          <h4>
            <Link to="/about" className="aboutlink">About Us</Link>
          </h4>
          <p>A brief description about your company or project.</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/harshlancer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            {/* Add other social media links here */}
            <li>
              <a
                href="https://twitter.com/cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
