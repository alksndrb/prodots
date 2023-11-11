import React from "react";
import img from "@/public/placeholder.jpg";
import TeamTile from "@/src/components/Team/TeamTile";
import imgTolmacsi from "@/public/tolmacsi.jpg";
import imgBukvic from "@/public/bukvic.jpg";
import imgGagic from "@/public/gagic.jpg";

function AboutHU() {
  const tolmacsi = {
    img: imgTolmacsi,
    name: "Branislav Tolmacsi ",
    title: "Igazgatója és alapítója",
    mail: "branislav.tolmacsi@prodots.eu",
    linkedin: "https://linkedin.com/in/dejan-bukvić-23426829b",
  };
  const bukvic = {
    img: imgBukvic,
    name: "Dejan Bukvic ",
    title: "Alapítója",
    mail: "dejan.bukvic@prodots.eu",
    linkedin: "https://linkedin.com/in/dejan-bukvić-23426829b",
  };
  const gagic = {
    img: imgGagic,
    name: "Nikola Gagic ",
    title: "Alapítója",
    mail: "nikola.gagic@prodots.eu",
    linkedin: "https://linkedin.com/in/nikola-gagić-881b77198",
  };
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-teamBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] py-6 sm:py-12 px-3 sxl:px-0 m-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
          Csapat
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-10">
          <div className="flex justify-center">
            <TeamTile
              img={tolmacsi.img}
              name={tolmacsi.name}
              title={tolmacsi.title}
              mail={tolmacsi.mail}
              linkedin={tolmacsi.linkedin}
            />
          </div>
          <div className="flex justify-center">
            <TeamTile
              img={bukvic.img}
              name={bukvic.name}
              title={bukvic.title}
              mail={bukvic.mail}
              linkedin={bukvic.linkedin}
            />
          </div>
          <div className="flex justify-center">
            <TeamTile
              img={gagic.img}
              name={gagic.name}
              title={gagic.title}
              mail={gagic.mail}
              linkedin={gagic.linkedin}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutHU;
