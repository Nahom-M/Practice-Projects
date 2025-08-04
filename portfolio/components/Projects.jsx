"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "../utils/globalData";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const { title, description, image, link } = projects[current];
  const isInternal = link.startsWith("/");

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-12">Recent Projects</h1>

      <div className="relative flex flex-col md:flex-row items-center gap-20 transition-all duration-500">
        <img
          src={image}
          alt={title}
          className="w-full md:w-[70%] h-[400px] object-cover rounded-2xl border-2 shadow-xl"
        />
        <div className="md:w-[30%] text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
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
          className="px-6 py-3 text-lg rounded bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          ⬅ Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 text-lg rounded bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          Next ➡
        </button>
      </div>
    </section>
  );
};

export default Projects;
