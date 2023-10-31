"use client";
import React, { useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import enFlag from "../../../public/en.png";
import huFlag from "../../../public/hu.png";
import srFlag from "../../../public/sr.png";
import Image from "next/image";

function Header() {
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
  const home = ["Home", "Kezdőlap", "Pocetna"];
  const about = ["About", "RÓLUNK", "O nama"];
  const buisness = ["Business", "ÜZLETI", "Poslovanje"];
  const contact = ["contact", "contact", "kontakt"];
  const team = ["team", "csapat", "tim"];

  return (
    <header className="w-full bg-light shadow-md fixed z-[100]">
      <div className="w-full sxl:w-[1160px] py-3 px-3 sxl:px-0 m-auto flex items-center justify-between">
        <Logo pathLang={pathLang} />
        <nav className="w-max uppercase text-xl font-semibold flex items-center">
          <Link
            href={pathLang}
            className="mx-5 hover:text-primary tranisition-all ease duration-200"
          >
            {home[lang]}
          </Link>
          <Link
            href={`/about${pathLang}`}
            className="mx-5 hover:text-primary tranisition-all ease duration-200"
          >
            {about[lang]}
          </Link>
          <button className="group inline-block mx-5 hover:text-primary relative cursor-pointer min-w-[90px]">
            BUSINESS
            <div className="absolute left-[-8px] right-[-8px] hidden flex-col text-sm text-dark bg-light group-hover:flex shadow-md z-10">
              <Link
                href="/"
                className="px-2 pt-1 hover:text-primary tranisition-all ease duration-200"
              >
                ELECTRONIC DEVICES
              </Link>
              <Link
                href="/"
                className="p-2 hover:text-primary tranisition-all ease duration-200"
              >
                FMCG
              </Link>
            </div>
          </button>
          <Link
            href={`/team${pathLang}`}
            className="mx-5 hover:text-primary tranisition-all ease duration-200"
          >
            {team[lang]}
          </Link>
          <Link
            href={`/contact${pathLang}`}
            className="mx-5 hover:text-primary tranisition-all ease duration-200"
          >
            {contact[lang]}
          </Link>
          <div className="group inline-block mx-5 relative cursor-pointer h-full ">
            <Image
              src={lang === 2 ? srFlag : lang === 1 ? huFlag : enFlag}
              alt="langFlg"
              className="w-[25px] ring-offset-1 hover:ring-2 ring-primary tranisition-all ease duration-200"
            />

            <div className="absolute left-[-8px] right-[-8px] pt-2 hidden flex-col text-sm text-dark bg-gradient-to-b from-light/0 to-light via-light group-hover:flex shadow-md z-10">
              {lang != 0 && (
                <Link href={pathPage + "/"} className="p-2">
                  <Image
                    src={enFlag}
                    alt="langFlg"
                    className=" ring-offset-1 hover:ring-2 ring-primary tranisition-all ease duration-200"
                  />
                </Link>
              )}
              {lang != 1 && (
                <Link href={pathPage + "hu"} className="p-2 ">
                  <Image
                    src={huFlag}
                    alt="langFlg"
                    className=" ring-offset-1 hover:ring-2 ring-primary tranisition-all ease duration-200"
                  />
                </Link>
              )}
              {lang != 2 && (
                <Link href={pathPage + "sr"} className="p-2">
                  <Image
                    src={srFlag}
                    alt="langFlg"
                    className="ring-offset-1 hover:ring-2 ring-primary tranisition-all ease duration-200"
                  />
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
