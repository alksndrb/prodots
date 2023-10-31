import React from "react";

function AboutHU() {
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-aboutBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] pt-10 pb-20 sm:pb-40 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-4xl font-semibold text-center">Rólunk</h1>
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
        <p>
          Másrészről a ProDots a Gyorsan Forgó Fogyasztási Cikkek (FMCG)
          nagykereskedelmével foglalkozik, változatos termékskálát kínálva,
          ideértve a kozmetikumokat, parfümöket, vegyi árukat, tisztítószereket
          és számos prémium élelmiszer márka széles választékát.
        </p>
        <br />
        <br />

        <h2 className="text-3xl font-semibold text-center">Cégünk küldetése</h2>
        <br />
        <p>
          Cégünk küldetése az, hogy hozzáférést biztosítson a legújabb és
          leginnovatívabb elektronikai eszközökhöz, ideértve a mobiltelefonokat,
          tableteket, okosórákat, audio eszközöket, projektoreket, hordozható
          eszközöket, okoseszközöket, kamerákat, drónokat, adattárolókat,
          szórakoztató elektronikát, informatikai eszközöket és még sok mást. A
          ProDots az Ön technológiai előrelépésének partnerje kíván lenni,
          könnyítve Önnek az útját a siker felé.
        </p>
        <br />
        <p>
          Másrészről a küldetésünk, hogy a vállalkozások, kiskereskedők és
          forgalmazók számára hozzáférhetővé tegyük a magas minőségű FMCG
          termékeket. Célunk, hogy kiváló minőségű termékeket szállítsunk,
          amelyek a fogyasztók mindennapi életét gazdagítják, legyen szó
          szépségápolási termékekről, háztartási szükségletekről vagy kedvenc
          élelmiszereikről.
        </p>
      </section>
    </main>
  );
}

export default AboutHU;
