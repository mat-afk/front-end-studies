import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItems = useCallback(() => {
    return ["chocolate", "milk", "marshmallow"];
  }, []);

  return (
    <div>
      <h3>useCallback</h3>
      <List getItems={getItems} />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <hr />
    </div>
  );
};

export default HookUseCallback;
