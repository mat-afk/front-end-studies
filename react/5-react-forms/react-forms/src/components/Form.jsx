import "./Form.css";
import { useState } from "react";

const Form = ({ userName, userEmail }) => {
  // Data management with useState
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState("");

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: " + name);
    console.log("E-mail: " + email);
    console.log("Bio: " + bio);

    // Reset form
    setName("");
    setEmail("");
    setBio("");
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
        {/* Textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Enter your profile description"
            onChange={(e) => setBio(e.target.value)}
            value={bio || ""}
          ></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
