"use client";

import Image from "next/image";
import { useEffect } from "react";

const Clients = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      // scroller.setAttribute("data-animated", "true");

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner!.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        (duplicatedItem as HTMLElement).setAttribute("aria-hidden", "true");
        scrollerInner!.appendChild(duplicatedItem);
      });
    });
  }, []);

  return (
    <>
      <h1 className="z-20 mb-4 font-heading text-4xl font-bold text-white">
        Our Clients
      </h1>
      <div
        className="scroller"
        data-direction="left"
        data-speed="slow"
        data-animated="true"
      >
        <div className="scroller__inner">
          <Image
            src="/images/clients/bector.jpg"
            alt=""
            width={160}
            height={40}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/clients/bikaner.avif"
            alt=""
            width={160}
            height={50}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/clients/EO.png"
            alt=""
            width={160}
            height={100}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/clients/haldiram.png"
            alt=""
            width={160}
            height={50}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/clients/HFCL.png"
            alt=""
            width={120}
            height={50}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/clients/jaquar.svg"
            alt=""
            width={160}
            height={75}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/clients/khanna.avif"
            alt=""
            width={120}
            height={40}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/clients/rk.png"
            alt=""
            width={160}
            height={20}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/clients/Trident.svg"
            alt=""
            width={160}
            height={20}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/clients/YPO.webp"
            alt=""
            width={160}
            height={20}
            className="overflow-clip object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Clients;
