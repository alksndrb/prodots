import React from "react";

function Fmcg() {
  const goods = [
    "We offer a wide array of cosmetics, hygienic product and fragrances, catering to various preferences and styles such as Nivea, Dove, Adidas, Fa, Garnier, OldSpice, etc.",
    "Our range of chemical goods includes products for both personal and industrial use, meeting safety and quality standards – Household chemistry such as AmbiPur, Ajax, Ariel, Calgon, Cif, Henkel, Lenor.",
    "Keep your spaces clean and hygienic with our effective cleaning solutions - hygienic product such as Always, Blendamed, Colgate, Gilette, Johnson, Pantete, Axe, Rexona, Pampers, Shauma, Signal, Wilkinson.",
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
      <li>
        <span className="font-semibold">{goodsName[i]}: </span>
        {goods[i]}
        <br />
        <br />
      </li>
    );
  }
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-businessBanner1 bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] pt-10 pb-20 sm:pb-40 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-4xl font-semibold text-center">
          Fast-Moving Consumer Goods
        </h1>
        <br />
        <p>
          ProDots deals with the wholesale of Fast-Moving Consumer Goods (FMCG),
          offering a diverse range of products including cosmetics, hygienic
          product, perfumes, chemical goods, cleaning products, and a wide
          selection of premium food brands.
        </p>
        <br />
        <h2 className="text-2xl font-semibold">Our Offer:</h2>
        <ul className="list-disc pl-5">
          <br />
          {goodsElement}
        </ul>
      </section>
    </main>
  );
}

export default Fmcg;
