import React from "react";

function ContactHU() {
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-contactBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] py-6 sm:py-12 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-2xl sm:3x lg:text-4xl font-semibold text-center pb-6 sm:pb-12">
          Elérhetőség
        </h1>

        <p className="pb-3 sm:pb-6">
          A ProDots megbízható választás elektronikai eszközök terén. Vegye fel
          velünk a kapcsolatot még ma, és hagyja, hogy támogassuk az igényeinek
          teljesítésében. A ProDots egyetlen helyen nyújtja elektronikai
          eszközöket. Lépjen velünk kapcsolatba még ma, és fedezze fel, hogyan
          segíthetjük az technológiai utazását és hozzájárulhatunk
          növekedéséhez. Köszönjük, hogy a ProDots-ot választotta, ahol nem csak
          elektronikát értékesítünk, hanem kiválóságot szállítunk.
        </p>

        <p className="pb-3 sm:pb-6">
          Másrészről a ProDots a megbízható forrása a FMCG termékeknek. Vegye
          fel velünk a kapcsolatot még ma, és hagyja, hogy támogassuk az
          igényeinek teljesítésében.
        </p>

        <div className="font-semibold">Cím</div>
        <div>
          1115 Budapest, Magyarország Bartók Béla út 106-110. B. ép. B. lház. 1.
          em. 6. Ajtó
        </div>
        <div className="font-semibold">E-Mail</div>
        <div>office@prodots.eu</div>
      </section>
    </main>
  );
}

export default ContactHU;
