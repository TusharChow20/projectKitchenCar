import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="min-h-[calc(100vh-280px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
