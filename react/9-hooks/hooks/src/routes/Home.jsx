import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";

const Home = () => {
  const value = useContext(SomeContext);

  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h3>useContext</h3>
      <p>Context value: {value}</p>
      <hr />
      <HookUseRef />
    </div>
  );
};

export default Home;
