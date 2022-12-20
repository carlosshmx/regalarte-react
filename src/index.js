import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo, UserCard } from "./Saludo";
import Product from "./product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => { console.log(e.target.value) }

const users = [
  {
    id: 1,
    name: "Carlos Colmenares",
    image: "https://robohash.org/user1"
  },
  {
    id: 2,
    name: "Henry Bracho",
    image: "https://robohash.org/user2"
  },
  {
    id: 2,
    name: "Mario Grimaldi",
    image: "https://robohash.org/user3"
  }
]

root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1 >{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
