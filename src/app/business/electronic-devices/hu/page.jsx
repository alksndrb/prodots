import React from "react";

function ElecotronicDevicesHU() {
  const devices = [
    "Mobiltelefon kínálatunk minden vezető márkát és modellt tartalmaz, a prémium készülékektől azokig, amelyek kiváló értéket kínálnak..",
    "Mobiltelefonok mellett széles körű táblagép választékot kínálunk, amelyek különböző igényeket szolgálnak ki, a vállalati felhasználástól az szórakoztatásig.",
    "Egészségfigyelés és kapcsolódás ma már a legmodernebb okosórák fő jellemzői, és mi a legújabb modelleket kínáljuk, amelyek kielégítik ezeket az igényeket.",
    "Merüljön el a prémium hangzásban a kiváló minőségű audio berendezéseinkkel.",
    "Továbbítson előadásokat és szórakozzon a legkorszerűbb projektorokkal.",
    "Maradjon informálva és kapcsolódva az okosóráinkkal és hordozható eszközeinkkel.",
    "Egyszerűsítse feladatait és növelje a termelékenységet okos eszközeinkkel.",
    "Rögzítse az élet pillanatait a fejlett kameráinkkal és drónjainkkal.",
    "Védje digitális vagyonát megbízható adattárolási megoldásainkkal.",
    "Fejlessze életstílusát és szórakozását a szórakoztató elektronika változatos választékával.",
    "Maradjon az technológia élén a hatékony, nagy teljesítményű informatikai eszközeinkkel.",
    "Széles választékban kínálunk kiegészítőket és eszközöket elektronikai eszközeihez, beleértve tokokat, képernyővédőket, töltőket és még sok mást.",
  ];
  const devicesName = [
    "Mobiltelefonok",
    "Táblagépek",
    "Okosórák",
    "Audio berendezések",
    "Projektorok",
    "Hordozható eszközök",
    "Okos eszközök",
    "Kamerák és drónok",
    "Adattárolási megoldások",
    "Szórakoztató elektronika",
    "Informatikai eszközök",
    "Kiegészítők és tartozékok",
  ];
  let devicesElement = [];
  for (let i = 0; i < devices.length; i++) {
    devicesElement[i] = (
      <li>
        <span className="font-semibold">{devicesName[i]}: </span>
        {devices[i]}
        <br />
        <br />
      </li>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-businessBanner1   bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] pt-10 pb-20 sm:pb-40 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-4xl font-semibold text-center">
          Elektronikus Eszközök
        </h1>
        <br />
        <p>
          ProDots egy olyan vállalat, amely elektronikai eszközök és
          felszerelések nagykereskedelmével foglalkozik. A minőséghez és kiváló
          termékekhez való elkötelezettségünk kiemel minket az iparág
          vezetőjeként. Emellett az innováció és a kiváló elektronikai
          megoldások szállítására való elkötelezettség vezérel minket, hogy
          kielégítsük ügyfeleink növekvő igényeit.
        </p>
        <br />
        <h2 className="text-2xl font-semibold">Kínálatunk:</h2>
        <ul className="list-disc pl-5">
          <br />
          {devicesElement}
        </ul>
      </section>
    </main>
  );
}

export default ElecotronicDevicesHU;
