import React from "react";

function FmcgSR() {
  const goods = [
    "Nudimo širok spektar kozmetičkih proizvoda, higijenskih proizvoda i parfema, prilagođenih različitim preferencijama i stilovima, kao što su Nivea, Dove, Adidas, Fa, Garnier, OldSpice, itd.",
    "Naš asortiman hemijskih proizvoda uključuje proizvode za ličnu i industrijsku upotrebu, zadovoljavajući standarde sigurnosti i kvaliteta - Hemija za kuću kao što su AmbiPur, Ajax, Ariel, Calgon, Cif, Henkel, Lenor.",
    "Održavajte svoje prostore čistim i higijenskim pomoću naših efikasnih rešenja za čišćenje - higijenski proizvodi kao što su Always, Blendamed, Colgate, Gilette, Johnson, Pantene, Axe, Rexona, Pampers, Shauma, Signal, Wilkinson.",
    "Ponosno distribuiramo renomirane brendove hrane kao što su Milka, Nescafe, Orbit, Red Bull i mnogi drugi, osiguravajući da Vaši kupci imaju pristup svojim omiljenim proizvodima.",
  ];
  const goodsName = [
    "Kozmetika i Parfemi",
    "Hemijski Proizvodi",
    "Sredstva za Čišćenje",
    "Kvalitetni Brendovi Hrane",
  ];
  let goodsElement = [];
  for (let i = 0; i < goods.length; i++) {
    goodsElement[i] = (
      <li className="pb-3 sm:pb-5">
        <span className="font-semibold">{goodsName[i]}: </span>
        {goods[i]}
      </li>
    );
  }
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-businessBanner1 bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] py-6 sm:py-12 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center pb-6 sm:pb-12">
          Roba Široke Potrošnje
        </h1>

        <p className="pb-6 sm:pb-12">
          ProDots se bavi veleprodajom robe široke potrošnje (FMCG), nudeći
          raznolik asortiman proizvoda, uključujući kozmetiku, higijenske
          proizvode, parfeme, hemijske proizvode, sredstva za čišćenje i širok
          izbor premium brendova hrane.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold pb-6 sm:pb-12">
          Naša Ponuda:
        </h2>
        <ul className="list-disc pl-5">{goodsElement}</ul>
      </section>
    </main>
  );
}

export default FmcgSR;
