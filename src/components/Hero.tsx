"use client";

import React from "react";
import Gallery from "./Gallery";
import Image from "next/image";
import Link from "next/link";
import OpeningWindow from "./client/OpeningWindow";
// import SlidingWindows from "./client/SlidingWindows";

// Static Image imports
import Colo from "public/images/hero/Coloseum.webp";
import Lake from "public/images/hero/Lake.webp";
import City from "public/images/gallery/City.webp";

function MobileHero() {
  return (
    <div className="animate-fadeIn relative flex h-[75vh] flex-col items-center justify-center bg-white px-20 text-black min-[950px]:hidden">
      <div className="absolute left-0 top-0 grid h-full w-full grid-cols-5 grid-rows-6 gap-4 p-4">
        <div className="relative col-span-2 row-span-3">
          <Image
            src={Colo}
            // src=""
            alt="mathew"
            fill={true}
            placeholder="blur"
            className="absolute object-cover"
          />
        </div>
        <div className="relative col-span-3 col-start-1 row-span-3 row-start-4">
          <Image
            src={Lake}
            // src=""
            alt="vlad"
            fill={true}
            placeholder="blur"
            className="absolute object-cover"
          />
        </div>
        <div className="col-span-3 col-start-3 row-span-3 row-start-1 flex flex-col items-start justify-center border border-black px-5">
          <h1 className="font-heading text-4xl">Travel With Aabee</h1>
          <p>Where Luxury meets Opulence</p>
          <button className="w-fit  border border-black px-4 py-2 hover:bg-black hover:text-white">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
        <div className="relative col-span-2 col-start-4 row-span-3 row-start-4">
          <Image
            src={City}
            alt=""
            fill={true}
            className="absolute object-cover"
          />
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <>
      <div className="max-[950px]:hidden">
        {/* <div className="sticky h-[400vh]">
          <div className="absolute right-0 top-0 h-full">
            <img
              src="/hero.avif"
              className="Middle sticky top-0 -z-10 h-[100vh] w-[100vw] object-cover"
            />
          </div>
          <div className="right-0 top-0 h-full">
            <SlidingWindows />
          </div>
        </div> */}

        <OpeningWindow />

        <Gallery />
      </div>
      <MobileHero />
    </>
  );
};

export default Hero;
