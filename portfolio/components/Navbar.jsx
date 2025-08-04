"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-6 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">Nahom's Site</Link>
      </div>
      <ul className="flex space-x-6 text-md">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-400">
            Background
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-400">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-400">
            Awards
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
