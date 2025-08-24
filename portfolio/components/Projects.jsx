"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "../utils/globalData";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const total = projects.length;

  const handleChange = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(newIndex);
      setFade(true);
    }, 400);
  };

  const handleNext = () => {
    handleChange((current + 1) % total);
  };

  const handlePrev = () => {
    handleChange((current - 1 + total) % total);
  };

  const { title, description, image, link } = projects[current];
  const isInternal = link.startsWith("/");

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center my-10">Recent Projects</h1>

      <div
        className={`relative flex flex-col lg:flex-row items-center gap-12 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        key={current}
      >
        <div className="w-full lg:w-[75%]">
          <img
            src={image}
            alt={title}
            className="w-full h-[500px] object-cover rounded-2xl border-2 shadow-xl"
          />
        </div>

        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <h2 className="text-4xl font-semibold mb-4">{title}</h2>
          <p className="text-lg mb-6">{description}</p>

          {isInternal ? (
            <Link
              href={link}
              className="inline-block px-6 py-3 text-lg font-medium bg-gray-300 text-black rounded-lg hover:bg-gray-200 transition"
            >
              View Project
            </Link>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-lg font-medium bg-gray-300 text-black rounded-lg hover:bg-gray-200 transition"
            >
              View Project
            </a>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-10 gap-6">
        <button
          onClick={handlePrev}
          className="px-6 py-3 text-lg rounded bg-gray-700 text-white hover:bg-gray-600 transition cursor-pointer"
        >
          ⬅ Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 text-lg rounded bg-gray-700 text-white hover:bg-gray-600 transition cursor-pointer"
        >
          Next ➡
        </button>
      </div>
    </section>
  );
};

export default Projects;
