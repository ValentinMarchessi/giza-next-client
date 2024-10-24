import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import ThemeSwitch from "./ThemeSwitch";
import DebugIcon from "./Icons/DebugIcon";

const SIZE = 64;

export default function Navbar() {
  const links: [href: string, label: string][] = useMemo(
    () => [
      ["/", "Home"],
      ["/jobs", "Jobs"],
      ["/employers", "Employers"],
      ["/companies", "Companies"],
      ["/advisor", "Career Advice"],
    ],
    []
  );

  return (
    <nav
      className="sticky top-0 bg-white dark:bg-black-bg 
    border-b border-neutral-200  dark:border-black-950
    shadow-sm dark:shadow-black-700 w-full 
    h-16 px-2 md:px-6 py-2 mb-6 md:mb-12 flex gap-10 items-center"
    >
      <Link className="flex flex-row align-middle items-center" href={"/"}>
        <Image
          src="/pyramid-of-giza-minimalistic-logo.svg"
          alt="Giza Pyramid Company Logo"
          width={SIZE}
          height={SIZE}
          id="logo"
        />
        {/* <h1 className="text-2xl font-semibold">Giza</h1> */}
      </Link>
      {/* DESKTOP LAYOUT */}
      <div
        className="desktop-display hidden grow
      md:flex flex-row align-middle items-center"
      >
        <ul className="flex gap-6 text-t3 font-semibold">
          {links.map(([href, label]) => (
            <li key={`${label}.${href}`}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-6">
          <Link href="/debug" className="group flex align-middle items-center">
            <DebugIcon />
            <span>Debug</span>
          </Link>
          <ThemeSwitch />
          {/* TODO: Add auth check to show user settings or Log in Link */}
          <Link href="/signup">Log In</Link>
        </div>
      </div>
    </nav>
  );
}
