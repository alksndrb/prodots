import React from "react";

function AboutSR() {
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-aboutBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] pt-10 pb-20 sm:pb-40 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-4xl font-semibold text-center">O Nama</h1>
        <br />
        <p>
          ProDots je kompanija koja se bavi trgovinom i veleprodajom
          elektronskih uređaja i opreme. Naša posvećenost kvalitetu i
          izvanrednim proizvodima nas izdvaja kao lidera u industriji. Takođe,
          vođeni smo inovacijama i snažnom posvećenošću isporuci izuzetnih
          elektronskih rešenja koja će zadovoljiti rastuće potrebe naših kupaca.
        </p>
        <br />
        <p>
          Sa druge strane, ProDots se bavi i veleprodajom robe široke potrošnje
          (FMCG), nudeći raznolik asortiman proizvoda, uključujući kozmetiku,
          parfeme, hemijske proizvode, sredstva za čišćenje i širok izbor
          premium brendova hrane.
        </p>
        <br />
        <br />

        <h2 className="text-3xl font-semibold text-center">Naša Misija</h2>
        <br />
        <p>
          Naša misija je da omogućimo pristup najnovijim i najinovativnijim
          elektronskim uređajima, uključujući mobilne telefone, tablete, pametne
          satove, audio uređaje, projektore, uređaje za nošenje, pametne alate,
          kamere, dronove, skladišta podataka, potrošačku elektroniku, IT
          uređaje i drugo. ProDots ima cilj da bude Vaš partner u tehnološkom
          napretku, olakšavajući Vaš put ka uspehu.
        </p>
        <br />
        <p>
          Takođe, naša misija je da visokokvalitetni FMCG proizvodi budu
          dostupni Vašim kompanijama - maloprodajama i distributerima. Cilj nam
          je da isporučimo izuzetne proizvode koji unapređuju svakodnevni život
          potrošača, bilo da se radi o proizvodima za negu lepote, kućnim
          potrebštinama ili omiljenim namirnicama i napicima.
        </p>
      </section>
    </main>
  );
}

export default AboutSR;
