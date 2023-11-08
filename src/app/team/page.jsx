import TeamTile from "@/src/components/Team/TeamTile";
import React from "react";
import img from "@/public/placeholder.jpg";
import imgTolmacsi from "@/public/tolmacsi.png";
import imgBukvic from "@/public/bukvic.png";
import imgGagic from "@/public/gagic.jpg";

function About() {
  const tolmacsi = {
    img: imgTolmacsi,
    name: "Branislav Tolmacsi ",
    title: "Director and Co-founder",
    mail: "branislav.tolmacsi@prodots.eu",
  };
  const bukvic = {
    img: imgBukvic,
    name: "Dejan Bukvic ",
    title: "Co-founder",
    mail: "dejan.bukvic@prodots.eu",
  };
  const gagic = {
    img: imgGagic,
    name: "Nikola Gagic ",
    title: "Co-founder",
    mail: "nikola.gagic@prodots.eu",
  };
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-teamBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] py-6 sm:py-12 px-3 sxl:px-0 m-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
          Team
        </h1>
        <TeamTile
          img={tolmacsi.img}
          name={tolmacsi.name}
          title={tolmacsi.title}
          mail={tolmacsi.mail}
        />
        <TeamTile
          img={bukvic.img}
          name={bukvic.name}
          title={bukvic.title}
          mail={bukvic.mail}
        />
        <TeamTile
          img={gagic.img}
          name={gagic.name}
          title={gagic.title}
          mail={gagic.mail}
        />
      </section>
    </main>
  );
}

export default About;
