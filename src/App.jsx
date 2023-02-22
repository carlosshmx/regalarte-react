import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";
import NavBar from "./components/navbar/navbar";
import SlideShow from "./components/main/SlideShow";



function App() {
 
  return (
    <>
     <NavBar/>
     <main className="bg-zinc-900 h-screen relative">
      <SlideShow/>
     
     <div className="container mx-auto p-10">
     <h1  className='text-4xl font-bold text-white mb-3 text-center'>Lista de tareas</h1>
     <NewTask/>
     <TaskForm/>
     <TaskList/>
     </div>
     
   </main>
    </>
 
  );
}

export default App;
