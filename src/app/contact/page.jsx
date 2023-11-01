import React from "react";

function Contact() {
  return (
    <main className="flex flex-col items-center justify-center pt-[100px]">
      <div className="h-[30vh] w-full bg-contactBanner bg-cover bg-primary"></div>
      <section className="w-full sxl:w-[1160px] py-6 sm:py-12 px-3 sxl:px-0 m-auto text-base lg:text-lg">
        <h1 className="text-2xl sm:3x lg:text-4xl font-semibold text-center pb-6 sm:pb-12">
          Contact
        </h1>

        <p className="pb-3 sm:pb-6">
          ProDots is your one-stop solution for electronic devices. Get in touch
          with us today and discover how we can empower your technological
          journey and contribute to your growth. We thank you for choosing
          ProDots, where we&apos;re not just selling electronics; we&apos;re
          delivering excellence.
        </p>

        <p className="pb-3 sm:pb-6">
          On the other hand, ProDots is your trusted source for FMCG products.
          Contact us today and let us support you in fulfilling your product
          needs.
        </p>
        <div className="font-semibold">Address</div>
        <div>
          1115 Budapest, Hungary Bartok Bela street 106-110 B flat 1st floor,
          door 6
        </div>
        <div className="font-semibold">E-mail</div>
        <div>office@prodots.eu</div>
      </section>
    </main>
  );
}

export default Contact;
