import React from "react";
import img from "@/public/placeholder.jpg";
import TeamTile from "@/src/components/Team/TeamTile";

function AboutHU() {
  const tolmasci = {
    img: img,
    name: "Branislav Tolmacsi ",
    title: "Igazgatója és alapítója",
    mail: "branislav.tolmacsi@prodots.eu",
  };
  const bukvic = {
    img: img,
    name: "Dejan Bukvic ",
    title: "Alapítója",
    mail: "dejan.bukvic@prodots.eu",
  };
  const gagic = {
    img: img,
    name: "Nikola Gagic ",
    title: "Alapítója",
    mail: "nikola.gagic@prodots.eu",
  };
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-teamBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] py-6 sm:py-12 px-3 sxl:px-0 m-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
          Csapat
        </h1>
        <TeamTile
          img={tolmasci.img}
          name={tolmasci.name}
          title={tolmasci.title}
          mail={tolmasci.mail}
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

export default AboutHU;
