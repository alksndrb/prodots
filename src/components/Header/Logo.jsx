import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoName from "@/public/LogoName.svg";
import logo from "@/public/logo-dark.png";
import LogoDark from "../Logo";
function Logo({ pathLang }) {
  return (
    <Link href={pathLang} className="flex items-start justify-start">
      <div className="flex items-start justify-start">
        <Image
          src={LogoName}
          className="
          sm:hidden
          lg:inline
          h-[70px] w-auto"
          alt="logo"
        />
        <Image
          src={logo}
          className="h-[70px] w-auto hidden sm:inline lg:hidden"
          alt=""
        />
      </div>
    </Link>
  );
}

export default Logo;
