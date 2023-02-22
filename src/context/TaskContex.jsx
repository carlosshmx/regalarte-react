import { createContext, useState, useEffect} from "react";
import { tasks as data } from "../data/task";

export const TaskContex = createContext()

export function TaskContexProvider(props) {

  const [tasks, setTasks] = useState([]);

  function createTask(task){
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      desciption: task.description
  }])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  function hideModal() {
    document.getElementById("form-modal").classList.add("invisible");
  }


  useEffect(()=>{
    setTasks(data)
  }, [])

  

  return (
   <TaskContex.Provider value={{
    tasks,
    deleteTask,
    createTask,
    hideModal
   }}>
        {props.children}

   </TaskContex.Provider>
  )
}
