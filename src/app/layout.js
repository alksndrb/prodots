import { Inter, Poppins, Quicksand, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { cx } from "../utils";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const pop = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-pop",
});

export const metadata = {
  title: "ProDots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(pop.variable, inter.variable, "font-pop bg-light")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
