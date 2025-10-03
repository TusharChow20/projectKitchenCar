import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Food from "./Food";
import { FoodContext } from "./FoodContext";

const Foods = () => {
  const { data } = useLoaderData();
  const [addedFood, setAddedFood] = useState([]);
  return (
    <FoodContext.Provider value={{ addedFood, setAddedFood }}>
      <div className="mt-10 md:px-10 space-y-8 mb-10 ">
        <p className="px-2 text-5xl font-bold">All Food</p>
        <div className="grid lg:grid-cols-2">
          {data.map((data) => (
            <Food key={data.id} data={data}></Food>
          ))}
        </div>
      </div>
    </FoodContext.Provider>
  );
};

export default Foods;
