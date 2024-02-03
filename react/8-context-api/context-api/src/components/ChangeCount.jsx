import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCount = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ChangeCount;
