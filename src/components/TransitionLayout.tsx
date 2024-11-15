"use client";

import useIsomorphicLayoutEffect from "@/hooks/isomorphicEffect";
import gsap from "gsap";

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useIsomorphicLayoutEffect(() => {
    gsap.to(".slideIn", {
      duration: 1,
      scaleY: 0,
      ease: "power2.inOut",
      delay: 0.5,
    });
  });

  return (
    <>
      <div className="slideIn fixed left-0 top-0 z-50 h-screen w-screen origin-top bg-[#141515]"></div>
      {children}
    </>
  );
}
