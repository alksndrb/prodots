import Image from "next/image";
import React from "react";
import linkedinIcon from "@/public/linkedin.svg";
import linkedinHoverIcon from "@/public/linkedin-hover.svg";
import mailIcon from "@/public/mail.svg";
import mailHoverIcon from "@/public/mail-hover.svg";

function TeamTile({ img, name, title, mail, linkedin }) {
  return (
    <div>
      <Image
        src={img}
        className="w-[300px] object-contain border-x-4 border-primary/40"
        alt="img"
        width={300}
        height={300}
      />
      <div className="w-[300px] flex flex-col border-4 border-primary/40 shadow-lg border-t-0 py-3 rounded-b-lg">
        <div className="text-xl flex justify-center ">{name}</div>
        <div className="text-lg flex justify-center">{title}</div>
        <div className="flex justify-center">
          <a href={`mailto:${mail}`} className="group">
            <Image
              src={mailIcon}
              className="h-[30px] group-hover:hidden"
              alt="img"
            />
            <Image
              src={mailHoverIcon}
              className="h-[30px] hidden group-hover:block"
              alt="img"
            />
          </a>
          <a href={linkedin} target="blank" className="group">
            <Image
              src={linkedinIcon}
              className="h-[30px] group-hover:hidden"
              alt="img"
            />
            <Image
              src={linkedinHoverIcon}
              className="h-[30px] hidden group-hover:block"
              alt="img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamTile;
