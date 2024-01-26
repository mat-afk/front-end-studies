import "./Form.css";
import { useState } from "react";

const Form = () => {
  // Data management with useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: " + name);
    console.log("E-mail: " + email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Inputs inside labels */}
        <div>
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
