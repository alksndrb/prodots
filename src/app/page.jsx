import React from "react";
import HomeCover from "../components/Home/HomeCover";
import HomeAbout from "../components/Home/HomeAbout";
import HomeBusiness from "../components/Home/HomeBusiness";
import HomeContact from "../components/Home/HomeContact";

function Home() {
  const coverText = {
    text1: "We don't just sell products",
    text2: "we deliver excellence",
  };
  const aboutTile1 = {
    title: "Our Commitment",
    text: "Quality and reliability are the cornerstones of our operations. Our customer support team is here to offer expert guidance, ensuring you make informed choices aligned with your unique needs.",
  };

  const aboutTile2 = {
    title: "Wholesale Opportunities",
    text: "For bulk orders, our reputation as a trusted wholesaler is well-established. We offer competitive pricing to meet your business requirements.",
  };
  const businessText = {
    title: "Business",
    linkTitle1: "Electronic Devices",
    link1: "/business/electronic-devices",
    linkTitle2: "Fast-Moving Consumer Goods",
    link2: "/business/fmcg",
  };
  const contactText = {
    white: "Connect with Pro",
    orange: "Dots",
    link: "/contact",
    heading: "Experience Innovation with ProDots - Explore Our Products Now!",
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

export default Home;
