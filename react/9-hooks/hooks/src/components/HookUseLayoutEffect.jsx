import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Some name...");

  useEffect(() => {
    console.log("useEffect: 2");
    setName("Changing some name again...");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect: 1");
    setName("Changing some name...");
  }, []);

  return (
    <div>
      <h3>useLayoutEffect</h3>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
