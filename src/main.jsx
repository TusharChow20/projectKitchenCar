import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Foods from "./Pages/foods.jsx";
import Orders from "./Pages/Orders.jsx";
import axios from "axios";
import { FoodContext } from "./Pages/FoodContext.jsx";

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

// eslint-disable-next-line react-refresh/only-export-components
const CompnentProvider = () => {
  const [addedFood, setAddedFood] = useState([]);
  const [serve, setServe] = useState([]);
  return (
    <FoodContext.Provider value={{ addedFood, setAddedFood, serve, setServe }}>
      <RouterProvider router={router} />
    </FoodContext.Provider>
  );
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompnentProvider />
  </StrictMode>
);
