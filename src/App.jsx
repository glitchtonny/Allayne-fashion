import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductForm from './components/product'  
import UserDashboard from './components/UserDashboard'
import ProductDetail from './components/ProductDetail'
import Cartpage from './components/cartpage'

function App() {
  

  return (
   <Router>
   <Routes>
    <Route path="/product" element={<ProductForm />} />
    <Route path="/UserDashboard" element={<UserDashboard />} />
    <Route path="/ProductDetail" element={<ProductDetail />} />
    <Route path="/cartpage" element={<Cartpage />} />
    
    

   </Routes>
   </Router> 
  )
}

export default App
