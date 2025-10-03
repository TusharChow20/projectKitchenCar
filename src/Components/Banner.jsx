import { ChefHat } from "lucide-react";
import React from "react";
// import img from "../assets/title-bg.png";
const Banner = ({ children }) => {
  return (
    <div className="bg-[url('/title-bg.png')] hidden  md:flex items-center justify-center gap-4 bg-no-repeat bg-cover pb-20 pt-14 lg:pb-45 lg:pt-30 bg-center">
      <ChefHat size={50} color="black" />
      <h1
        className="text-center  text-black text-bold font-bold text-5xl"
        style={{ backgroundSize: "100% 100%" }}
      >
        {children}
      </h1>
    </div>
  );
};

export default Banner;
