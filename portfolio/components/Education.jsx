"use client";

import Image from "next/image";
import { testimonials } from "../utils/globalData";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Education = () => {
  return (
    <section className="bg-gray-900 p-6 py-15 flex flex-col items-center text-center">
      <h1 className="text-white text-4xl font-bold mb-10">Education</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-30 my-5">
        <div className="p-3 border-[12px] border-[#5c3a21] bg-[#f5f3ef] rounded-xl shadow-lg inline-block">
          <Image
            src="https://nahom-others.s3.us-east-2.amazonaws.com/Humber+Polytechnic+Diploma.jpg"
            alt="Diploma Image"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>
        <div>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Education;