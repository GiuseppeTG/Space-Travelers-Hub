import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import planetLogo from '../../images/planetLogo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-and-text">
        <img src={planetLogo} alt="planet logo" />
        <p><Link to="/" className="logo-text">Space Travelers&apos; Hub</Link></p>
      </div>
      <ul className="links-list">
        <li><Link to="/" className="link">ROCKETS</Link></li>
        <li><Link to="/categories" className="link">MISSIONS</Link></li>
        <li><Link to="/profile" className="link" id="my-profile">MY PROFILE</Link></li>
      </ul>
    </nav>
  );
}
