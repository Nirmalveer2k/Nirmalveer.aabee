"use client";

import useIsomorphicLayoutEffect from "@/hooks/isomorphicEffect";
import { gsap } from "gsap";
import Image from "next/image";

import Lake from "public/images/hero/Lake.webp";
import Beach from "public/images/hero/Beach.webp";
import Cliff from "public/images/hero/Cliff.webp";
import Person from "public/images/hero/Person.webp";
import Food from "public/images/hero/Food.webp";
import Sky from "public/images/hero/Sky.webp";
import Tower from "public/images/hero/Tower.webp";

const OpeningWindow = () => {
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger.scrollerProxy("#window", { pinType: "fixed" });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#window",
          start: "top",
          end: "bottom bottom",
          pin: "#sliders",
          // pinType: "fixed",
          scrub: true,
          // markers: true,
        },
      });

      tl.fromTo(
        "#left",
        {
          y: "-1px",
          x: "0%",
          backgroundColor: "#000",
        },
        {
          x: "-100%",
          backgroundColor: "#0a0a0a",
        },
      );

      tl.fromTo(
        "#right",
        {
          y: "-1px",
          x: "0%",
          backgroundColor: "#000",
        },
        {
          x: "100%",
          backgroundColor: "#0a0a0a",
        },
        "<",
      );
    });

    return () => {
      ctx.revert();
      // alert("reverted");
    };
  }, []);

  return (
    <div
      className="pointer-events-none relative h-[200vh] w-screen bg-black"
      id="window"
    >
      <div id="sliders">
        <div
          className="grid-rows-8 absolute left-0 top-0 z-10 grid h-screen w-2/5 grid-cols-6 gap-4 p-4"
          id="left"
        >
          <div className="relative col-span-3 col-start-4 row-span-5 overflow-clip">
            <Image
              src={Food}
              alt=""
              fill={true}
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
          <div className="relative col-span-3 row-span-5 row-start-3 overflow-clip">
            <Image
              src={Cliff}
              alt=""
              fill={true}
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
          <div className="relative col-span-3 col-start-4 row-span-3 row-start-6 overflow-clip">
            <Image
              src={Tower}
              alt=""
              fill={true}
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
        </div>

        <div
          className="absolute right-0 top-0 z-10 grid h-screen w-2/5 grid-cols-5 grid-rows-6 gap-4 p-4"
          id="right"
        >
          <div className="relative col-span-2 row-span-3 overflow-clip">
            <Image
              src={Person}
              alt=""
              fill={true}
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
          <div className="relative col-span-3 col-start-1 row-span-3 row-start-4 overflow-clip">
            <Image
              src={Lake}
              alt=""
              fill={true}
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
          <div className="relative col-span-2 col-start-3 row-span-2 row-start-2 overflow-clip">
            <Image
              src={Sky}
              alt=""
              fill={true}
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
          <div className="relative col-span-2 col-start-4 row-span-3 row-start-4 overflow-clip">
            <Image
              src={Beach}
              alt=""
              fill={true}
              placeholder="blur"
              className="absolute object-cover"
            />
          </div>
        </div>

        <div className="sticky top-0 z-0 flex h-screen w-screen items-center justify-center overflow-clip">
          <video loop autoPlay muted>
            <source src="/test1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default OpeningWindow;
