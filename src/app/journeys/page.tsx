import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journeys",
  description: "Curated Journeys",
};

function Heading({ heading }: { heading: string }) {
  return (
    <h1 className="select-none text-center font-heading text-8xl font-bold text-white hover:cursor-default max-[380px]:text-7xl">
      {heading.split("").map((letter, index) => {
        return (
          <span className="transition hover:text-[#222]" key={index}>
            {letter}
          </span>
        );
      })}
    </h1>
  );
}

const list = [
  {
    image:
      "https://images.unsplash.com/photo-1519307212971-dd9561667ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Wedding & Honeymoon Getaway",
    link: "/journeys/wedding-n-honeymoon",
    contact: "Hi! I want to organize my wedding and honeymoon vacation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1609776286098-86b0ed4a16d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    title: "Solo Traveller's Escape",
    link: "/journeys/solo",
    contact: "Hi! I would love to go for a solo adventure",
  },
  {
    image: "/images/CulturalImmersion.jpg",
    title: "Cultural Immersion Experience",
    link: "/journeys/culture",
    contact:
      "Hi! I would love to go for a trip to immerse myself in different culture",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    title: "Wellness and Relaxation Retreat",
    link: "/journeys/relaxation",
    contact: "Hi! I would love to go on a relaxation retreat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519021228607-ef6e4c22d821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Adventure Seeker's Expedition",
    link: "/journeys/adventure",
    contact: "Hi! I would love to go on an adventure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Cultural Culinary Tour",
    link: "/journeys/culinary",
    contact: "Hi! I want to go on a culinary tour",
  },
  {
    image:
      "https://qtxasset.com/quartz/qcloud1/media/image/travelagentcentral/1557940433/familyadventuretravel.jpg?VersionId=aqcgSe54ljtA4iZY1_iOOrlZdr8Z0Kn0",
    title: "Family Adventure Retreat",
    link: "/journeys/family",
    contact: "Hi! My family and I would love to go for a Family retreat",
  },
];

const Journeys = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-10 pb-10">
      <div
        className="flex h-[70vh] w-[100vw] items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Heading heading="Curated Journeys" />
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-10 bg-white px-20 max-[850px]:px-10 max-[400px]:px-4">
        <div className="grid h-full w-full grid-cols-2 gap-4 text-white max-[800px]:flex max-[800px]:flex-col ">
          {list.map((item, index) => {
            return (
              <div
                key={index}
                className="relative h-56 transition hover:scale-105"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-0 left-0 w-full text-lg max-[500px]:text-base">
                  <div className="flex h-fit w-full items-center justify-between bg-[#00000088] px-4 py-5 max-[400px]:px-2">
                    <p className="w-fit">{item.title}</p>
                    <a rel="prefetch" href={`/contact?message=${item.contact}`}>
                      <button className="w-fit rounded-sm border border-white px-4 py-2 hover:bg-white hover:text-black max-[400px]:px-2">
                        Contact Us
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex flex-col items-center justify-center text-center text-black">
            <h1 className="text-4xl">Not to your taste?</h1>
            <Link href="/contact">
              <button className="mt-4 border border-black px-4 py-2 text-xl text-black transition hover:bg-black hover:text-white">
                Inquire for More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

const Page = () => {
  return <Journeys />;
};

export default Page;
