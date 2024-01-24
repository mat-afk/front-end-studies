const TemplateExpression = () => {
  const user = {
    name: "Markiplier",
    age: 31,
  };
  return (
    <div>
      <p>The sum is {2 + 2}</p>
      <p>
        Welcome, my name is {user.name}. I am {user.age} years old.
      </p>
    </div>
  );
};

export default TemplateExpression;
