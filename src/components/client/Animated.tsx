"use client";

import useIsomorphicLayoutEffect from "@/hooks/isomorphicEffect";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const ListofGreetings = [
  "Hello",
  "नमस्ते",
  "Olá",
  "こんにちは",
  "Guten Tag",
  "您好",
  "Bonjour",
  "안녕하세요",
  "Hola",
  "السلام عليكم",
  "Salve",
  "здравствуйте",
  "dzień dobry",
  "xin chào",
  "Merhaba",
  "سَلام",
];

gsap.registerPlugin(SplitText);

const Greetings = ListofGreetings.map((greeting, index) => {
  return (
    <li key={index} className="Text leading-[150px]">
      {greeting}
    </li>
  );
});

export const Heading = () => {
  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    gsap.utils.toArray(".Text").forEach((text: any, index) => {
      tl.to(".Container", {
        duration: 0.5,
        y: -150 * index,
      });
      const chars = new SplitText(text, { type: "words,chars" }).chars;
      tl.from(chars, {
        opacity: 0,
        stagger: 0.05,
        y: 10,
      });
      tl.to({}, { duration: 2.2 });
    });
  });

  return (
    <div className="h-[150px] overflow-hidden px-4">
      <ul className="Container text-center text-7xl">{Greetings}</ul>;
    </div>
  );
};
