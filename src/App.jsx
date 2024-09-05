
import React, { useState , useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import PrivateRoute from './auth/PrivateRoute';
import ShopAll from './Components/ShopAll';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountPage from './pages/AccountPage';
import HomePage from './Components/HomePage';
// import ProductForm from './pages/ProductForm'  
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard';
// import Cartpage from './pages/cartpage'
// import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ProductForm from './pages/ProductForm';
import './App.css';
import Footer from './pages/Footer'
import Cart from './Components/Cart';
import AdminProductList from './Components/AdminProductList';
import EditProduct from './Components/EditProduct';
import Payment from './Components/Payment';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log('User in localStorage:', user);
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
                <ShopAll />

            </PrivateRoute>
            } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />  
          {/* <Route path="/cartpage" element={<Cartpage />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin-products" element={<AdminProductList />} />
          <Route path="/edit-product/:productId" element={<EditProduct />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

