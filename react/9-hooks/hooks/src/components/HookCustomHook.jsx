import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustomHook = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h3>Custom Hook</h3>
      <p>Current: {number}</p>
      <p>Previous: {previousValue}</p>
      <button onClick={() => setNumber(Math.random)}>Change!</button>
      <hr />
    </div>
  );
};

export default HookCustomHook;
