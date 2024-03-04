import { useMemo, useState, useEffect } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState("0");

  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Altering premium numbers...");
  }, [premiumNumbers]);

  return (
    <div>
      <h3>useMemo</h3>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>Correct answer</p> : ""}
      <hr />
    </div>
  );
};

export default HookUseMemo;
