import { useTitleColor } from "../hooks/useTitleColor";

const ChangeTitleColor = () => {
  const { dispatch } = useTitleColor();

  const setColorToRed = () => {
    dispatch({ type: "RED" });
  };

  const setColorToBlue = () => {
    dispatch({ type: "BLUE" });
  };

  return (
    <div>
      <button onClick={() => setColorToRed()}>Red</button>
      <button onClick={() => setColorToBlue()}>Blue</button>
    </div>
  );
};

export default ChangeTitleColor;
