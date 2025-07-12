"use client";

import Image from "next/image";
import { testimonials } from "../utils/globalData";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Education = () => {
  return (
    <section className="bg-gray-900 p-6 py-15 flex flex-col items-center text-center">
      <h1 className="text-white text-4xl font-bold mb-10">Education</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
        <p className="text-white text-lg max-w-md">
          My diploma that I obtained at Humber Polytechnic
        </p>
        <Image
          src="https://nahom-others.s3.us-east-2.amazonaws.com/Humber+Polytechnic+Diploma.jpg"
          alt="Diploma Image"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>

      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default Education;