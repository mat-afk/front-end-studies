import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./routes/Contact.jsx";
import Home from "./routes/Home.jsx";
import Info from "./routes/Info.jsx";
import Search from "./routes/Search.jsx";

// Error page
import ErrorPage from "./routes/ErrorPage.jsx";

// Dynamic routes
import Product from "./routes/Product.jsx";

import "./index.css";

// Router config
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Outlet
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      // Dynamic routes
      { path: "/products/:id", element: <Product /> },
      // Nested routes
      { path: "/products/:id/info", element: <Info /> },
      // Search
      { path: "/search", element: <Search /> },
      // Redirect
      { path: "/home", element: <Navigate to="/" /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
