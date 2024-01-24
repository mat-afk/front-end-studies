const Events = () => {
  const button = document.querySelector("button");
  let count = 0;
  const handleClick = () => {
    button.textContent = `Count ${++count}`;
  };

  // Render
  const renderSomething = (x) => {
    if (x) {
      return <p>Something</p>;
    }
    return <p>Nothing</p>;
  };

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
      <button onClick={() => console.log("Thanks for clicking me =)")}>
        Click me
      </button>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
