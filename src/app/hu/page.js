import HomeAbout from "@/src/components/Home/HomeAbout";
import HomeBusiness from "@/src/components/Home/HomeBusiness";
import HomeContact from "@/src/components/Home/HomeContact";
import HomeCover from "@/src/components/Home/HomeCover";
import React from "react";

function HomeHU() {
  return (
    <main>
      <HomeCover />
      <HomeAbout />
      <HomeBusiness />
      <HomeContact />
    </main>
  );
}

export default HomeHU;
