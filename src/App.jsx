import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";
import NavBar from "./components/navbar/navbar";
import Home from "./components/main/Home";

function App() {
  return (
    <div>
      <NavBar />
      <main className="bg-zinc-900 h-full relative">
        <Home/>
      </main>
    </div>
  );
}

export default App;
