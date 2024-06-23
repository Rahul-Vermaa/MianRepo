import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <div  className="footer-wrapper" >
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <p className="foot">Our templates enable you to showcase your unique brand identity, ensuring that every visitor is inspired to take action.</p>
        <div className="footer-icons">
          <BsTwitter className="twitter"/>
          <SiLinkedin className="linkdln"/>
          <BsYoutube className="youtube"/>
          <FaFacebookF className="facebook"/>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Features</span>
          <span>Page builder</span>
          <span>Theme options
          </span>
          <span>Theme builder</span>
          <span>Template library</span>
      
        </div>
        <div className="footer-section-columns">
          <span>Resources
</span>
          <span>Support center</span>
          <span>
          Documentation</span>
          <span>Community</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
    </div>
      </div>
    </div>
  );
};

export default Footer;