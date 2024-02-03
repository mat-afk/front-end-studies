import { useCounter } from "../hooks/useCounter";

import ChangeCount from "../components/ChangeCount";

const Contact = () => {
  const { count } = useCounter();

  return (
    <div>
      <h1>Contact</h1>
      <p>Count: {count}</p>
      <ChangeCount />
    </div>
  );
};

export default Contact;
