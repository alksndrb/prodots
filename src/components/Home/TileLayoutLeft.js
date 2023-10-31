import React from "react";
import Image from "next/image";

function TileLayoutLeft({ img, title, text }) {
  return (
    <div>
      <div className="mt-20 flex justify-between ">
        <div className="flex flex-col items-end justify-center w-1/2">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <br />
            <p className="text-xl">{text}</p>
          </div>
        </div>
        <Image src={img} className="w-2/6" alt="img" />
      </div>
      <div className="h-1 bg-gradient-to-r from-primary/0 to-50% to-primary" />
    </div>
  );
}

export default TileLayoutLeft;
