import Image from "next/image";
import React from "react";

function TileLayoutRight({ img, title, text }) {
  return (
    <div>
      <div className="pt-20 flex justify-between">
        <Image src={img} className="w-2/6" alt="img" />
        <div className="flex flex-col items-end justify-center w-1/2">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <br />
            <p className="text-xl">{text}</p>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-primary from-50% to-primary/0" />
    </div>
  );
}

export default TileLayoutRight;
