import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DefaultLayout from "./layouts/";
import App from "./App.jsx";
import LocationsList from "./routes/Locations";
import Locations from "./routes/Locations/Locations.jsx";
import About from "./routes/About";
import Contacts from "./routes/Contacts/";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/locations",
//     element: <LocationsList />,
//   },
//   {
//     path: "/locations/:id",
//     element: <Locations />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contacts",
//     element: <Contacts />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/locations" element={<LocationsList />} />
      <Route path="/locations/:id" element={<Locations />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
