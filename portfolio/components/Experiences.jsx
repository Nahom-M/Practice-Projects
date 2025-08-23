"use client";
import { useState } from "react";
import { experiences } from "@/utils/globalData";

const FlipCard = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="
        w-11/12 h-56                /* mobile defaults */
        sm:h-60
        md:w-55/100 md:h-72         /* restore your desktop sizes */
        mx-auto mb-10 perspective cursor-pointer
      "
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center text-white backface-hidden hover:scale-105 transition-transform duration-300">
          <h2 className="
              text-2xl sm:text-3xl md:text-4xl
              font-extrabold drop-shadow-lg
              text-center px-3
              leading-tight tracking-tight
              break-words text-pretty
            ">
            {title}
          </h2>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-2xl shadow-2xl p-4 md:p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
          <p className="
              text-base sm:text-lg md:text-xl
              font-medium text-gray-800
              leading-snug md:leading-relaxed
              px-2 md:px-4
              break-words text-pretty
            ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center my-10">
        Experiences
      </h1>

      {experiences.map((exp, index) => (
        <FlipCard key={index} title={exp.title} description={exp.description} />
      ))}
    </div>
  );
};

export default Experiences;
