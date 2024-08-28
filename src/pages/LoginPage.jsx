import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState(''); // Changed to username
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username, // Send username instead of email
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token and user info, if needed
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('user', JSON.stringify({ 
          id: data.id, 
          username: data.username,
          email: data.email, 
          phoneNumber: data.phoneNumber, 
          role: data.role
         }));
        
        // Redirect to the account page upon successful login
        navigate('/userDashboard');
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text" // Changed to text
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
        <div className="makeblack">
          Don't have an account?{' '}
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
