import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

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
    <nav className="sticky w-full h-16 px-6 py-2 flex gap-10 items-center">
      <Link className="flex flex-row align-middle items-center" href={"/"}>
        <Image
          src="/pyramid-of-giza-minimalistic-logo.svg"
          alt="Giza Pyramid Company Logo"
          width={SIZE}
          height={SIZE}
          id="logo"
        />
        <h1 className="text-2xl font-semibold">Giza</h1>
      </Link>
      <ul className="flex gap-6 text-t3 font-semibold">
        {links.map(([href, label]) => (
          <li key={`${label}.${href}`}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
