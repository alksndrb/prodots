import React from "react";
import BusinessTile from "./BusinessTile";
import img1 from "@/public/electronic-devices.jpeg";
import img2 from "@/public/consumer-goods.jpg";

function HomeBusiness({ businessText }) {
  return (
    <section className="w-100% sxl:w-[1160px] sxl:mx-auto px-3 sxl:px-0">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center pt-20">
        {businessText.title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-20 pt-10">
        <BusinessTile
          img={img1}
          name={businessText.linkTitle1}
          url={businessText.link1}
        />
        <BusinessTile
          img={img2}
          name={businessText.linkTitle2}
          url={businessText.link2}
        />
      </div>
    </section>
  );
}

export default HomeBusiness;
