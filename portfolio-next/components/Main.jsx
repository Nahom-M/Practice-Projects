import React from "react";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
import { testimonials } from "../utils/globalData";
import Experiences from "./Experiences";

const Main = () => {
  return (
    <main>
      <div className="bg-standard">
        {/*Experiences*/}
        <Experiences />
        {/*Awards*/}
        <AnimatedTestimonials testimonials={testimonials} />
        {/* Retrun */}
      </div>
    </main>
  );
};

export default Main;
