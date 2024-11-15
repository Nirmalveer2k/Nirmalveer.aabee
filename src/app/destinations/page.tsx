import Link from "next/link";
import Image from "next/image";
import locations from "./locations.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Curated Destinations",
};

const Location = () => {
  return (
    <main>
      <div className="my-10 flex flex-col items-center justify-center gap-5 px-20 py-10 max-[650px]:px-8">
        <div className="grid-rows-12 grid h-full w-full grid-cols-2 gap-8 max-[800px]:flex max-[800px]:flex-col max-[650px]:gap-6">
          <div className="col-start-2 row-span-1 row-start-1 px-8 text-lg max-[650px]:px-4">
            Explore our carefully chosen locations&lsquo; each one a work of art
            in itself. From the sun-drenched beaches of Bali to the majestic
            peaks of the Swiss Alps&lsquo; we at Aabee provide you a portal to
            the most sought-after spots in the world. Have a look into some
            uncharted territories to discover a wealth of opportunities&lsquo;
            and let your wanderlust lead you on your next excursion.
          </div>
          {l}
          <div className="row-start-11 relative row-span-1 flex flex-col items-center justify-center gap-4 py-10 text-center text-2xl">
            Didn&apos;t find what you were looking for?
            <Link href="/contact">
              <button className="border border-black px-4 py-2 text-lg hover:bg-black hover:text-white">
                Inquire for more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

const l = locations.map((location, index) => {
  return (
    <div
      className="relative z-0 row-span-2 flex h-[400px] w-full flex-col items-start justify-end gap-4 max-[650px]:justify-end"
      key={index}
    >
      <Image
        src={location.image}
        alt=""
        fill={true}
        quality={80}
        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 70vw"
        className="absolute left-0 top-0 -z-10 object-cover"
      />
      <div className="bg-[#00000099] p-8 text-white max-[650px]:p-4">
        <h1 className="flex items-center justify-around text-2xl">
          {location.title}{" "}
          {/* <Link href={`/destinations/${location.link}`}> */}
          <a
            rel="prefetch"
            href={`/contact?message=Hi! I would like to travel to ${location.title}`}
          >
            <button className="border border-white px-4 py-2 text-lg transition hover:scale-105 hover:bg-white hover:text-black">
              Contact Us
            </button>
          </a>
        </h1>
        <p className="text-center">{location.desc}</p>
      </div>
    </div>
  );
});

const Page = () => {
  return <Location />;
};

export default Page;
