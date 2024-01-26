import "./Form.css";
import { useState } from "react";

const Form = () => {
  // Data management with useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name, email);

  return (
    <div>
      <form>
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
