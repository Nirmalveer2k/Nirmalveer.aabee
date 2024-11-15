import Link from "next/link";
import ImageSwitcher from "./client/ImageSwitcher";

const Journeys = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20 pt-16"
      style={{
        backgroundImage: "url('images/journeys/bg.avif')",
        backgroundSize: "cover",
      }}
    >
      <h1 className="mb-6 flex flex-col text-center font-heading text-4xl">
        Embark on a <span className="font-bold">Curated Journey</span> of
        Discovery
      </h1>
      <ImageSwitcher images={Images} />
      <div className="flex w-[40vw] flex-col items-center justify-center gap-5 bg-white px-8 py-4 drop-shadow-2xl max-[900px]:w-[80vw] max-[900px]:px-4">
        <p>
          Unveil a world of enchantment as we craft a personalized voyage that
          transcends expectations. With meticulous attention to detail&lsquo; we
          invite you to explore new horizons like never before.
        </p>
        <Link href="/journeys">
          <button className="mx-[auto] border border-black px-4 py-2 transition hover:scale-110 hover:bg-black hover:text-white">
            Journeys
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journeys;

const Images = [
  "/images/journeys/Coloseum.webp",
  "/images/journeys/Food.webp",
  "/images/journeys/Hall.webp",
  "/images/journeys/Fountain.webp",
  "/images/journeys/Ocean.webp",
];
