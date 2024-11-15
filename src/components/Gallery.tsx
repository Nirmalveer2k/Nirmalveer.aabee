"use client";

import Link from "next/link";
import Image from "next/image";

import NewsletterForm from "./client/NewsletterForm";
import { useRef } from "react";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import useIsomorphicLayoutEffect from "@/hooks/isomorphicEffect";

import Boats from "public/images/gallery/Boats.webp";
import City from "public/images/gallery/City.webp";
import CliffCity from "public/images/gallery/CliffCity.webp";
import Gates from "public/images/gallery/Gates.webp";
import House from "public/images/gallery/House.webp";
import LakeCity from "public/images/gallery/LakeCity.webp";
import Mountain from "public/images/gallery/Mountain.webp";
import Trees from "public/images/gallery/Trees.webp";

const Gallery = () => {
  const container = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    // const galleryContainer = document.getElementById("gallery");

    gsap.registerPlugin(ScrollToPlugin);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#gallery",
          end: "bottom",
          start: "top",
          scrub: true,
          // markers: true,
        },
      });

      tl.to("#gallery", {
        backgroundColor: "#333",
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="grid h-[150vh] w-full grid-cols-10 grid-rows-10 gap-4 bg-[#0a0a0a] p-4 text-white"
      id="gallery"
      ref={container}
    >
      <div className="group relative col-span-3 col-start-4 row-span-3 h-full w-full overflow-hidden">
        <Image
          src={Trees}
          alt=""
          sizes="100vw"
          style={{
            height: "130%",
            width: "100%",
          }}
          placeholder="blur"
          quality={100}
          className="absolute bottom-0 z-10 w-full scale-150 object-cover object-bottom group-hover:-z-10 group-hover:opacity-0"
          data-speed="0.8"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-black text-xl transition ease-in-out ">
          ..
        </div>
      </div>

      <div className="group relative col-span-3 col-start-1 row-span-4 row-start-3 overflow-hidden">
        <Image
          src={Gates}
          alt=""
          sizes="100vw"
          style={{
            height: "130%",
            width: "100%",
          }}
          placeholder="blur"
          quality={100}
          className="absolute -bottom-36 z-10 h-[200%] w-full object-cover group-hover:-z-10 group-hover:opacity-0"
          data-speed="0.8"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-5 bg-black px-8 text-center text-xl transition ease-in-out">
          We redefine travel as an art form. With a legacy of crafting
          unforgettable experiences, we invite you to learn more about our story
          and commitment on our About page.
          <Link href={"/about"}>
            <button className=" rounded-sm border px-4 py-2 transition hover:cursor-pointer hover:bg-white hover:text-black">
              About Us
            </button>
          </Link>
        </div>
      </div>

      <div className="group relative col-span-5 col-start-4 row-span-3 row-start-4 overflow-hidden">
        <Image
          src={Mountain}
          alt=""
          sizes="100vw"
          style={{
            height: "130%",
            width: "100%",
          }}
          placeholder="blur"
          quality={100}
          className="absolute -bottom-10 z-10  w-full object-cover object-bottom group-hover:-z-10 group-hover:opacity-0"
          data-speed="0.8"
        />
        <div className="relative left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-5 bg-black px-10 text-center text-xl transition ease-in-out">
          <div className="flex items-start">
            <span className="font-[Heading] text-8xl">&</span>
            <span className="text-left">
              Escape the Ordinary, Elevate Your Travel <br />
              Craft Your Unforgettable Experience with <br />
              AABEE
            </span>
          </div>
          <Link href={"/journeys"}>
            <button className=" rounded-sm border px-4 py-2 transition hover:cursor-pointer hover:bg-white hover:text-black">
              Start Crafting Your Journey
            </button>
          </Link>
        </div>
      </div>

      <div className="group relative col-span-3 col-start-7 row-span-3 row-start-1 overflow-hidden">
        <Image
          src={City}
          alt=""
          sizes="100vw"
          style={{
            height: "130%",
            width: "100%",
          }}
          placeholder="blur"
          quality={100}
          className="absolute -bottom-20 z-10 h-[160%] w-full object-cover group-hover:-z-10 group-hover:opacity-0"
          data-speed="0.8"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black transition ease-in-out ">
          Dolortur
        </div>
      </div>

      <div className="group relative col-span-3 col-start-3 row-span-3 row-start-7 overflow-hidden">
        <Image
          src={CliffCity}
          alt=""
          sizes="100vw"
          style={{
            height: "130%",
            width: "100%",
          }}
          placeholder="blur"
          quality={100}
          className="absolute -bottom-20 z-10 h-[160%] w-full object-cover group-hover:-z-10 group-hover:opacity-0"
          data-speed="0.8"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black transition ease-in-out ">
          <span className="mb-4 text-lg">Sign Up to Our Newsletter</span>
          <NewsletterForm></NewsletterForm>
        </div>
      </div>

      <div className="group relative col-span-2 col-start-9 row-span-4 row-start-5 overflow-clip">
        <Image
          src={Boats}
          alt=""
          sizes="100vw"
          style={{
            height: "120%",
            width: "100%",
          }}
          placeholder="blur"
          className="absolute -bottom-20 z-10 group-hover:-z-10 group-hover:opacity-0"
          data-speed="0.8"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-black text-center text-xl transition ease-in-out ">
          <span>
            Celebrating <span className="inline text-3xl">30 Years</span> <br />{" "}
            of Excellence
          </span>
          <Link href={"/about"}>
            <button className=" rounded-sm border px-4 py-2 transition hover:cursor-pointer hover:bg-white hover:text-black">
              Explore Our Story
            </button>
          </Link>
        </div>
      </div>

      {/*  */}
      <div className="group relative col-span-3 col-start-6 row-span-4 row-start-7 overflow-hidden">
        <Image
          src={LakeCity}
          alt=""
          width={100}
          sizes="100vw"
          style={{
            height: "130%",
            width: "100%",
          }}
          placeholder="blur"
          className="absolute -bottom-20 z-10 object-cover object-left group-hover:-z-10 group-hover:opacity-0"
          data-speed="0.8"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-black text-center text-xl transition ease-in-out ">
          <Link href={"/contact"}>
            <button className="rounded-sm border px-4 py-2 transition hover:bg-white hover:text-black">
              Get In Touch
            </button>
          </Link>
          Let&apos;s Plan Your Next Adventure <br />
          Together
        </div>
      </div>

      {/*  */}
      <div className="group relative col-span-2 row-span-3 row-start-7 overflow-hidden">
        <Image
          src={House}
          alt=""
          sizes="100vw"
          style={{
            height: "130%",
            width: "100%",
          }}
          placeholder="blur"
          quality={100}
          className="relative bottom-2 z-10 h-[160%] w-full object-cover group-hover:-z-10 group-hover:opacity-0"
          data-speed="0.8"
        />
        <div className="absolute left-0 top-0 z-0 flex h-full w-full flex-col items-center justify-center gap-2 bg-black p-2 text-center text-xl">
          See us through <br />
          Our Client&apos;s Eyes
          <button
            className="rounded-sm border px-4 py-2 transition hover:bg-white hover:text-black"
            onClick={() => {
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: "#testimonials", offsetY: 50 },
              });
            }}
          >
            See Testimonials
          </button>
        </div>
      </div>
      <div className="row-start-9 col-span-2 col-start-9 row-span-2 flex items-center justify-center font-[Heading] text-4xl tracking-widest"></div>
      <div className="row-start-10  col-span-5 col-start-1 flex items-center justify-center text-center font-[Heading] text-5xl tracking-widest">
        ELEVATE YOUR EXPECTATIONS
      </div>
      <div className="col-start-10  row-span-3 row-start-1 whitespace-nowrap text-center  font-[Heading] text-6xl"></div>
      <div className="col-span-3  col-start-1 row-span-2 row-start-1 flex items-center justify-center font-[Heading]  text-5xl tracking-[1rem]">
        EXPERIENCE
      </div>
      <div className="col-span-1 col-start-9 row-start-4 flex items-center justify-center font-[Heading] text-8xl tracking-widest"></div>
    </div>
  );
};

export default Gallery;
