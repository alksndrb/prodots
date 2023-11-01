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

  const addressLabel = ["Address", "Cím", "Adresa"];
  const address = [
    "1115 Budapest, Hungary, Bartok Bela street 106-110 B flat 1st floor, door 6",
    "1115 Budapest, Magyarország, Bartók Béla út 106-110. B. ép. B. lház. 1. em. 6. Ajtó",
    "1115 Budimpešta, Mađarska, ulica Bartok Bela broj 106-110 B, prvi sprat, stan broj 6",
  ];

  return (
    <footer className="bg-footer bg-dark bg-bottom bg-cover text-left">
      <div className="w-100% sxl:w-[1160px] sxl:mx-auto px-3 sxl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
          <div className="col-span-1 flex  items-center justify-center sm:justify-start">
            <div className="w-1/2">
              <LogoDark />
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="text-light text-base lg:text-xl font-semibold">
              <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-2">
                <div className="col-span-1 text-right text-primary">
                  {addressLabel[lang]}:&nbsp;
                </div>
                <div className="col-span-3 sm:col-span-2 lg:col-span-1 w-3/4 sm:w-full">
                  {address[lang]} <br />
                  <br />
                </div>
                <div className="col-span-1 text-right text-primary">
                  Email:&nbsp;
                </div>
                <div className="col-span-1">
                  office@prodots.eu <br />
                  <br />
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
