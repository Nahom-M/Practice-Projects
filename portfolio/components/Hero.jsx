import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamCollision";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";

const Hero = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="items-center justify-center text-center">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3">
            Hi, My Name is{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">
              Nahom
            </span>
          </h3>
          <p className="text-md sm:text-2xl md:text-3xl font-bold">
            I'm A Computer Programming Student
          </p>
        </div>
      </BackgroundBeamsWithCollision>
      <HeroHighlight>
        <h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          I am a dedicated and enthusiastic software developer with a strong
          passion for{" "}
          <Highlight className="text-standard dark:text-white">
            web development, full-stack technologies, and problem-solving.
          </Highlight>
        </h1>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
