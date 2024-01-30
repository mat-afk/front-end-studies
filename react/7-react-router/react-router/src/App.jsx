import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <p>Header</p>
        <Navbar />
        <SearchForm />
        <Outlet />
        <p>Footer</p>
      </div>
    </>
  );
}

export default App;
