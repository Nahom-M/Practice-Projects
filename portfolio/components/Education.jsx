"use client";

import { testimonials } from "../utils/globalData";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Education = () => {
  return <section className="bg-gray-900">
    <AnimatedTestimonials testimonials={testimonials} />
  </section>;
};

export default Education;
