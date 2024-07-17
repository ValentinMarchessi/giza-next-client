import Image from "next/image";
import Link from "next/link";

const SIZE = 64;

export default function Navbar() {
  return (
    <nav className="sticky w-full h-16 px-6 py-2 flex gap-10 items-center">
      <div className="flex align-middle items-center">
        <Link href={"/"}>
          <Image
            src="/pyramid-of-giza-minimalistic-logo.svg"
            alt="Giza Pyramid Company Logo"
            width={SIZE}
            height={SIZE}
            id="logo"
          />
          {/* <h1 className="text-2xl font-semibold">Giza</h1> */}
        </Link>
      </div>
      <ul className="flex gap-6 text-t3 font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
        <li>
          <Link href="/employers">Employers</Link>
        </li>
        <li>
          <Link href="/companies">Companies</Link>
        </li>
        <li>
          <Link href="/advisor">Career Advice</Link>
        </li>
      </ul>
    </nav>
  );
}
