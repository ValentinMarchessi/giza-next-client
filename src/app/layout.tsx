import type { Metadata } from "next";
import { Manrope, Lexend } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Giza",
  description: "Talent Adquisition Assisstance",
};

type Props = {
  children: React.ReactNode;
  navbar: React.ReactNode;
  hero: React.ReactNode;
  search: React.ReactNode;
};

export default function RootLayout({
  children,
  navbar,
  hero,
  search,
}: Readonly<Props>) {
  return (
    <html lang="en" className={`${lexend.variable} ${manrope.variable}`}>
      <body>
        {navbar}
        <main className="flex flex-col">
          {hero}
          {search}
        </main>
      </body>
    </html>
  );
}
