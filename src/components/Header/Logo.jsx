import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo-dark.png";
function Logo({ pathLang }) {
  return (
    <Link href={pathLang} className="flex items-center">
      <div className="w-16 mr-4 flex justify-center">
        <Image src={logo} alt="logo" />
      </div>
      <span className="font-semibold text-5xl">
        Pro<span className="text-primary">Dots</span>{" "}
      </span>
    </Link>
  );
}

export default Logo;
