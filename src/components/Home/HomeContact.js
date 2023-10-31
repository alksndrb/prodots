import Image from "next/image";
import React from "react";
import img from "@/public/contact.jpg";
import Link from "next/link";

function HomeContact() {
  return (
    <section className="w-100% sxl:w-[1160px] my-40 sxl:mx-auto px-3  sxl:px-0">
      <Link href="/" className="group">
        <div
          className="p-1 bg-gradient-to-r from-primary/0 to-50% to-primary h-[250px] w-full
           group-hover:bg-primary 
          "
        >
          <div className="h-[242px] w-full relative">
            <div
              className="h-[242px] absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-light to-light/0 to-70% -z-0
              group-hover:bg-gradient-to-r
              group-hover:from-dark/60 
              
              "
            />
            <Image src={img} className="h-full object-cover -z-10" />
            <h3
              className="absolute bottom-1/2 translate-y-1/2 left-[100px] text-3xl font-semibold
            group-hover:text-light 
            "
            >
              Connect with Pro<span className="text-primary">Dots</span>
            </h3>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default HomeContact;
