"use client";

import { backgroundText } from "@/utils/globalData";

const Background = () => {
  return (
    <div className="bg-gray-900 text-white py-10 text-center">
      <h3 className="py-5 text-4xl">Background</h3>
      <p className="text-lg flex flex-wrap justify-center gap-1 font-medium group cursor-pointer max-w-7/10 mx-auto text-center">
        {backgroundText.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block group-hover:animate-wave"
            style={{ animationDelay: `${i * 0.03}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Background;
