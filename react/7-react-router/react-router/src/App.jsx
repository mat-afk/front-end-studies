import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <p>Header</p>
        <Navbar />
        <Outlet />
        <p>Footer</p>
      </div>
    </>
  );
}

export default App;
