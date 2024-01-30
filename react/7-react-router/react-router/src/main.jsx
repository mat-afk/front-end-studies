import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./routes/Contact.jsx";

// Error page
import ErrorPage from "./routes/ErrorPage.jsx";

import "./index.css";

// Router config
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
