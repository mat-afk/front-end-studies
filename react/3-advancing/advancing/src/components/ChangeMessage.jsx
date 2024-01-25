const ChangeMessage = ({ handleMessage }) => {
  const messages = ["Hello", "Bonjour", "Ciao", "Hej", "Konnichiwa", "Namaste"];

  return (
    <div>
      {messages.map((message, i) => (
        <button key={i} onClick={() => handleMessage(message)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default ChangeMessage;
