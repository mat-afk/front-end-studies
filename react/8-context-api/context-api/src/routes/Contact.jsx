import { useCounter } from "../hooks/useCounter";
import { useTitleColor } from "../hooks/useTitleColor";

import ChangeCount from "../components/ChangeCount";
import ChangeTitleColor from "../components/ChangeTitleColor";

const Contact = () => {
  const { count } = useCounter();
  const { color } = useTitleColor();

  return (
    <div>
      <h1 style={{ color: color }}>Contact</h1>
      <p>Count: {count}</p>
      <ChangeCount />
      <ChangeTitleColor />
    </div>
  );
};

export default Contact;
