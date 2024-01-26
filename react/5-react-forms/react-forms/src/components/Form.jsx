import "./Form.css";
import { useState } from "react";

const Form = ({ userName, userEmail }) => {
  // Data management with useState
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: " + name);
    console.log("E-mail: " + email);
    console.log("Bio: " + bio);
    console.log("Role: " + role);

    // Reset form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
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
        {/* Select */}
        <label>
          <span>Role:</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
