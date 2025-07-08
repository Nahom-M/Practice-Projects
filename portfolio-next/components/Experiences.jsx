"use client";

import React, { useState } from "react";
import { tabs } from "@/utils/globalData";

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleChange = (newIndex) => {
    if (newIndex === activeIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsFading(false);
    }, 300);
  };

  const activeTabData = tabs[activeIndex];

  return (
    <div className="w-screen h-[70vh] flex flex-col bg-standard text-gray-200">
      {/* Title */}
      <h3 className="text-5xl md:text-6xl mt-10 mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
        Experiences
      </h3>

      {/* Carousel Navigation - Responsive layout */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 gap-4 md:gap-0 mb-4">
        <button
          onClick={() =>
            handleChange((activeIndex - 1 + tabs.length) % tabs.length)
          }
          className="text-blue-400 text-lg md:text-xl hover:text-blue-600"
        >
          ← Previous
        </button>

        {/* Spacer on desktop to keep title centered */}
        <div className="hidden md:block md:flex-1" />

        <button
          onClick={() => handleChange((activeIndex + 1) % tabs.length)}
          className="text-blue-400 text-lg md:text-xl hover:text-blue-600"
        >
          Next →
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center bg-standard">
        <div
          className={`text-center space-y-4 px-6 transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-400">
            {activeTabData.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            {activeTabData.time}
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            {activeTabData.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
