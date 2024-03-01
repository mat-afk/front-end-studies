import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import { HookUseContext } from "../src/components/HookUseContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HookUseContext>
      <RouterProvider router={router} />
    </HookUseContext>
  </React.StrictMode>
);
