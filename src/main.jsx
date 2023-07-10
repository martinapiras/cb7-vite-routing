import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import LocationsList from "./routes/Locations";
import Locations from "./routes/Locations/Locations.jsx";
import About from "./routes/About";
import Contacts from "./routes/Contacts/";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/locations",
        element: <LocationsList />,
      },
      {
        path: "/locations/:id",
        element: <Locations />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
