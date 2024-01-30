import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <p>Header</p>
        <p>Navrar</p>
        <Outlet />
        <p>Footer</p>
      </div>
    </>
  );
}

export default App;
