import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center space-x-10 p-4 border-t bg-gray-900">
      <a
        href="https://github.com/Nahom-M"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
          className="w-8 h-8"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/nahommesele/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          className="w-8 h-8"
        />
      </a>
      <a href="mailto:nahommese@gmail.com">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          alt="Mail"
          className="w-8 h-8"
        />
      </a>
    </footer>
  );
};

export default Footer;
