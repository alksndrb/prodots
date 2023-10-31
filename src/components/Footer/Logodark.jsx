import React from "react";
import logo from "@/public/logo-light-footer.png";
import Image from "next/image";

function LogoDark() {
  return (
    <div className="flex items-center">
      <div className="w-full mr-4 flex justify-center">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default LogoDark;
