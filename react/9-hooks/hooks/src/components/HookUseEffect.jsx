import { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const [anotherNumber, setAnotherNumber] = useState(10);

  const decreaseAnotherNumber = () => {
    setAnotherNumber(anotherNumber - 1);
  };

  // without dependencies
  useEffect(() => {
    console.log("use effect without dependencies");
  });

  // with empty array
  useEffect(() => {
    console.log("use effect with empty array");
  }, []);

  // with dependencies array
  useEffect(() => {
    console.log("use effect with dependencies array");
  }, [anotherNumber]);

  // clean up
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("use effect clean up");
      setNumber(number * 1);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [number]);

  return (
    <div>
      <h3>useEffect</h3>
      <p>Number: {number}</p>
      <button onClick={increaseNumber}>Increase</button>
      <p>Another number: {anotherNumber}</p>
      <button onClick={decreaseAnotherNumber}>Decrease</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
