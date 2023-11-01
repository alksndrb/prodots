import Image from "next/image";
import React from "react";

function TileLayoutRight({ img, title, text }) {
  return (
    <div>
      <div className="pt-0 sm:pt-10 flex flex-col sm:flex-row justify-between">
        <Image
          src={img}
          className="hidden sm:inline w-2/6 object-cover"
          alt="img"
        />
        <div className="flex flex-col items-end justify-center w-full sm:w-2/3 sm:pl-10 py-6 md:pl-36">
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
          className="block w-full h-[270px] object-cover   sm:hidden"
          alt="img"
        />
      </div>
      <div className="hidden sm:block h-1 bg-gradient-to-r from-primary from-50% to-primary/0" />
    </div>
  );
}

export default TileLayoutRight;
