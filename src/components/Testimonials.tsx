"use client";

// import Image from "next/image";
import { useEffect, useState } from "react";
// import ParallaxText from "./client/Parallax";

const Testimonials = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((testimonialIndex + 1) % TestimonialList.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const Testimonial = TestimonialList.map((testimonial, index) => {
    return (
      <>
        <div
          key={index}
          className="flex h-[200px] w-[400px] flex-col justify-between gap-2 rounded-sm bg-stone-900 p-10 text-center text-white drop-shadow-2xl transition hover:scale-105"
        >
          <p className="text-md transition-all">{testimonial.text}</p>
          <div className="self-end text-lg">{"- " + testimonial.author}</div>
        </div>
      </>
    );
  });

  return (
    <>
      <section
        className="group z-10 flex flex-row items-center justify-center py-10 text-white max-[810px]:flex-col"
        id="testimonials"
      >
        <div className="flex w-fit flex-col items-start justify-center gap-4 max-[500px]:items-center max-[500px]:text-center">
          <h1 className="font-heading text-4xl text-black">
            <span className="font-bold text-black">Discover the World</span>
            <br /> of Luxury Travel <br /> through Our Clients&apos; Eyes
          </h1>
          <p className="w-[400px]">
            Here&apos;s what some of our valued clients have to say about their
            extraordinary journeys with us.
          </p>
          <div className="flex gap-1">
            <button
              className="h-10 w-10 rounded-l-full bg-stone-950 text-white transition hover:scale-110"
              onClick={() => {
                if (testimonialIndex > 0) {
                  setTestimonialIndex(testimonialIndex - 1);
                } else {
                  setTestimonialIndex(TestimonialList.length - 1);
                }
              }}
            >
              {"<"}
            </button>
            <button
              className="h-10 w-10 rounded-r-full bg-stone-950 text-white transition hover:scale-110"
              onClick={() => {
                setTestimonialIndex(
                  (testimonialIndex + 1) % TestimonialList.length,
                );
              }}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="flex gap-2 py-4 transition">
          {Testimonial[testimonialIndex]}
        </div>
      </section>
    </>
  );
};

const TestimonialList = [
  {
    author: "Narinder Bhatia",
    text: "Excellent,,just excellent is the word to describe team AaBee",
  },
  {
    author: "richa luthra",
    text: "Highly recommended....best location of hotels and excellent travel deals. Full assistance during travel to solve any issues.",
  },
  {
    author: "Juju Basu",
    text: "Great service! The team is structured clearly. Communication system is clear and works from get go. From CEO to client managers, everyone takes your call. Stuff gets done.",
  },
  {
    author: "Raghav Khosla",
    text: "Very professional and responsive. Good rates and quality options.",
  },
  {
    author: "Kersi Khambatta",
    text: "Fantastic experience. Wonderful, warm and friendly staff. Efficiency and service 10/10. Highly recommended for anyone who wishes the finest Maldives experience.",
  },
];

export default Testimonials;
