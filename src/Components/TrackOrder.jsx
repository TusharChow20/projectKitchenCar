import { CookingPot, ScrollText, TicketsPlane } from "lucide-react";
import React, { useContext } from "react";
import { FoodContext } from "../Pages/FoodContext";
{
  /*
   */
}
const TrackOrder = ({ addedFood }) => {
  const { serve } = useContext(FoodContext);
  const { cooking } = useContext(FoodContext);
  // console.log(serve);

  return (
    <div className="grid md:grid-cols-3 gap-5 mt-10 px-5">
      <div className="flex items-center justify-between border-4 border-dotted border-amber-300 rounded-xl  p-10">
        <ScrollText size={50} color="#fcb900" />
        <div className="text-center">
          <h1 className="text-2xl">Current Orders</h1>
          <p className="font-bold text-4xl">{addedFood.length}</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-4 border-dotted border-amber-300 rounded-xl  p-10">
        <CookingPot size={50} color="#fcb900" />
        <div className="text-center">
          <h1 className="text-2xl">Currently Cooking</h1>
          <p className="font-bold text-4xl">{cooking.length}</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-4 border-dotted border-amber-300 rounded-xl  p-10">
        <TicketsPlane size={50} color="#fcb900" />
        <div className="text-center">
          <h1 className="text-2xl">Ready to Serve</h1>
          <p className="font-bold text-4xl">{serve.length}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
