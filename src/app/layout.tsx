import type { Metadata } from "next";
import { Manrope, Lexend, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const lexend = Lexend({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});
const manrope = Manrope({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giza",
  description: "Talent Adquisition Assisstance",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${manrope.variable} ${roboto.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
