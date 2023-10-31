/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        gray: "#747474",
        primary: "#ffa500",
      },
      fontFamily: {
        pop: ["var(--font-pop)"],
        in: ["var(--font-in)"],
      },
      screens: {
        sxl: "1180px",
      },
      backgroundImage: {
        footer: "url('../../public/footer.jpg')",
        banner: "url('../../public/banner.png')",
        aboutBanner: "url('../../public/about-banner.jpg')",
        businessBanner1: "url('../../public/business-banner-1.jpg')",
        businessBanner2: "url('../../public/business-banner-2.jpg')",
        contactBanner: "url('../../public/contact-banner.jpg')",
        teamBanner: "url('../../public/team-banner.jpg')",
      },
    },
  },
  plugins: [],
};
