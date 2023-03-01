import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";
import NavBar from "./components/Navbar/navbar";
import Home from "./components/Main/Home";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import SlideShow from "./components/Main/SlideShow";

function App() {
  return (
    <div>
      <NavBar/>
      
      <main className="">
       <SlideShow/>
      
      </main>
    </div>
  );
}

export default App;
