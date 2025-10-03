import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Foods from "./Pages/foods.jsx";
import Orders from "./Pages/Orders.jsx";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "/orders",
        Component: Orders,
      },
      {
        path: "/foods",
        loader: () => axios("/orders.json"),
        Component: Foods,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
