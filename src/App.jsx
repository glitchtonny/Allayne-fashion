import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import ShopAll from './Components/ShopAll';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
// import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ProductForm from './pages/ProductForm';
import './App.css';
import Footer from './pages/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/product" element={<ProductForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

