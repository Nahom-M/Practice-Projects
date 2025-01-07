import React from "react";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
import { testimonials } from "../utils/globalData";
import Experiences from "./Experiences";

const Main = () => {
  return (
    <main>
      <div>
        {/*Experiences*/}
        <Experiences />
        {/*Awards*/}
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </main>
  );
};

export default Main;
