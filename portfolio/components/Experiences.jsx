"use client";
import { useState } from "react";
import { experiences } from "@/utils/globalData";

const FlipCard = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-7/10 h-72 mx-auto mb-10 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center text-white backface-hidden hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-extrabold drop-shadow-lg">{title}</h2>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-2xl shadow-2xl p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
          <p className="text-xl font-medium text-gray-800 leading-relaxed">
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
      <h1 className="text-5xl font-bold text-center my-10">Experiences</h1>
      
      {/* Map over experiences */}
      {experiences.map((exp, index) => (
        <FlipCard
          key={index}
          title={exp.title}
          description={exp.description}
        />
      ))}
    </div>
  );
};

export default Experiences;
