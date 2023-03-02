import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/navbar";
import SlideShow from "./components/Main/SlideShow";
import MainCardsList from "./components/Main/MainCardsList";
import ProductOverview from "./components/ProductOverview/ProductOverview";

function App() {
  return (
    <div>
      <NavBar/>
      
      <main className="">
       <SlideShow/>
      <MainCardsList/>
      <ProductOverview/>
      </main>
    </div>
  );
}

export default App;
