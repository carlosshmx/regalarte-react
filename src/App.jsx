import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/navbar";
import SlideShow from "./components/Main/SlideShow";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import Cart from "./components/Cart/Cart";
import Categories from "./components/Main/Categories";
import ProductsMain from "./components/ProductList/ProductsMain";
import Home from "./components/Main/Home";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<ProductsMain/>}/>
          <Route path="/user/:userId" element={<UserPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cakes" element={<ProductsMain/>}/>
          <Route path="/donutscupcakes" element={<ProductsMain/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
