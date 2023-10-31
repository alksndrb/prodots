import React from "react";

function About() {
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-aboutBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] pt-10 pb-20 sm:pb-40 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-4xl font-semibold text-center">About Us</h1>
        <br />
        <p>
          Prodots is a company engaged in the wholesale of electronic devices
          and equipment. At ProDots, we&apos;re passionate about delivering
          top-tier electronics that set you on the path to success. Also, we are
          driven by innovation and a strong commitment to delivering exceptional
          electronic solutions to meet the evolving needs of our customers.
        </p>
        <br />
        <p>
          On the other hand, ProDots deals with the wholesale of Fast-Moving
          Consumer Goods (FMCG), offering a diverse range of products including
          cosmetics, perfumes, chemical goods, cleaning products, and a wide
          selection of pre mium food brands.
        </p>
        <br />
        <br />

        <h2 className="text-3xl font-semibold text-center">Our vision</h2>
        <br />
        <p>
          Our vision is straightforward yet ambitious: to be your go-to source
          for cutting-edge electronic devices: smartphones, tablets,
          accessories, audio equipment, projectors, wearables, smart tools,
          cameras, drones, data storage solutions, consumer electronics, and IT
          devices. Also, our vision is clear and forward-thinking: to be your
          premier destination for the latest and most innovative electronic
          devices, all while offering competitive prices that keep you ahead of
          the curve. At ProDots, we aim to be your partner in technological
          advancement, facilitating your journey to success. We are dedicated to
          setting new standards in the industry, and our fresh and dynamic
          approach sets us apart.
        </p>
        <br />
        <p>
          On the other hand, our mission is to make high-quality FMCG products
          accessible to businesses, retailers, and distributors. We aim to
          deliver exceptional goods that enhance the daily lives of consumers,
          whether it&apos;s through beauty products, household essentials, or
          their favorite food and beverages.
        </p>
      </section>
    </main>
  );
}

export default About;
