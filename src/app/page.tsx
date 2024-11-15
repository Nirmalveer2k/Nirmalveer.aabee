// import Approach from "@/components/Approach";
// import Journeys from "@/components/Journeys";

import Hero from "@/components/Hero";
import Journeys from "@/components/Journeys";
import Partners from "@/components/Partners";
import Testimonails from "@/components/Testimonials";
import Image from "next/image";
import Clients from "@/components/Clients";

import FooterImg from "public/images/footer.webp";

export default function Home() {
  return (
    <>
      <main className="h-fit bg-transparent">
        <Hero />
        {/* <Approach /> */}
        <Journeys />

        <div className="relative">
          <Image
            src={FooterImg}
            alt=""
            fill={true}
            className="absolute left-0 top-0 -z-10 object-cover"
          />
          <div className="flex flex-col items-center justify-center bg-gradient-to-t from-[#0a0a0a] to-transparent">
            <Testimonails />
            <Clients />
            <Partners />
          </div>
        </div>
      </main>
    </>
  );
}
