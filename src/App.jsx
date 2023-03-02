import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/navbar";
import SlideShow from "./components/Main/SlideShow";
import MainCardsList from "./components/Main/MainCardsList";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/user/:userId" element={<UserPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
