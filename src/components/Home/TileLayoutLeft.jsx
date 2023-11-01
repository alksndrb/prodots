import React from "react";
import Image from "next/image";

function TileLayoutLeft({ img, title, text }) {
  return (
    <div>
      <div className="pt-0 sm:pt-10 flex flex-col sm:flex-row justify-between ">
        <div className="flex flex-col items-end justify-center w-full sm:w-2/3 sm:pr-10 py-6 sm:py-12 md:pr-36">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-start">
              {title}
            </h2>
            <br />
            <p className="text-base">{text}</p>
          </div>
        </div>
        <Image
          src={img}
          className="w-full h-[270px] sm:w-2/6 sm:h-auto object-cover"
          alt="img"
        />
      </div>
      <div className="hidden sm:block h-1 bg-gradient-to-r from-primary/0 to-50% to-primary" />
    </div>
  );
}

export default TileLayoutLeft;
