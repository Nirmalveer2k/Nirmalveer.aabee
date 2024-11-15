"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function switchMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  const path = usePathname();
  return (
    <nav className="bg-black text-white">
      {/* Desktop */}
      <div className="flex h-fit w-full items-center justify-around gap-12 bg-black px-4 py-12 font-heading text-xl text-white max-[600px]:hidden">
        {/* Left Nav Elements */}
        <div className="flex gap-5">
          <a rel="prefetch" href="/journeys" className="group relative">
            Journeys
            {path === "/journeys" && (
              <span className="absolute left-0 top-full h-[1px] w-full bg-white" />
            )}
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white group-hover:animate-highlight"></span>
          </a>
          <a rel="prefetch" href="/destinations" className="group relative">
            Destination
            {path === "/destinations" && (
              <span className="absolute left-0 top-full h-[1px] w-full bg-white" />
            )}
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white group-hover:animate-highlight"></span>
          </a>
          <a rel="prefetch" href="https://www.inbound.aabee.in" className="group relative">
            Visit India
            {path === "https://www.inbound.aabee.in" && (
              <span className="absolute left-0 top-full h-[1px] w-full bg-white" />
            )}
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white group-hover:animate-highlight"></span>
          </a>
        </div>

        {/* Title */}
        <a rel="prefetch" href="/">
          <Image
            className="mx-2 hover:cursor-pointer"
            src="/logo-white.svg"
            alt="Aabee"
            sizes="(max-width: 200px)"
            width={300}
            height={300}
          />
        </a>
        {/* <h1 className="self-center font-[Heading] text-4xl">AABEE</h1> */}

        {/* Right Nav Elements */}
        <div className="flex gap-5">
        <a rel="prefetch" href="https://www.inbound.aabee.in" className="group relative">
            Our Story
            {path === "https://www.inbound.aabee.in" && (
              <span className="absolute left-0 top-full h-[1px] w-full bg-white" />
            )}
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white group-hover:animate-highlight"></span>
          </a>
          <a rel="prefetch" href="/about" className="group relative">
            About
            {path === "/about" && (
              <span className="absolute left-0 top-full h-[1px] w-full bg-white" />
            )}
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white group-hover:animate-highlight"></span>
          </a>
          <a rel="prefetch" href="/contact" className="group relative">
            Contact
            {path === "/contact" && (
              <span className="absolute left-0 top-full h-[1px] w-full bg-white" />
            )}
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white group-hover:animate-highlight"></span>
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex h-fit w-full items-center justify-between gap-12 bg-white px-8 py-4 text-black min-[600px]:hidden">
        <Image src="/logo-black.svg" alt="Aabee" width={150} height={150} />
        <button onClick={switchMenu}>
          <Image
            src="/icons/menu-icon.svg"
            alt="Menu"
            height={30}
            width={30}
          ></Image>
        </button>
      </div>

      {/* Menu */}
      {menuOpen && (
        <div className="fixed left-0 top-0 z-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-4 bg-white text-2xl text-black">
          <button onClick={switchMenu} className="absolute right-10 top-10">
            <Image src="/icons/cross-icon.svg" alt="X" width={30} height={30} />
          </button>
          {[
            {
              link: "/",
              text: "Home",
            },
            {
              link: "/about",
              text: "About",
            },
            {
              link: "https://www.inbound.aabee.in",
              text: "Our Story",
            },
            {
              link: "/journeys",
              text: "Journeys",
            },
            {
              link: "/destinations",
              text: "Destinations",
            },
            {
              link: "https://www.inbound.aabee.in",
              text: "Visit India",
            },
            {
              link: "/contact",
              text: "Contact",
            },
          ].map((linkItem, index) => {
            return (
              <a
                rel="prefetch"
                key={index}
                href={linkItem.link}
                className="hover:underline"
                onClick={switchMenu}
              >
                {linkItem.text}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
