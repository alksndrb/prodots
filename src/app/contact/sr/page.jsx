import React from "react";

function ContactSR() {
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-contactBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] py-6 sm:py-12 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-2xl sm:3x lg:text-4xl font-semibold text-center pb-6 sm:pb-12">
          Kontakt
        </h1>
        <p className="pb-3 sm:pb-6">
          ProDots je vaš pouzdan izbor za elektronske uređaje. Kontaktirajte nas
          danas i dozvolite nam da vas podržimo u ispunjavanju vaših potreba.
        </p>
        <p className="pb-3 sm:pb-6">
          ProDots je vaše rešenje na jednom mestu za elektronske uređaje.
          Stupite u kontakt sa nama danas i otkrijte kako možemo da osnažimo
          vaše tehnološko putovanje i doprinesemo vašem rastu. Zahvaljujemo vam
          što ste izabrali ProDots, gde ne prodajemo samo elektroniku, već
          pružamo izvrsnost.
        </p>
        <div className="font-semibold">Adresa:&nbsp;</div>
        <div>
          1115 Budimpešta, Mađarska ulica Bartok Bela broj 106-110 B, prvi
          sprat, stan broj 6
        </div>
        <div className="font-semibold">E-mail:&nbsp;</div>
        <div>office@prodots.eu</div>
      </section>
    </main>
  );
}

export default ContactSR;
