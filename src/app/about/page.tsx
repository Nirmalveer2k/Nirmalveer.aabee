import { Metadata } from "next";
import { Heading } from "@/components/client/Animated";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Aabee",
};

const About = () => {
  const style = {
    backgroundImage: "url(images/about-bg.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main>
      <div
        style={style}
        className="flex h-fit w-[100vw] flex-col items-center justify-center py-64"
      >
        <div className="mb-64 font-heading text-sm italic text-[var(--background)]">
          <Heading />
        </div>
        <div className="w-4/5 bg-[#ffffffcc] px-10 py-24 backdrop-blur-md max-[700px]:w-full max-[700px]:px-5">
          <p className="mb-10">
            <span className="font-bold">Why Luxury? Why Travel? </span>
            At Aabee&#44; we believe that life&apos;s most enriching moments
            come from the journey itself. We&apos;re passionate about luxury
            travel because it&apos;s not just about reaching a destination;
            it&apos;s about experiencing the extraordinary along the way.
            It&apos;s about savoring the finer details&#44; immersing yourself
            in culture&#44; and creating indelible memories.
          </p>
          <p className="mb-10">
            <span className="font-bold">Our Approach to Travel</span> We
            don&apos;t merely plan trips; we craft curated journeys. Our
            approach is founded on three pillars: Personalization&#44;
            Exclusivity&#44; and Authenticity. Every itinerary we design is as
            unique as our clients&#44; meticulously tailored to your desires. We
            grant you access to exclusive experiences&#44; hidden gems&#44; and
            top-notch service&#44; ensuring every moment resonates with
            authenticity.
          </p>
          <p className="mb-10">
            <span className="font-bold">Meet Our Team</span> Our dedicated team
            of experts is the heart and soul of Aabee. With a passion for travel
            and a commitment to excellence&#44; they&apos;re your personal
            guides on your journey. From experienced travel designers to
            on-the-ground concierge services&#44; we are here to make your
            travel dreams a reality.
          </p>
          <p>
            <span className="font-bold">Our History</span> Aabee was founded on
            a vision to redefine luxury travel. For 30 years&#44; our journey
            has been marked by a commitment to innovation and an unwavering
            dedication to our clients. Over the years&#44; we&apos;ve had the
            privilege of curating extraordinary experiences for countless
            travelers&#44; and we continue to push the boundaries of luxury
            travel today. Discover more about our story&#44; team&#44; and
            philosophy on our About page. Join us in creating moments that
            linger in your heart forever.
          </p>
        </div>
      </div>
      <div className="relative h-[30vh] w-full bg-transparent max-[475px]:h-[25vh] max-[390px]:h-[20vh]">
        <Image
          src="/images/globalListBanner.png"
          alt=""
          fill={true}
          className="absolute left-0 top-0 object-contain max-[600px]:object-cover max-[600px]:object-left min-[824px]:object-cover"
        />
      </div>
    </main>
  );
};

const Page = () => {
  return <About />;
};

export default Page;
