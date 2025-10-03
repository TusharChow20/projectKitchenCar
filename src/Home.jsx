import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import TrackOrder from "./Components/TrackOrder";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner> Kitchen</Banner>
      <TrackOrder></TrackOrder>
      <main className="min-h-[calc(100vh-280px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
