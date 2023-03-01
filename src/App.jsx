import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/navbar";
import SlideShow from "./components/Main/SlideShow";
import MainCardsList from "./components/Main/MainCardsList";

function App() {
  return (
    <div>
      <NavBar/>
      
      <main className="">
       <SlideShow/>
      <MainCardsList/>
      </main>
    </div>
  );
}

export default App;
