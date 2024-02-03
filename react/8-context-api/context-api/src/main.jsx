import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./routes/Contact.jsx";
import Home from "./routes/Home.jsx";

import { CounterProvider } from "./context/CounterContext";

import { TitleColorProvider } from "./context/TitleColorContext";

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
    <CounterProvider>
      <TitleColorProvider>
        <RouterProvider router={router} />
      </TitleColorProvider>
    </CounterProvider>
  </React.StrictMode>
);
