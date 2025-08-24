"use client";

import Image from "next/image";
import { testimonials } from "../utils/globalData";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Education = () => {
  return (
    <section className="bg-gray-900 p-6 py-15 flex flex-col items-center text-center">
      <h1 className="text-white text-4xl font-bold mb-10">Education</h1>

      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 md:gap-20 my-5">
        <div className="p-3 border-[12px] border-[#5c3a21] bg-[#f5f3ef] rounded-xl shadow-lg inline-block max-w-[90vw]">
          <Image
            src="https://nahom-others.s3.us-east-2.amazonaws.com/Humber+Polytechnic+Diploma.jpg"
            alt="Diploma Image"
            width={450}
            height={450}
            className="rounded-lg w-[350px] h-auto sm:w-[400px] md:w-[550px] lg:w-[650px]"
          />
        </div>

        <div className="w-[90vw] sm:w-[350px] md:w-[400px] lg:w-[500px] flex-shrink-0">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Education;
