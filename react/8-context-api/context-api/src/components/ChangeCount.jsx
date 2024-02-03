import { useCounter } from "../hooks/useCounter";

const ChangeCount = () => {
  const { count, setCount } = useCounter();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ChangeCount;
