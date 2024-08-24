import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopAll from './Components/ShopAll';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shop" element={<ShopAll />} />
      </Routes>
    </Router>
  );
}

export default App;
