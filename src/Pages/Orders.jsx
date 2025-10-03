import React, { useContext } from "react";
import { FoodContext } from "./FoodContext";

const Orders = () => {
  const { addedFood, setAddedFood } = useContext(FoodContext);
  console.log(addedFood);

  return <div>{/* <h1>{addedFood.length}</h1> */}</div>;
};

export default Orders;
