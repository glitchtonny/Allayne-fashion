import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductForm from './pages/product'  
import UserDashboard from './pages/UserDashboard'
import Cartpage from './pages/cartpage'

function App() {
  

  return (
   <Router>
   <Routes>
    <Route path="/productform" element={<ProductForm />} />
    <Route path="/UserDashboard" element={<UserDashboard />} />
    <Route path="/cartpage" element={<Cartpage />} />
    
    

   </Routes>
   </Router> 
  )
}

export default App
