import "./Form.css";
import { useState } from "react";

const Form = ({ userName, userEmail }) => {
  // Data management with useState
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

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
            value={name || ""}
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
              value={email || ""}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
