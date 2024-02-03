import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCount from "../components/ChangeCount";

const Contact = () => {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h1>Contact</h1>
      <p>Count: {count}</p>
      <ChangeCount />
    </div>
  );
};

export default Contact;
