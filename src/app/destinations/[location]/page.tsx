import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ContactForm from "@/components/client/ContactForm";

export async function generateStaticParams() {
  const locations = [
    "bali",
    "swiss",
    "maldives",
    "norway",
    "iceland",
    "japan",
    "greece",
    "italy",
    "france",
    "spain",
    "africa",
    "norway",
  ];
  return locations.map((location) => ({ location }));
}

const Page = async ({ params }: { params: { location: string } }) => {
  try {
    const data = (await import(`./${params.location}.json`)).default;
    const { images, content } = data;

    return (
      <div className="flex flex-col items-center justify-center gap-5">
        {/* Heading */}
        <h1 className="relative flex h-[50vh] w-full items-center justify-center">
          <Image
            src={images.heading}
            alt=""
            fill={true}
            className="absolute inset-0 -z-10 object-cover"
          />
          <div className="bg-[#000000da] p-4 text-center font-[Heading] text-4xl text-white">
            {content.heading}
            <br /> <span className="text-2xl">{content.subheading}</span>
          </div>
        </h1>

        <div className="flex flex-col items-center justify-center gap-12 px-40">
          {/* Intro */}
          <p className="text-lg">{content.intro}</p>

          {/* First Part */}
          <h3 className="text-center text-2xl font-bold">
            {content.information.heading}
          </h3>
          <div className="flex items-stretch gap-10">
            <Image src={images.description} alt="" width={500} height={500} />
            <ul className="list-none">
              {content.information.data.map(
                (item: { head: string; text: string }, index: number) => {
                  return (
                    <li className="my-2 list-inside" key={index}>
                      <span className="font-bold">{item.head}</span> {item.text}
                    </li>
                  );
                },
              )}
            </ul>
          </div>

          {/* Second Part */}
          <h3 className="text-center text-2xl font-bold">
            {content.adventure.heading}
          </h3>
          <ul
            className="flex list-none flex-col gap-5 px-40"
            style={{
              backgroundImage: "url('/bg.svg')",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            {content.adventure.data.map(
              (item: { head: string; text: string }, index: number) => {
                return (
                  <li
                    key={index}
                    className={"flex list-inside items-baseline gap-4"}
                  >
                    <div className="w-[400px]">
                      <span className="font-bold">{item.head}</span> {item.text}
                    </div>
                    <Image
                      src={images.adventure[index]}
                      alt=""
                      width={300}
                      height={300}
                    />
                  </li>
                );
              },
            )}
          </ul>

          {/* Third Part */}
          <h3 className="text-2xl font-bold">{content.more.heading}</h3>

          <div className="flex items-start gap-10">
            {content.more.text.map(
              (item: { head: string; text: string }, index: number) => {
                return (
                  <div className="w-[400px]" key={index}>
                    <Image
                      src={images.secondary[index]}
                      alt=""
                      width={400}
                      height={400}
                    />
                    <p>
                      <span className="font-bold">{item.head}</span> {item.text}
                    </p>
                  </div>
                );
              },
            )}
          </div>

          {/* Contact */}
          <h3 className="text-2xl font-bold">{content.contact}</h3>
          <div className="mb-10 flex w-1/2 flex-col-reverse items-center justify-center gap-4">
            <ContactForm messageTemplate={params.location} />
            <p className="text-center">
              Have questions or need assistance planning? <br />
              Our travel experts are here to assist you.
            </p>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
};

export default Page;
