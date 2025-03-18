import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import { Routes, Route } from 'react-router';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />

        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
