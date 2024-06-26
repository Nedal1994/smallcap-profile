import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/smallcap.png'; // Your logo file
import profileIcon from '../assets/images/profile-icon.png'; // Your profile icon file

const Header = ({ isLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <div className="header-flex">
      <header>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Small Cap Token Logo" className="logo" />
          </Link>
          <h1></h1>
        </div>
        <nav>
          <ul className="left-nav">
            <li className="dropdown">
              <span className="dropbtn">Menu</span>
              <div className="dropdown-content">
                <Link to="/about">About</Link>
                <Link to="/roadmap">Roadmap</Link>
                <Link to="/tokenomics">Tokenomics</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </li>
          </ul>
          <div className='search-bar'>
            <form className="search-container" onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <ul className="right-nav">
            {isLoggedIn ? (
              <li className="profile-icon">
                <img src={profileIcon} alt="Profile" />
                <span className="dropbtn">Profile</span>
                <div className="profile-menu">
                  <Link to="/profile">Profile</Link>
                  <Link to="/subscription">Subscription</Link>
                </div>
              </li>
            ) : (
              <li className="dropdown">
                <span className="dropbtn">Login / Register</span>
                <div className="dropdown-content">
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
                </div>
              </li>
            )}
          </ul>
        </nav>
        <div className="header-buttons">
          <Link to="/dapp" className="dapp-button">Analyze Now</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
