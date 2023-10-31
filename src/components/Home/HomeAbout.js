import Image from "next/image";
import React from "react";
import img1 from "@/public/about-1.png";
import img2 from "@/public/about-2.png";
import TileLayoutLeft from "./TileLayoutLeft";
import TileLayoutRight from "./TileLayoutRight";

function HomeAbout() {
  const tile1 = {
    img: img1,
    title: "Our Commitment",
    text: "Quality and reliability are the cornerstones of our operations. Our customer support team is here to offer expert guidance, ensuring you make informed choices aligned with your unique needs.",
  };
  const tile2 = {
    img: img2,
    title: "Wholesale Opportunities",
    text: "For bulk orders, our reputation as a trusted wholesaler is well-established. We offer competitive pricing to meet your business requirements.",
  };

  return (
    <section className=" w-100% sxl:w-[1160px] sxl:mx-auto px-3 sxl:px-0">
      <TileLayoutLeft img={tile1.img} title={tile1.title} text={tile1.text} />
      <TileLayoutRight img={tile2.img} title={tile2.title} text={tile2.text} />
    </section>
  );
}

export default HomeAbout;
