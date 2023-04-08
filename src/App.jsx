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
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <BrowserRouter>
      
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:prodId" element={<ProductOverview/>}/>
          <Route path="/user/:userId" element={<UserPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cakes" element={<ProductsMain/>}/>
          <Route path="/donutscupcakes" element={<ProductsMain/>}/>
          <Route path="/pasapalos" element={<ProductsMain/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
