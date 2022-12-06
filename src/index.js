import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo, UserCard } from "./saludo";
import Product from "./product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="carlos"
      ammont={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 main", city: "New York" }}
    />
  </>
);
