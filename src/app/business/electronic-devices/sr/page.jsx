import React from "react";

function ElectronicDevicesSR() {
  const devices = [
    "Naša ponuda mobilnih telefona obuhvata sve vodeće brendove i modele, od premijum uređaja do onih koji nude izuzetnu vrednost za novac.",
    "Pored mobilnih telefona, nudimo širok spektar tableta prilagođenih različitim potrebama, od poslovne upotrebe do zabave.",
    "Praćenje zdravlja i povezanost su ključne karakteristike današnjih pametnih satova, a mi pružamo najnovije modele koji zadovoljavaju ove potrebe.",
    "Uronite u vrhunski zvuk uz našu vrhunsku audio opremu.",
    "Unapredite svoje prezentacije i zabavu pomoću najsavremenijih projektora.",
    "Budite informisani i povezani sa našim pametnim satovima i nosivim uređajima.",
    "Pojednostavite svoje zadatke i poboljšajte produktivnost pomoću naših pametnih alata.",
    "Snimite životne trenutke pomoću naših naprednih kamera i dronova.",
    "Zaštitite svoju digitalnu imovinu pomoću naših pouzdanih rešenja za skladištenje podataka.",
    "Unapredite svoj životni stil i zabavu uz naš raznovrsni asortiman potrošačke elektronike.",
    "Ostanite na čelu tehnologije sa našim efikasnim IT uređajima visokih performansi.",
    "Nudimo i bogat izbor dodatne opreme i opreme za elektronske uređaje, uključujući kućišta, štitnike za ekrane, punjače i drugo.",
  ];
  const devicesName = [
    "Mobilni telefoni",
    "Tableti",
    "Pametni satovi",
    "Audio oprema",
    "Projektori",
    "Nosivi uređaji",
    "Pametne alatke",
    "Kamere i dronovi",
    "Rešenja za skladištenje podataka",
    "Potrošačka elektronika",
    "IT uređaji",
    "Dodatna oprema i oprema",
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
          Elektronski Uređaji
        </h1>
        <br />
        <p>
          ProDots je kompanija koja se bavi trgovinom i veleprodajom
          elektronskih uređaja i opreme. Naša posvećenost kvalitetu i
          izvanrednim proizvodima nas izdvaja kao lidera u industriji. Takođe,
          vođeni smo inovacijama i snažnom posvećenošću isporuci izuzetnih
          elektronskih rešenja koja će zadovoljiti rastuće potrebe naših kupaca.
        </p>
        <br />
        <h2 className="text-2xl font-semibold">Naša Ponuda:</h2>
        <ul className="list-disc pl-5">
          <br />
          {devicesElement}
        </ul>
      </section>
    </main>
  );
}

export default ElectronicDevicesSR;
