
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import ShopAll from './Components/ShopAll';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import ProductForm from './pages/product'  
import UserDashboard from './pages/UserDashboard'
import Cartpage from './pages/cartpage'
// import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ProductForm from './pages/ProductForm';
import './App.css';
import Footer from './pages/Footer'

function App() {
  return (

    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/product" element={<ProductForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/cartpage" element={<Cartpage />} />
        </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

