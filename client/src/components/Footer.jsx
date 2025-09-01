import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a 
          href="https://github.com/knnthdvlpr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub size={28} />
        </a>

        <a 
          href="https://linkedin.com/in/kennacebuche" 
          target="_blank" 
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
      <h3 className="footer-text">@knnthdvlpr 2025 || All Right Reserved</h3>
    </footer>
  );
};

export default Footer;
