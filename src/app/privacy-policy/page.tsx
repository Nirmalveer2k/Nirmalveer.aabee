import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <main className="mb-10 flex w-full flex-col justify-center px-80 py-10 max-[1050px]:px-2">
      <h1 className="text-center font-heading text-4xl font-black">
        Privacy Policy
      </h1>

      <p className="text-right italic text-gray-400">
        Last Updated: November 30&lsquo; 2023
      </p>

      <p>
        At AABEE, we are committed to safeguarding your privacy and protecting
        your personal information. This privacy policy explains how we collect,
        use, and protect the information you provide to us through our website.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold">
        Information We Collect
      </h2>
      <ol className="list-inside list-decimal">
        <li className="pl-5">
          <span className="font-bold">Contact Form</span>: When you use our
          contact form to reach out to us, we may collect the following
          information:
          <ul className="list-inside list-disc">
            <li className="pl-5">Your Name</li>
            <li className="pl-5">Your Mobile Number</li>
            <li className="pl-5">Your Email Address</li>
          </ul>
          <p>Any additional information you choose to provide in the message</p>
        </li>
        <li className="pl-5">
          <span className="font-bold">Newsletter Sign-Up</span>: If you
          subscribe to our newsletter, we will collect the following
          information:
          <ul className="list-inside list-disc">
            <li className="pl-5">Your Email Address</li>
          </ul>
        </li>
      </ol>
      <h2 className="mt-10 font-heading text-xl font-semibold">
        How We Use Your Information
      </h2>

      <p>We use the information you provide for the following purposes:</p>
      <ol className="list-inside list-decimal">
        <li className="pl-5">
          To respond to your inquiries submitted through our contact form.
        </li>
        <li className="pl-5">
          To send you our newsletter and updates if you have subscribed to it.
        </li>
        <li className="pl-5">
          To improve our website and services based on your feedback.
        </li>
      </ol>
      <h2 className="mt-10 font-heading text-xl font-semibold">
        Protection of Your Information
      </h2>
      <p>
        We take the security and protection of your information seriously. We
        have implemented appropriate technical and organizational measures to
        safeguard your data against unauthorized access, alteration, disclosure,
        or destruction.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold">
        Sharing Your Information
      </h2>

      <p>
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties. Your information is only accessible to authorized
        personnel within our organization for the purposes mentioned above.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold">Opting Out</h2>

      <p>
        If you no longer wish to receive our newsletter or any communications
        from us, you may opt out at any time by using the unsubscribe link
        provided in our emails or by contacting us directly.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold">Cookies</h2>

      <p>
        Our website may use cookies to enhance your browsing experience. These
        cookies do not collect personal information and are used for statistical
        and analytical purposes only.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold">
        Third-Party Links
      </h2>

      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these external
        sites. We encourage you to review the privacy policies of those
        websites.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold">
        Changes to this Privacy Policy
      </h2>

      <p>
        We may update this privacy policy to reflect changes in our practices or
        for legal reasons. The most recent version of the privacy policy will
        always be available on our website.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold">Contact Us</h2>

      <p>
        If you have any questions or concerns about our privacy policy or how we
        handle your personal information, please contact us at{" "}
        <a
          className="font-bold text-blue-700 hover:underline"
          href="mailto:info@aabee.in"
        >
          info@aabee.in
        </a>
        .
        <br />
        <br />
        Thank you for choosing AABEE. Your privacy is important to us, and we
        appreciate your trust.
      </p>
    </main>
  );
};

const Page = () => {
  return <PrivacyPolicy />;
};

export default Page;
