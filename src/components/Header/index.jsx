"use client";
import React, { useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import enFlag from "../../../public/en.png";
import huFlag from "../../../public/hu.png";
import srFlag from "../../../public/sr.png";
import Image from "next/image";
import DownArrowIcon from "../Icons";

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
  const [click, setClick] = React.useState(false);
  const [businessClick, setBusinessClick] = React.useState(false);

  const toggle = () => {
    setClick(!click);
    setBusinessClick(false);
  };
  const toggleBusiness = () => {
    setBusinessClick(!businessClick);
  };

  const home = ["Home", "Kezdőlap", "Početna"];
  const about = ["About", "Rólunk", "O nama"];
  const business = ["Business", "Üzleti", "Poslovanje"];
  const contact = ["Contact", "Elérhetőség", "Kontakt"];
  const team = ["Team", "Csapat", "Tim"];

  const electronicDevices = [
    "Electronic Devices",
    "Elektronikus eszközök",
    "Elektronski Uređaji",
  ];

  return (
    <header className="w-full h-[100px] bg-light shadow-md fixed z-[100]">
      <div className="w-full h-[100px] sxl:w-[1160px] py-3 px-3 sxl:px-0 m-auto flex items-center justify-between z-[100] bg-light shadow-md sm:shadow-none">
        <Logo pathLang={pathLang} />
        {/* --- */}
        <button className="inline:block sm:hidden z-50" onClick={toggle}>
          <div className="w-12 h-12 cursor-pointer transition-all ease duration-300">
            <div className="relative">
              <span
                className="absolute top-6 left-0 inline-block w-full h-1 bg-dark  rounded transition-all ease duration-200"
                style={{
                  transform: click
                    ? "rotate(-45deg) translateY(0)"
                    : "rotate(0deg) translateY(15px)",
                }}
              >
                &nbsp;
              </span>
              <span
                className="absolute top-6 left-0  inline-block w-full h-1 bg-dark  rounded transition-all ease duration-200"
                style={{
                  opacity: click ? 0 : 1,
                }}
              >
                &nbsp;
              </span>
              <span
                className="absolute top-6 left-0  inline-block w-full h-1 bg-dark  rounded transition-all ease duration-200"
                style={{
                  transform: click
                    ? "rotate(45deg) translateY(0)"
                    : "rotate(0deg) translateY(-15px)",
                }}
              >
                &nbsp;
              </span>
            </div>
          </div>
        </button>
        {/* --- */}
        <nav
          className="m-0 w-[100vw] h-[100vh] bg-light absolute top-0 -z-50
          transition-all ease duration-300 flex flex-col pt-[120px] text-2xl capitalize"
          style={{
            left: click ? "0" : "-100vw",
          }}
        >
          <Link
            href={pathLang}
            className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
            onClick={toggle}
          >
            {home[lang]}
          </Link>
          <Link
            href={`/about${pathLang}`}
            className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
            onClick={toggle}
          >
            {about[lang]}
          </Link>
          {/* --- */}
          <div
            className="flex flex-col w-[90%] mx-auto py-2 text-center"
            onClick={toggleBusiness}
            style={{
              color: businessClick ? "gray" : "#1b1b1b",
              borderBottom: businessClick
                ? "none"
                : "1px solid rgba(27, 27, 27, 0.5)",
            }}
          >
            <div className="flex items-center pl-5 justify-center">
              {business[lang]}
              <DownArrowIcon
                className="h-3 lg:h-4 w-auto pl-2"
                style={{
                  display: businessClick ? "none" : "inline",
                }}
              />
            </div>
          </div>
          {/*  */}
          <div
            className="flex-col"
            style={{
              display: businessClick ? "flex" : "none",
            }}
          >
            <Link
              href={`/business/electronic-devices${pathLang}`}
              className="w-[90%] mx-auto pb-2 text-center"
              onClick={toggle}
            >
              {electronicDevices[lang]}
            </Link>
            <Link
              href={`/business/fmcg${pathLang}`}
              className="w-[90%] mx-auto pb-2 text-center border-b border-dark/50"
              onClick={toggle}
            >
              FMCG
            </Link>
          </div>
          <Link
            href={`/team${pathLang}`}
            className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
            onClick={toggle}
          >
            {team[lang]}
          </Link>
          <Link
            href={`/contact${pathLang}`}
            className="w-[90%] mx-auto py-2 text-center border-b border-dark/50"
            onClick={toggle}
          >
            {contact[lang]}
          </Link>
          <div className="flex items-center justify-center py-2">
            <Link href={pathPage + "/"}>
              <Image
                src={enFlag}
                alt="langFlg"
                className="px-2 h-[30px] w-auto"
              ></Image>
            </Link>
            <Link href={pathPage + "hu"}>
              <Image
                src={huFlag}
                alt="langFlg"
                className="px-2 h-[30px] w-auto"
              ></Image>
            </Link>
            <Link href={pathPage + "sr"}>
              <Image
                src={srFlag}
                alt="langFlg"
                className="px-2 h-[30px] w-auto"
              ></Image>
            </Link>
          </div>
        </nav>
        {/* --- */}
        <nav className="w-max hidden sm:flex uppercase text-base lg:text-xl font-semibold items-center">
          <Link
            href={pathLang}
            className="mr-2 md:mr-3 lg:mr-4 hover:text-primary tranisition-all ease duration-200"
          >
            {home[lang]}
          </Link>
          <Link
            href={`/about${pathLang}`}
            className="mx-2 md:mx-3 lg:mx-4 hover:text-primary tranisition-all ease duration-200"
          >
            {about[lang]}
          </Link>
          <button className="group items-center uppercase group mx-2 md:mx-3 lg:mx-5 hover:text-primary relative cursor-pointer">
            {business[lang]}
            <DownArrowIcon className="h-3 lg:h-4 w-auto pl-2 inline group-hover:fill-primary" />
            <div className="absolute left-[-8px] hidden flex-col text-sm text-dark bg-light group-hover:flex shadow-md z-10">
              <Link
                href={`/business/electronic-devices${pathLang}`}
                className="px-4 pt-1 hover:text-primary tranisition-all ease duration-200"
              >
                {electronicDevices[lang]}
              </Link>
              <hr className="text-dark/50 w-[80%] mx-auto" />
              <Link
                href={`/business/fmcg${pathLang}`}
                className="p-2 hover:text-primary tranisition-all ease duration-200"
              >
                FMCG
              </Link>
            </div>
          </button>
          <Link
            href={`/team${pathLang}`}
            className="mx-2 md:mx-3 lg:mx-4 hover:text-primary tranisition-all ease duration-200"
          >
            {team[lang]}
          </Link>
          <Link
            href={`/contact${pathLang}`}
            className="mx-2 md:mx-3 lg:mx-4 hover:text-primary tranisition-all ease duration-200"
          >
            {contact[lang]}
          </Link>
          <div className="group inline-block ml-2 ml:mx-3 lg:ml-4 relative cursor-pointer h-full ">
            <Image
              src={lang === 2 ? srFlag : lang === 1 ? huFlag : enFlag}
              alt="langFlg"
              className="w-[20px] md:w-[25px] ring-offset-1 hover:ring-2 ring-primary tranisition-all ease duration-200"
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
