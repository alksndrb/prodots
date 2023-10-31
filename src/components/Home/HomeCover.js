import React from "react";
import banner from "@/public/banner.png";
import Image from "next/image";

function HomeCover() {
  return (
    <div className="w-full inline-block">
      <section className="flex flex-col items-start justify-end relative h-[30vh] ">
        <Image
          src={banner}
          alt="banner"
          fill
          className="w-full h-full object-center object-cover -z-10"
          sizes="100vw"
          priority
        />
        <div className="h-[30vh] w-100% sxl:w-[1160px] sxl:mx-auto px-3 sxl:px-0 flex flex-col items-start justify-center">
          <h1 className="font-semibold capitalize text-4xl leading-relaxed text-light">
            At ProDots, we don&apos;t just sell products
            <br /> we deliver excellence
          </h1>
        </div>
      </section>
    </div>
  );
}

export default HomeCover;
