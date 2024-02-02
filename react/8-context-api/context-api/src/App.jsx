import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Context API</h1>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
