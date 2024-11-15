import Image from "next/image";
import NewsletterForm from "./client/NewsletterForm";

import FacebookIcon from "public/icons/facebook-dark.svg";
import TwitterIcon from "public/icons/twit.svg";
import YoutubeIcon from "public/icons/youtube-dark.svg";
import InstagramIcon from "public/icons/instagram-dark.svg";

import MailSVG from "public/icons/mail.svg";
import PhoneSVG from "public/icons/phone.svg";
import PinSVG from "public/icons/pin.svg";

const Links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Journeys",
    url: "/journeys",
  },
  {
    text: "Destinations",
    url: "/destinations",
  },
  {
    text: "Contact",
    url: "/contact",
  },
  {
    text: "Terms",
    url: "/terms-and-conditions",
  },
  {
    text: "Privacy",
    url: "/privacy-policy",
  },
];

const SM = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    link: "https://www.facebook.com/AabeeResortsTravels/",
    size: 20,
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    link: "https://twitter.com/bhalla_dushyant",
    size: 20,
  },
  {
    name: "Youtube",
    icon: YoutubeIcon,
    link: "https://www.youtube.com/@aabee_holidays6018",
    size: 20,
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/aabee_holidays/",
    size: 20,
  },
];

const Footer = () => {
  const LinkList = Links.map((link) => {
    return (
      <a
        rel="prefetch"
        href={link.url}
        key={link.text}
        className="hover:underline"
      >
        {link.text}
      </a>
    );
  });

  const SMList = SM.map((sm) => {
    return (
      <a
        key={sm.name}
        href={sm.link}
        className="p-2 transition hover:scale-110 max-[300px]:flex"
      >
        <Image src={sm.icon} alt="sm.name" width={sm.size} height={sm.size} />
      </a>
    );
  });

  return (
    <footer className="bg-[var(--background-dark)] py-8 text-[var(--secondary)]">
      <div className="flex items-center justify-around gap-5 max-[940px]:flex-col">
        <div className="flex flex-col items-center">
          <div className="">
            <Image src="/logo-white.svg" alt="Aabee" width={400} height={400} />
          </div>
          <p className="text-center font-heading text-lg italic">
            Where Luxury meets opulence
          </p>
          <div className="flex">{SMList}</div>
        </div>
        <div className="flex flex-col items-start justify-start pb-4">
          <div>
            <h1 className="font-heading text-lg max-[505px]:text-center">
              Subscribe to our Newsletter
            </h1>
            <NewsletterForm />
          </div>
          {/* <div>
              <h1 className="font-heading text-lg max-[505px]:text-center">
                Follow Us
              </h1>
              <div className="flex items-center gap-2">{SMList}</div>
            </div> */}
          <br />
          <div className="max-[505px]:text-center">
            <h1 className="font-heading text-lg">Contact Us</h1>
            <a
              href="mailto:info@aabee.in"
              className="flex items-center gap-2 max-[505px]:justify-center"
            >
              <Image src={MailSVG} alt="E:" width={20} height={20} />
              info@aabee.in
            </a>
            <a
              href="tel:01147454545"
              className="flex items-center gap-2 max-[505px]:justify-center"
            >
              <Image src={PhoneSVG} alt="Ph:" width={20} height={20} />
              011 4745 4545
            </a>
            <div className="flex items-center gap-2 max-[505px]:justify-center max-[350px]:gap-0">
              <Image src={PinSVG} alt="At:" width={20} height={20} />
              <a
                href="https://maps.app.goo.gl/JYGSBTMMeJd8WLYX7"
                className="hover:underline"
              >
                Pitampura, Delhi
              </a>
              <div>|</div>
              <a
                href="https://maps.app.goo.gl/Na2VBS5kcBhm8gFf9"
                className="hover:underline"
              >
                Gurgaon, Haryana
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 flex items-center justify-between border-t border-[var(--secondary)] px-5 py-4 max-[650px]:flex-col">
        <p className="text-center">© All rights reserved Aabee, 2023</p>
        <div className="flex flex-wrap justify-center gap-2">{LinkList}</div>
      </div>
    </footer>
  );
};

export default Footer;
