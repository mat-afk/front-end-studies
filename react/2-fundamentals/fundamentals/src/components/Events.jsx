const Events = () => {
  const button = document.querySelector("button");
  let count = 0;
  const handleClick = () => {
    button.textContent = `Count ${++count}`;
  };

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
      <button onClick={() => console.log("Thanks for clicking me =)")}>
        Click me
      </button>
    </div>
  );
};

export default Events;
