import React, { useContext } from "react";
import { FoodContext } from "./FoodContext";
import Order from "./Order";

const Orders = () => {
  const { addedFood, setAddedFood } = useContext(FoodContext);

  return (
    <div>
      <div className="mt-10 md:px-10 space-y-8 mb-10 ">
        <p className="px-2 text-5xl font-bold">All Food</p>
        <div className="grid ">
          {addedFood.map((data) => (
            <Order
              key={data.id}
              setAddedFood={setAddedFood}
              data={data}
            ></Order>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
