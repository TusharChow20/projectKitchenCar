import { ForkKnife } from "lucide-react";
import { FoodContext } from "./FoodContext";
import { useContext } from "react";
const Food = ({ data }) => {
  const { addedFood, setAddedFood } = useContext(FoodContext);

  return (
    <div className="flex flex-col-reverse text-2xl space-y-3 shadow-2xl p-8 md:p-10 rounded-xl">
      <div className="mt-3">
        <button
          onClick={() => setAddedFood((prev) => [...prev, data])}
          className="btn bg-amber-200 text-black"
        >
          Order Now
        </button>
      </div>

      <div>
        <div className="flex gap-4">
          <ForkKnife />
          <p>{data.order_title}</p>
        </div>
        <p className="text-xl text-amber-600">Instruction</p>
        <p>{data.special_instruction}</p>
      </div>
    </div>
  );
};

export default Food;
