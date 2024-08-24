import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ isLoggedIn }) {
  return (
    <nav>
      <Link to="/" className="nav-logo"><img src='styles/Logo.png'></img></Link> {/* Your logo or brand name */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop All</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          {isLoggedIn ? (
            <Link to="/account">Account</Link>
          ) : (
            <Link to="/login">Login/Signup</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
