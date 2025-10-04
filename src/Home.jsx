import React, { useContext } from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import TrackOrder from "./Components/TrackOrder";
import { FoodContext } from "./Pages/FoodContext";

const Home = () => {
  const { addedFood } = useContext(FoodContext);
  return (
    <div>
      <NavBar></NavBar>
      <Banner> Kitchen</Banner>
      <TrackOrder addedFood={addedFood}></TrackOrder>
      <main className="min-h-[calc(100vh-700px)] lg:min-h-[calc(100vh-880px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
