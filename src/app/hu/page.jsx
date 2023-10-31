import HomeAbout from "@/src/components/Home/HomeAbout";
import HomeBusiness from "@/src/components/Home/HomeBusiness";
import HomeContact from "@/src/components/Home/HomeContact";
import HomeCover from "@/src/components/Home/HomeCover";
import React from "react";

function HomeHU() {
  const coverText = {
    text1: "Ahol a minőség és a választék ",
    text2: "",
    text3: "találkozik az igényeivel.",
  };
  const aboutTile1 = {
    title: "Minőség és Megbízhatóság",
    text: "A minőség és a megbízhatóság vállalkozásunk alapjai. Az elégedettség az elsődleges célunk. Ügyfélszolgálati csapatunk itt van, hogy válaszoljon kérdéseire és nyújtson szakértői tanácsokat.",
  };
  const aboutTile2 = {
    title: "Nagykereskedelem és Együttműködés",
    text: "Nagy rendelésekre vonatkozóan már kialakult a megbízható nagykereskedői hírnevünk. Versenyképes árakat kínálunk, hogy kielégítsük vállalati igényeit. Üzleti partnereknek versenyképes nagykereskedelmi lehetőségeket kínálunk, hogy lehetőséget adjunk a bővülésre és a siker elérésére.",
  };
  const businessText = {
    title: "Üzleti",
    linkTitle1: "Elektronikus eszközök",
    link1: "/business/electronic-devices/hu",
    linkTitle2: "Gyorsan Forgó Fogyasztási Cikkek",
    link2: "/business/fmcg/hu",
  };
  const contactText = {
    white: "Vegye fel velünk a kapcsolatot",
    orange: "",
    link: "/contact/hu",
  };
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <HomeCover coverText={coverText} />
      <HomeAbout tile1={aboutTile1} tile2={aboutTile2} />
      <HomeBusiness businessText={businessText} />
      <HomeContact contactText={contactText} />
    </main>
  );
}

export default HomeHU;
