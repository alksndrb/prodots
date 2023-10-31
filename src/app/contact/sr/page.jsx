import React from "react";

function ContactSR() {
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-contactBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] pt-10 pb-20 sm:pb-40 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-4xl font-semibold text-center">Kontakt</h1>
        <br />
        <br />
        <p>
          ProDots je vaš pouzdan izbor za elektronske uređaje. Kontaktirajte nas
          danas i dozvolite nam da vas podržimo u ispunjavanju vaših potreba.
        </p>
        <br />
        <p>
          ProDots je vaše rešenje na jednom mestu za elektronske uređaje.
          Stupite u kontakt sa nama danas i otkrijte kako možemo da osnažimo
          vaše tehnološko putovanje i doprinesemo vašem rastu. Zahvaljujemo vam
          što ste izabrali ProDots, gde ne prodajemo samo elektroniku, već
          pružamo izvrsnost.
        </p>
        <br />

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
