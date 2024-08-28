
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import ShopAll from './Components/ShopAll';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
// import ProductForm from './pages/ProductForm'  
import UserDashboard from './pages/UserDashboard'
import Cartpage from './pages/cartpage'
// import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ProductForm from './pages/ProductForm';
import './App.css';
import Footer from './pages/Footer'
import Cart from './Components/Cart';
import Sidebar from './Components/Admin/Sidebar';
import Orders from './Components/Admin/AdminOrders';
import Products from './Components/Admin/AdminProduct';
import AdminProfile from './Components/Admin/AdminProfile';

function App() {
  return (

    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopAll />} />
          {/* <Route path="/product" element={<ProductForm />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/admin/sidebar" element={<Sidebar />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/profile" element={<AdminProfile />} /> */}
        </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

