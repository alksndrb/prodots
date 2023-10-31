import React from "react";
import BusinessTile from "./BusinessTile";
import img1 from "@/public/electronic-devices.jpeg";
import img2 from "@/public/consumer-goods.jpg";

function HomeBusiness() {
  return (
    <section className="w-100% sxl:w-[1160px] sxl:mx-auto px-3 sxl:px-0">
      <h1 className="text-4xl font-semibold text-center pt-20">Business</h1>
      <div className="grid grid-cols-2 gap-20 pt-10">
        <BusinessTile img={img1} name="Electronice Devices" />
        <BusinessTile img={img2} name="Fast-Moving Consumer Goods" />
      </div>
    </section>
  );
}

export default HomeBusiness;
