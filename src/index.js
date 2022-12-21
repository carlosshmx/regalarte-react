import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Saludo, UserCard } from "./Saludo";
import Product from "./product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Post";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));


function Counter() {
  const [mensaje, setMensaje] = useState('');
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('render')
  }, [counter])

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <button onClick={() => alert('El mensaje es: ' + mensaje)}>
        save
      </button>

      <hr/>

      <h1>Counter: {counter}</h1>
      <button onClick={()=> setCounter(counter + 1)}>Sumar</button>
    </div>
  )

}

root.render(
  <>
    <Counter />
  </>
);
