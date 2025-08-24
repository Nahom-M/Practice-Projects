"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <button
          className="text-xl font-bold cursor-pointer hover:text-gray-400"
          onClick={() => {
            window.scrollTo({ top: "#main", behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
          }}
        >
          Nahom's Portfolio
        </button>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul
          className={`md:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="hover:text-gray-400">
            <Link href="#background">Background</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="#awards">Education</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="#experiences">Experiences</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
