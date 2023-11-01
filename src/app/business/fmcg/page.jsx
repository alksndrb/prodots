import React from "react";

function Fmcg() {
  const goods = [
    "We offer a wide array of cosmetics, hygienic product and fragrances, catering to various preferences and styles such as Nivea, Dove, Adidas, Fa, Garnier, OldSpice, etc.",
    "Our range of chemical goods includes products for both personal and industrial use, meeting safety and quality standards – Household chemistry such as AmbiPur, Ajax, Ariel, Calgon, Cif, Henkel, Lenor.",
    "Keep your spaces clean and hygienic with our effective cleaning solutions - hygienic product such as Always, Blendamed, Colgate, Gilette, Johnson, Pantene, Axe, Rexona, Pampers, Shauma, Signal, Wilkinson.",
    "We proudly distribute renowned food brands such as Milka, Nescafe, Orbit, Red Bull, and more, ensuring your customers have access to their favorites.",
  ];
  const goodsName = [
    "Cosmetics and Perfumes",
    "Chemical Goods",
    "Cleaning Products",
    "Quality Food Brands",
  ];
  let goodsElement = [];
  for (let i = 0; i < goods.length; i++) {
    goodsElement[i] = (
      <li className="pb-3 sm:pb-5">
        <span className="font-semibold">{goodsName[i]}: </span>
        {goods[i]}
      </li>
    );
  }
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-businessBanner1 bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] py-6 sm:py-12 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center pb-6 sm:pb-12">
          Fast-Moving Consumer Goods
        </h1>

        <p className="pb-6 sm:pb-12">
          ProDots deals with the wholesale of Fast-Moving Consumer Goods (FMCG),
          offering a diverse range of products including cosmetics, hygienic
          product, perfumes, chemical goods, cleaning products, and a wide
          selection of premium food brands.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold pb-6 sm:pb-12">
          Our Offer:
        </h2>
        <ul className="list-disc pl-5">{goodsElement}</ul>
      </section>
    </main>
  );
}

export default Fmcg;
