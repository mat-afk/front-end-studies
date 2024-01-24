import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Markiplier", "Jacksepticeye", "Pewdiepie"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Markiplier", age: 29 },
    { id: 2, name: "Jacksepticeye", age: 28 },
    { id: 3, name: "Pewdiepie", age: 31 },
  ]);

  const deleteRandomUser = () => {
    const randomId = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== randomId));
  };

  return (
    <div>
      {/* List rendering without keys */}
      <h5>without keys</h5>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* List rendering with keys */}
      <h5>with keys</h5>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Hello, my name is {user.name} and I am {user.age} years old
          </li>
        ))}
      </ul>

      {/* Previous state */}
      <button onClick={deleteRandomUser}>Delete random user</button>
    </div>
  );
};

export default ListRender;
