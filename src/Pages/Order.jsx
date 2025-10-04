import { ForkKnife } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "./FoodContext";

const Order = ({ data }) => {
  const [orderAlert, setOrderAlert] = useState(0);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { serve, setServe } = useContext(FoodContext);
  const handleClick = () => {
    if (processingOrder || isComplete) return;
    setOrderAlert(3);

    setProcessingOrder(true);
    setIsComplete(false);
  };
  useEffect(() => {
    if (processingOrder && orderAlert > 0) {
      setTimeout(() => {
        setOrderAlert((prev) => prev - 1);
        if (!serve.find((d) => data.id === d.id)) {
          setServe([...serve, data]);
        }
      }, 1000);
    } else if (orderAlert === 0 && processingOrder) {
      setProcessingOrder(false);
      setIsComplete(true);
    }
  }, [orderAlert, processingOrder]);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };
  return (
    <div>
      <div className="flex flex-col-reverse text-2xl space-y-3 shadow-2xl p-8 md:p-10 rounded-xl">
        <div className="mt-3">
          <button
            onClick={handleClick}
            disabled={processingOrder || isComplete}
            className={`btn font-semibold px-6 py-3 rounded-xl transition-all duration-300 
            ${
              processingOrder
                ? "bg-amber-400 brightness-125 animate-pulse shadow-[0_0_20px_#fbbf24]"
                : isComplete
                ? "bg-green-500 hover:brightness-110 shadow-[0_0_20px_#22c55e]"
                : "bg-amber-200 hover:bg-amber-300 hover:brightness-125"
            }`}
          >
            {processingOrder
              ? `Order in Process (${formatTime(orderAlert)})`
              : isComplete
              ? "Order Completed"
              : "Confirm Order"}
          </button>
          {processingOrder && (
            <p className="mt-2 text-yellow-600 font-semibold">
              Please wait... your food is being prepared!
            </p>
          )}
          {isComplete && (
            <p className="mt-2 text-green-600 font-semibold">
              Your order is ready! 🎉
            </p>
          )}
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
    </div>
  );
};

export default Order;
