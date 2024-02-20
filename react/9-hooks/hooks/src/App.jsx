import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
