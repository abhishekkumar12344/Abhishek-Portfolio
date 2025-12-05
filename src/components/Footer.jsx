import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-about">
          <h2>Abhishek Raj</h2>
          <p>
            Creative Frontend Developer crafting clean, modern, and responsive
            web applications using React, HTML, CSS, and JavaScript.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="mailto:youremail@example.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com/yourinstagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Abhishek Raj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
