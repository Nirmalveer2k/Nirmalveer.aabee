"use client";

import Image from "next/image";
import { useEffect } from "react";

const Partners = () => {
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
        Our Partners
      </h1>
      <div
        className="scroller"
        data-direction="right"
        data-speed="slow"
        data-animated="true"
      >
        <div className="scroller__inner">
          <Image
            src="/images/partners/fs.png"
            alt=""
            width={300}
            height={40}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/dc.svg"
            alt=""
            width={350}
            height={50}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/hyatt.webp"
            alt=""
            width={120}
            height={50}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/lc.png"
            alt=""
            width={100}
            height={33}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/lhw.png"
            alt=""
            width={200}
            height={50}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/ltp.png"
            alt=""
            width={150}
            height={50}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/mi.png"
            alt=""
            width={350}
            height={70}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/mo.png"
            alt=""
            width={120}
            height={30}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/sp.png"
            alt=""
            width={350}
            height={50}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/tm.png"
            alt=""
            width={250}
            height={20}
            className="overflow-clip object-contain"
          />
          <Image
            src="/images/partners/white-postcard.webp"
            alt=""
            width={250}
            height={20}
            className="overflow-clip object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Partners;
