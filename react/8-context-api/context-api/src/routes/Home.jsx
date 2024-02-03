import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import ChangeCount from "../components/ChangeCount";

const Home = () => {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <ChangeCount />
    </div>
  );
};

export default Home;
