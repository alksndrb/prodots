import React from "react";

function ElectronicDevices() {
  const devices = [
    "Our mobile phone offerings encompass all the leading brands and models, from premium devices to those that offer exceptional value for money.",
    "In addition to mobile phones, we offer a wide range of tablets tailored to different needs, from business use to entertainment.",
    "Health monitoring and connectivity are key features of today's smartwatches, and we provide the latest models that meet these needs.",
    "Immerse yourself in superior sound with our premium audio equipment.",
    "Elevate your presentations and entertainment with cutting-edge projectors.",
    "Stay informed and connected with our smartwatches and wearables.",
    "Simplify your tasks and enhance productivity with our smart tools.",
    "Capture life's moments with our advanced cameras and drones.",
    "Safeguard your digital assets with our reliable storage solutions.",
    "Elevate your lifestyle and entertainment with our diverse range of consumer electronics.",
    "Stay at the forefront of technology with our efficient and high-performance IT devices.",
    "We also offer a rich selection of accessories and equipment for electronic devices, including cases, screen protectors, chargers, and more.",
  ];
  const devicesName = [
    "Mobile Phones",
    "Tablets",
    "Smartwatches",
    "Audio Equipment",
    "Projectors",
    "Wearables",
    "Smart Tools",
    "Cameras and Drones",
    "Data Storage Solutions",
    "Consumer Electronics",
    "IT Devices",
    "Accessories and Equipment",
  ];
  let devicesElement = [];
  for (let i = 0; i < devices.length; i++) {
    devicesElement[i] = (
      <li>
        <span className="font-semibold">{devicesName[i]}: </span>
        {devices[i]}
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
          Electronic Devices
        </h1>
        <br />
        <p>
          Prodots is a company engaged in the wholesale of electronic devices
          and equipment. At ProDots, we&apos;re passionate about delivering
          top-tier electronics that set you on the path to success. Also, we are
          driven by innovation and a strong commitment to delivering exceptional
          electronic solutions to meet the evolving needs of our customers.
        </p>
        <br />
        <h2 className="text-2xl font-semibold">Our Product Portfolio:</h2>
        <ul className="list-disc pl-5">
          <br />
          {devicesElement}
        </ul>
      </section>
    </main>
  );
}

export default ElectronicDevices;
