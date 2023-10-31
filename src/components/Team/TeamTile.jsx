import Image from "next/image";
import React from "react";

function TeamTile({ img, name, title, mail }) {
  return (
    <div className="flex flex-col sm:flex-row pt-20">
      <Image
        src={img}
        className="h-[220px] sm:h-[150px] w-auto object-contain"
        alt="img"
      />
      <div className="flex flex-col items-center sm:items-start justify-center pl-3 sm:pl-10">
        <h3 className="text-xl sm:text-lg lg:text-xl text-center">
          {name} <span className="text-dark/70 "> - {title}</span>
        </h3>
        <h3 className="text-xl sm:text-lg lg:text-xl text-center">
          <span className="font-semibold">Email:</span> {mail}
        </h3>
      </div>
    </div>
  );
}

export default TeamTile;
