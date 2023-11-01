import HomeAbout from "@/src/components/Home/HomeAbout";
import HomeBusiness from "@/src/components/Home/HomeBusiness";
import HomeContact from "@/src/components/Home/HomeContact";
import HomeCover from "@/src/components/Home/HomeCover";
import React from "react";

function HomeSR() {
  const coverText = {
    text1: "Gde Kvalitet i izbor",

    text2: "zadovoljavaju Vaše Potrebe",
  };
  const aboutTile1 = {
    title: "Kvalitet i Pouzdanost",
    text: "Kvalitet i pouzdanost su temelji našeg poslovanja. Vaša satisfakcija je naš prioritet. Naš tim za korisničku podršku je tu da odgovori na vaša pitanja i pruži vam stručne savete.",
  };

  const aboutTile2 = {
    title: "Veleprodaja i saradnja",
    text: "Za velike porudžbine, naša reputacija veletrgovca od poverenja je dobro uspostavljena. Nudimo konkurentne cene kako bismo zadovoljili vaše poslovne zahteve. Za poslovne partnere, nudimo konkurentne opcije veleprodaje i partnerstva, pružajući vam mogućnost za širenje i uspeh.",
  };
  const businessText = {
    title: "Poslovanje",
    linkTitle1: "Elektronski Uređaji",
    link1: "/business/electronic-devices/sr",
    linkTitle2: "Roba Široke Potrošnje",
    link2: "/business/fmcg/sr",
  };
  const contactText = {
    white: "Kontaktirajte nas",
    orange: "",
    link: "/contact/sr",
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

export default HomeSR;
