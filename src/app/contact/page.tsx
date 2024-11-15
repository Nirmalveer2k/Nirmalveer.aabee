import ContactForm from "@/components/client/ContactForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AABEE",
};

const Contact = () => {
  return (
    <main className="relative flex flex-col items-center justify-center gap-10 py-10">
      <Image
        src={"/images/contact-bg.avif"}
        alt=""
        fill={true}
        className="absolute left-0 top-0 object-cover object-top"
      />
      <h1 className="z-10 font-heading text-6xl">Get in Touch</h1>
      <div className="">
        <ContactForm messageTemplate="" />
      </div>
    </main>
  );
};

const Page = () => {
  return <Contact />;
};

export default Page;
