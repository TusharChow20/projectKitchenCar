import { Delete, ForkKnife, Trash } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "./FoodContext";

const Order = ({ data, setAddedFood }) => {
  const [orderAlert, setOrderAlert] = useState(0);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { serve, setServe } = useContext(FoodContext);
  const { cooking, setCooking } = useContext(FoodContext);
  const handleClick = () => {
    if (processingOrder || isComplete) return;
    setOrderAlert(5);
    setCooking([...cooking, data]);
    setProcessingOrder(true);
    setIsComplete(false);
  };
  useEffect(() => {
    let timer;
    if (processingOrder && orderAlert > 0) {
      timer = setInterval(() => {
        setOrderAlert((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setProcessingOrder(false);
            setIsComplete(true);

            // move from cooking → serve
            setCooking((prevCook) =>
              prevCook.filter((cook) => cook.id !== data.id)
            );
            setServe((prevServe) => {
              if (!prevServe.find((d) => d.id === data.id)) {
                return [...prevServe, data];
              }
              return prevServe;
            });
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [cooking, data, orderAlert, processingOrder, serve, setCooking, setServe]);
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
              Order is Ready To Serve...
            </p>
          )}
        </div>

        <div className="flex justify-between">
          <div>
            <div className="flex gap-4">
              <ForkKnife />
              <p>{data.order_title}</p>
            </div>
            <p className="text-xl text-amber-600">Instruction</p>
            <p>{data.special_instruction}</p>
          </div>
          <button
            onClick={() => {
              setAddedFood((prevCook) =>
                prevCook.filter((cook) => cook.id !== data.id)
              );
            }}
          >
            <Trash size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
