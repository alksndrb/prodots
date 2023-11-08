import Image from "next/image";
import React from "react";

function TeamTile({ img, name, title, mail }) {
  return (
    <div className="flex flex-col sm:flex-row pt-6 sm:pt-12">
      <Image
        src={img}
        className="h-[220px] sm:h-[150px] w-auto object-contain"
        alt="img"
        width={220}
        height={220}
      />
      <div className="flex flex-col items-center sm:items-start justify-center sm:pl-10 pt-6 sm:pt-12">
        <h3 className="text-xl sm:text-lg lg:text-xl text-center">
          {name} <span className="text-dark/70 "> - {title}</span>
        </h3>
        <h3 className="text-xl sm:text-lg lg:text-xl text-center pt-3 sm:pt-0">
          <span className="font-semibold">Email:</span> {mail}
        </h3>
      </div>
    </div>
  );
}

export default TeamTile;
