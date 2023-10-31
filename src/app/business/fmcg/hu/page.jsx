import React from "react";

function FmcgHU() {
  const goods = [
    "Széles körű kozmetikumokat, higiéniai termékeket és parfümöket kínálunk, különböző preferenciákhoz és stílusokhoz, például Nivea, Dove, Adidas, Fa, Garnier, OldSpice, stb.",
    "Vegyi áruk széles választékát kínáljuk mind a személyes, mind az ipari felhasználásra, a biztonsági és minőségi előírásoknak megfelelően - Háztartási vegyszerek, például AmbiPur, Ajax, Ariel, Calgon, Cif, Henkel, Lenor.",
    "Tartsa tisztán és higiénikusan helyiségeit hatékony tisztítószereinkkel - olyan higiéniai termékek, mint az Always, Blendamed, Colgate, Gilette, Johnson, Pantene, Axe, Rexona, Pampers, Shauma, Signal, Wilkinson.",
    "Büszkén terjesztjük elismert élelmiszer márkáinkat, mint például a Milka, Nescafe, Orbit, Red Bull és még sok más, biztosítva, hogy ügyfelei hozzáférhessenek kedvenceikhez.",
  ];
  const goodsName = [
    "Kozmetikumok és Parfümök",
    "Vegyi Áruk",
    "Tisztítószerek",
    "Minőségi Élelmiszer Márkák",
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
          Gyorsan Mozgó Fogyasztási Cikkek
        </h1>
        <br />
        <p>
          A ProDots foglalkozik a Gyorsan Forgó Fogyasztási Cikkek (FMCG)
          nagykereskedelmével, és változatos termékskálát kínál, ideértve a
          kozmetikumokat, higiéniai termékeket, parfümöket, vegyi áruk,
          tisztítószereket, valamint számos prémium élelmiszer márka széles
          választékát.
        </p>
        <br />
        <h2 className="text-2xl font-semibold">Ajánlatunk:</h2>
        <ul className="list-disc pl-5">
          <br />
          {goodsElement}
        </ul>
      </section>
    </main>
  );
}

export default FmcgHU;
