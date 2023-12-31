import Image from "next/image";
import Link from "next/link";
import React from "react";

function BusinessTile({ img, name, url }) {
  return (
    <div className="relative">
      <Link href={url} className="group">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 sm:group-hover:bg-dark/40 -z-0 sm:group-hover:ring-4 ring-primary tranisition-all ease duration-200" />
        <Image
          src={img}
          className="h-[300px] sm:h-full -z-10 object-cover object-top "
          alt="img"
        />
        <div className=" absolute z-10 bottom-10 right-1/2 translate-x-1/2">
          <h1 className="text-light text-center w-full text-2xl sm:text-xl lg:text-2xl xl:text-3xl ">
            {name}
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default BusinessTile;
