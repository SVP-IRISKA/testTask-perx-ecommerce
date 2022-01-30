import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from "./components/basket/basket";
import Products from "./components/products/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
