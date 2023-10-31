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
      <li>
        <span className="font-semibold">{goodsName[i]}: </span>
        {goods[i]}
        <br />
        <br />
      </li>
    );
  }
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-businessBanner1 bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] pt-10 pb-20 sm:pb-40 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-4xl font-semibold text-center">
          Roba Široke Potrošnje
        </h1>
        <br />
        <p>
          ProDots se bavi veleprodajom robe široke potrošnje (FMCG), nudeći
          raznolik asortiman proizvoda, uključujući kozmetiku, higijenske
          proizvode, parfeme, hemijske proizvode, sredstva za čišćenje i širok
          izbor premium brendova hrane.
        </p>
        <br />
        <h2 className="text-2xl font-semibold">Naša Ponuda:</h2>
        <ul className="list-disc pl-5">
          <br />
          {goodsElement}
        </ul>
      </section>
    </main>
  );
}

export default FmcgSR;
