"use client";

import { Draggable, InertiaPlugin } from "gsap/all";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "@/hooks/isomorphicEffect";

gsap.registerPlugin(Draggable, InertiaPlugin);

type Props = {
  images: string[];
};

const ImageSwitcher = ({ images }: Props) => {
  useIsomorphicLayoutEffect(() => {
    var slideDelay = 3;
    var slideDuration = 0.3;
    var wrap = true;

    var slides = document.querySelectorAll(".slide") as NodeListOf<HTMLElement>;
    var prevButton = document.querySelector("#prevButton");
    var nextButton = document.querySelector("#nextButton");
    var progressWrap = gsap.utils.wrap(0, 1);

    var numSlides = slides.length;

    gsap.set(slides, {
      xPercent: (i) => i * 100,
    });

    var wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
    var timer = gsap.delayedCall(slideDelay, autoPlay);

    var animation = gsap.to(slides, {
      xPercent: "+=" + numSlides * 100,
      duration: 1,
      ease: "none",
      paused: true,
      repeat: -1,
      modifiers: {
        xPercent: wrapX,
      },
    });

    var proxy = document.createElement("div");
    var slideAnimation = gsap.to({}, {});
    var slideWidth = 0;
    var wrapWidth = 0;

    var draggable = new Draggable(proxy, {
      trigger: ".slides-container",
      inertia: true,
      onPress: updateDraggable,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX,
      },
    });

    resize();

    window.addEventListener("resize", resize);

    prevButton?.addEventListener("click", function () {
      animateSlides(1);
    });

    nextButton?.addEventListener("click", function () {
      animateSlides(-1);
    });

    function updateDraggable() {
      timer.restart(true);
      slideAnimation.kill();
      this.update();
    }

    function animateSlides(direction: number) {
      timer.restart(true);
      slideAnimation.kill();
      var x = snapX(
        (gsap.getProperty(proxy, "x") as number) + direction * slideWidth,
      );

      slideAnimation = gsap.to(proxy, {
        x: x,
        duration: slideDuration,
        onUpdate: updateProgress,
      });
    }

    function autoPlay() {
      if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
        timer.restart(true);
      } else {
        animateSlides(-1);
      }
    }

    function updateProgress() {
      animation.progress(
        progressWrap((gsap.getProperty(proxy, "x") as number) / wrapWidth),
      );
    }

    function snapX(value: number) {
      let snapped = gsap.utils.snap(slideWidth, value);
      return wrap
        ? snapped
        : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
    }

    function resize() {
      var norm = (gsap.getProperty(proxy, "x") as number) / wrapWidth || 0;

      slideWidth = slides[0].offsetWidth;
      wrapWidth = slideWidth * numSlides;

      wrap ||
        draggable.applyBounds({ minX: -slideWidth * (numSlides - 1), maxX: 0 });

      gsap.set(proxy, {
        x: norm * wrapWidth,
      });

      animateSlides(0);
      slideAnimation.progress(1);
    }
  }, []);

  return (
    <div className="slide-container relative h-[50vh] w-[50vw] overflow-hidden max-[900px]:w-[80vw]">
      <div className="slide-inner relative flex h-full w-full flex-1 overflow-hidden">
        {images.map((image, index) => {
          return (
            <div
              className="slide absolute h-full w-full"
              key={index}
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          );
        })}
      </div>

      {/* Buttons */}
      <div className="relative top-[-20%] z-10 flex justify-between px-5">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffffbf] pb-0.5 text-black hover:scale-110 "
          id="prevButton"
        >
          &larr;
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffffbf] pb-0.5 text-black hover:scale-110 "
          id="nextButton"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageSwitcher;
