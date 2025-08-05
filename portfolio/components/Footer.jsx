"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 border-t-5 border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-lg">&copy; {new Date().getFullYear()} Nahom Mesele. All rights reserved.</p>
        
        <div className="flex gap-5">
          {/* GitHub */}
          <a
            href="https://github.com/Nahom-M?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition"
          >
            <FaGithub className="h-15 w-15" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nahommesele/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin className="h-15 w-15" />
          </a>

          {/* Email */}
          <a
            href="mailto:nahommese@gmail.com"
            aria-label="Email"
            className="hover:text-gray-400 transition"
          >
            <MdEmail className="h-15 w-15" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
