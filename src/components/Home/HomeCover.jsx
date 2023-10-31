import React from "react";

function HomeCover({ coverText }) {
  return (
    <div className="w-full inline-block">
      <section className="flex flex-col items-start justify-end relative h-[30vh] bg-banner bg-cover bg-right-bottom bg-primary">
        <div className="h-[30vh] w-100% sxl:w-[1160px] sxl:mx-auto px-3 sxl:px-0 flex flex-col items-start justify-center">
          <h1 className="font-semibold text-2xl  sm:text-3xl sm:leading-relaxed  lg:text-4xl lg:leading-relaxed text-light">
            <span>{coverText.text1}&nbsp;</span>
            <span className="block sm:inline">{coverText.text2}</span>
            <span className="block">{coverText.text3}</span>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default HomeCover;
