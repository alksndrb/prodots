import Image from "next/image";
import React from "react";
import img from "@/public/contact.jpg";
import Link from "next/link";

function HomeContact({ contactText }) {
  return (
    <section className="w-100% sxl:w-[1160px] py-6 sm:py-12 sxl:mx-auto px-3  sxl:px-0">
      <Link href={contactText.link} className="group ">
        <div
          className=" sm:p-1 sm:bg-gradient-to-r sm:from-primary/0 sm:to-50% sm:to-primary h-[250px] w-full
          sm:group-hover:bg-primary 
          "
        >
          <div className="h-[242px] w-full relative">
            <div
              className="h-[242px] bg-dark/40 sm:bg-transparent absolute top-0 bottom-0 left-0 right-0 sm:bg-gradient-to-r sm:from-light sm:to-light/0 sm:to-70% -z-0
              sm:group-hover:bg-gradient-to-r
              sm:group-hover:from-dark/60 
              
              "
            />
            <Image
              src={img}
              className="h-full object-cover object-right -z-10"
              alt="img"
            />
            <h3
              className="text-light sm:text-dark absolute bottom-1/2 translate-y-1/2 left-[20px] sm:left-[100px] text-2xl sm:text-3xl font-semibold
            sm:group-hover:text-light text-left
            "
            >
              {contactText.white}
              <span className="text-primary">{contactText.orange}</span>
            </h3>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default HomeContact;
