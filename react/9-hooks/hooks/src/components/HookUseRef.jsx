import { useRef, useState, useEffect } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // useRef and DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setText("");

    inputRef.current.focus();
  };

  return (
    <div>
      <h3>useRef</h3>
      <p>The component renderized: {numberRef.current}</p>
      <p>First counter: {firstCounter}</p>
      <button onClick={() => setFirstCounter(firstCounter + 1)}>Count</button>
      <p>Second counter: {secondCounter}</p>
      <button onClick={() => setSecondCounter(secondCounter + 1)}>Count</button>

      <p>Focus:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input type="submit" value="Submit" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
