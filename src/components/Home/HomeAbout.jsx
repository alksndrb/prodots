import Image from "next/image";
import React from "react";
import img1 from "@/public/about-1.png";
import img2 from "@/public/about-2.png";
import TileLayoutLeft from "./TileLayoutLeft";
import TileLayoutRight from "./TileLayoutRight";

function HomeAbout({ tile1, tile2 }) {
  return (
    <section className=" w-100% sxl:w-[1160px] sxl:mx-auto px-3 sxl:px-0">
      <TileLayoutLeft img={img1} title={tile1.title} text={tile1.text} />
      <TileLayoutRight img={img2} title={tile2.title} text={tile2.text} />
    </section>
  );
}

export default HomeAbout;
