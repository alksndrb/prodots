"use client";
import React, { useEffect } from "react";

import LogoDark from "./Logodark";
import { usePathname } from "next/navigation";
import Link from "next/link";
import instagram from "@/public/instagram-3.png";
import linkedin from "@/public/linkedin-3.png";
import Image from "next/image";

function Footer() {
  const path = usePathname();
  let pathLang = path.slice(path.length - 3);
  let pathPage;
  if (pathLang === "/sr" || pathLang === "/hu") {
    pathPage = path.slice(0, path.length - 2);
  } else {
    pathPage = path;
    pathLang = "/";
  }
  if (pathPage.slice(pathPage.length - 1) !== "/") {
    pathPage = pathPage + "/";
  }
  const [lang, setLang] = React.useState(
    pathLang === "/sr" ? 2 : pathLang === "/hu" ? 1 : 0
  );
  useEffect(() => {
    setLang(pathLang === "/sr" ? 2 : pathLang === "/hu" ? 1 : 0);
  }, [pathLang]);

  return (
    <footer className="bg-footer bg-bottom bg-cover">
      <div className="w-100% sxl:w-[1160px] sxl:mx-auto px-3 sxl:px-0">
        <div className="grid grid-cols-4 gap-6 py-10">
          <div className="col-span-1 flex  items-start justify-start">
            <LogoDark />
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-2 flex flex-col items-center justify-center">
            <div className="text-light text-xl font-semibold">
              <div className="grid grid-cols-2">
                <div className="col-span-1 text-right text-primary">
                  Adress:&nbsp;
                </div>
                <div className="col-span-1">
                  1115 Budapest, Hungary Bartok Bela street 106-110 B flat 1st
                  floor, door 6 <br />
                  <br />
                </div>
                <div className="col-span-1 text-right text-primary">
                  Email:&nbsp;
                </div>
                <div className="col-span-1 w-2/3">
                  office@prodots.eu <br />
                  <br />
                </div>
                <div></div>
                <div className="flex">
                  <Image
                    src={instagram}
                    className="w-10 h-10"
                    alt="instagram"
                  />
                  &nbsp;&nbsp;
                  <Image src={linkedin} className="w-10 h-10" alt="linkedin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
