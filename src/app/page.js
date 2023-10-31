import React from "react";
import HomeCover from "../components/Home/HomeCover";
import HomeAbout from "../components/Home/HomeAbout";
import HomeBusiness from "../components/Home/HomeBusiness";
import HomeContact from "../components/Home/HomeContact";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <HomeCover />
      <HomeAbout />
      <HomeBusiness />
      <HomeContact />
    </main>
  );
}

export default Home;
