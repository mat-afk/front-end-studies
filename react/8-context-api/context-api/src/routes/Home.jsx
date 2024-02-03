import { useCounter } from "../hooks/useCounter";

import ChangeCount from "../components/ChangeCount";

const Home = () => {
  const { count } = useCounter();

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <ChangeCount />
    </div>
  );
};

export default Home;
