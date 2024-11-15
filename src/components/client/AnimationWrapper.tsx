"use client";

import useIsomorphicLayoutEffect from "@/hooks/isomorphicEffect";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

// import { AnimatePresence } from "framer-motion";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  // const ctx = React.useRef();
  // const smoother = useRef();
  const pathName = usePathname();

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useIsomorphicLayoutEffect(() => {
    //Get height of children
    let height = 0,
      child: any;
    const childElements =
      document.getElementById("smooth-content")?.children ?? [];
    for (child in childElements) {
      height += child.offsetHeight;
    }

    //Set height of content
    document
      .getElementById("smooth-content")
      ?.style.setProperty("--smooth-content-height", height + "px");

    const ctx = gsap.context(() => {
      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    });

    return () => ctx.revert();
  }, [pathName]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default AnimationWrapper;
