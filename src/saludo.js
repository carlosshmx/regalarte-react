export function Saludo({ title, name = "user" }) {
  console.log(title, name);
  return (
    <h1>
      {title} dice {name}
    </h1>
  );
}

export function UserCard({name, ammont, married, address, greet}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>💰{ammont}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
