import React from "react";
import { Pinyon_Script } from "next/font/google";

const pinyon = Pinyon_Script({ weight: "400", subsets: ["latin"] });

const Weds = () => {
  return (
    <>
      <div
        className="flex h-screen w-screen items-center justify-center text-center text-8xl text-[#c3aa51]"
        style={{
          backgroundImage:
            "url(/images/journeys/two/anna-vi-QUi84upBhoc-unsplash.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className={pinyon.className}>
          Me & You <br />
          Just Us Two
        </span>
      </div>
      <div className="flex flex-col items-end p-20 text-lg">
        <p className="w-[400px]">
          Celebrate the beginning of your journey together with a romantic
          honeymoon getaway that sets the stage for a lifetime of love and
          adventure. Whether you envision pristine beaches&lsquo; historic
          cities&lsquo; or secluded mountain retreats&lsquo; our curated
          honeymoon experiences promise to ignite the flames of romance and
          create unforgettable memories.
        </p>
        <p>
          Choose from an array of dreamy destinations that cater to every
          romantic aspiration. Bask in the sun-kissed splendor of tropical
          paradises like the Maldives&lsquo; Bali&lsquo; or the Seychelles.
          Alternatively&lsquo; immerse yourselves in the culture and history of
          romantic cities like Paris&lsquo; Venice&lsquo; or Kyoto. Your
          honeymoon destination is the canvas for your love story.
        </p>
        <p>
          Indulge in luxury and intimacy with handpicked accommodations that
          cater to couples. From overwater bungalows with private decks to
          boutique hotels nestled in historic neighborhoods&lsquo; each property
          is chosen for its romantic ambiance. Imagine waking up to stunning
          ocean views&lsquo; unwinding in private hot tubs&lsquo; or enjoying
          candlelit dinners under the stars.
        </p>
        <p>
          Create unforgettable moments with a curated selection of activities
          tailored to romance. Enjoy leisurely beach walks&lsquo; private sunset
          cruises&lsquo; or horseback rides along scenic trails. Explore
          historic landmarks hand in hand or embark on thrilling adventures like
          snorkeling&lsquo; hot air balloon rides&lsquo; or couples&apos; spa
          treatments. Your honeymoon is a tapestry of experiences that celebrate
          your love.
        </p>
        <p>
          Savor the flavors of love with exquisite cuisine that tantalizes your
          taste buds. Indulge in candlelit dinners featuring local delicacies
          and world-class wines. From beachfront seafood feasts to
          Michelin-starred dining&lsquo; each meal is a celebration of your
          love. Whether you&apos;re sharing a gourmet picnic or sipping
          champagne in a rooftop restaurant&lsquo; every bite is a memory.
        </p>
      </div>
    </>
  );
};

export default Weds;
