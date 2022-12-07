import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo, UserCard } from "./saludo";
import Product from "./product";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Button text="Click me"/>
    <Button text="Buy"/>
    <Button text="Sell" name="carlos"/>

    {/* <UserCard
      name="Carlos"
      ammont={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 main", city: "New York" }}
      greet={function(){alert("Hello")}}
    />
    <UserCard
      name="Jose"
      ammont={2000}
      married={false}
      points={[100, 20]}
      address={{ street: "jar 1486", city: "Tokyo" }}
      greet={function(){alert("Hello")}}
    /> */}
  </>
);
