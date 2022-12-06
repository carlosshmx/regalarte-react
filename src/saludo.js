export function Saludo({ title, name = "user" }) {
  console.log(title, name);
  return (
    <h1>
      {title} dice {name}
    </h1>
  );
}

export function UserCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>💰{props.ammont}</p>
      <p>{props.married ? "Married" : "Single"}</p>
    </div>
  );
}
