import { useState } from "react";

const HookUseState = () => {
  const [name, setName] = useState("Markiplier");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
  }

  return (
    <div>
      <h3>useState</h3>
      <p>{name}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
    </div>
  );
};

export default HookUseState;
