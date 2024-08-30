import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ isLoggedIn }) {
  // Retrieve the user data from localStorage
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null;

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img src="src/images/allayne0-removebg-preview.png" alt="Logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop All</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          {isLoggedIn ? (
            <Link to={user?.role === 'admin' ? '/AdminDashboard' : '/UserDashboard'}>
              <img 
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
                alt="User Dashboard" 
                className="user-icon" 
              />
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
