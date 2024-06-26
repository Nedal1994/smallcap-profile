import React from 'react';
import './Footer.css';
import { FaArrowUp } from 'react-icons/fa'; // Import the arrow up icon from react-icons
import logo from '../assets/images/3NSlogo.png';
import Twitter from '../assets/images/Twitter.png';
import Facebook from '../assets/images/Facebook.png';
import LinkedIn from '../assets/images/In.png';
import Instagram from '../assets/images/Insta.png';
import Telegram from '../assets/images/Telegram.png';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="logo-column">
          <img src={logo} alt="3NS Logo" className="logo" />
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/roadmap">Roadmap</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="/tokenomics">Tokenomics</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>info@smallcap.com</li>
            <div className="Socials-flex"> 
              {/* -------------> ENTER THE CORRESPONDING SOCIAL MEDIA PROFILE LINKS <------------- */}
              <li><a href="https://x.com/smallcapai" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter-logo" className="Social-logo" /></a></li>
              <li><a href="https://facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook-logo" className="Social-logo" /></a></li>
              <li><a href="https://instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram-logo" className="Social-logo" /></a></li>
              <li><a href="https://www.linkedin.com/company/smallcapai/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn-logo" className="Social-logo" /></a></li>
              <div className='telegram-logo'>
                <li><a href="https://t.me/smallcapai" target="_blank" rel="noopener noreferrer"><img src={Telegram} alt="Telegram-logo" className="Social-logo" /></a></li>
              </div>
            </div>
          </ul>
        </div>

        <div className="Form-footer">
          <h4>Subscribe</h4>
          <form action="/api/subscribe" method="POST">
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Small Cap Token. All rights reserved.</p>
      </div>
      {/* Move to top arrow */}
      <a href="#" onClick={handleScrollToTop} className="move-to-top">
        <FaArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
