import { useContext, useState } from "react";
import { TaskContex } from "../context/TaskContex";


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask, hideModal } = useContext(TaskContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
    hideModal();
  };



  return (
    <div
      className="h-screen w-screen top-0 left-0 absolute invisible bg-neutral-900/50 "
      id="form-modal"
    >
      <div className="mt-20 mx-auto w-1/2">
        <form className="bg-slate-800 p-6 relative" onSubmit={handleSubmit}>
          <button type="button" className="bg-red-500 px-3 py-1 absolute right-6 text-white" onClick={hideModal}>
            X
          </button>
          <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
          <input
            className="bg-slate-300 p-3 w-full mb-2"
            placeholder="Escribe tu tarea"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
          />
          <textarea
            className="bg-slate-300 p-3 w-full mb-2"
            placeholder="Escribe la descipcion de la tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <button className="bg-indigo-500 px-3 py-1 text-white">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
