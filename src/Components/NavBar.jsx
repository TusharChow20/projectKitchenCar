import React from "react";
import ThemeControl from "./ThemeControl";

const NavBar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm px-3 md:px-7 lg::px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Orders</a>
              </li>
              <li>
                <a>Foods</a>
              </li>
              <li>
                <a>Tables</a>
              </li>
              <li>
                <a className="btn  text-xs p-2 flex rounded-xl">Logout</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-8" src="./logo.png" alt="image" />
            <a className=" btn-ghost text-xs md:text-2xl md:font-bold">
              Taxi <span className="text-red-500">Kitchen</span>
            </a>
          </div>
        </div>
        <div className="navbar-end w-full items-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 text-2xl ">
            <li>
              <a className="border-b-2  border-[#fcb900] duration-500 ease-in-out  hover:scale-105 hover:shadow-lg">
                Orders
              </a>
            </li>
            <li>
              <a className="border-b-2  border-[#fcb900] duration-500 ease-in-out  hover:scale-105 hover:shadow-lg">
                Foods
              </a>
            </li>
            <li>
              <a className="border-b-2 border-[#fcb900] duration-500 ease-in-out  hover:scale-105 hover:shadow-lg">
                Tables
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="navbar-end  flex gap-4 lg:w-1/5 lg:px-3">
          <a className="btn hidden lg:flex duration-500 ease-in-out  hover:scale-105 hover:shadow-lg md:text-2xl">
            Logout
          </a>
          <ThemeControl></ThemeControl>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
<h1>THis is nav section</h1>;
