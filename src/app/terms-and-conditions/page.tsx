import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions",
};

const TermsConditions = () => {
  return (
    <main className="mb-10 flex flex-col justify-center px-80 py-10 max-[1050px]:px-4">
      <h1 className="text-center font-heading text-4xl font-bold">
        Terms and Conditions
      </h1>

      <p className="text-right italic text-gray-400">
        Last Updated: November 1&lsquo; 2023
      </p>

      <h2 className="mt-5 font-heading text-xl font-bold">
        Acceptance of Terms
      </h2>

      <p>
        Welcome to AABEE (&quot;we&quot;&#44; &quot;us&quot;&#44; or
        &quot;our&quot;). By accessing and using our website&#44; you agree to
        comply with and be bound by these Terms and Conditions
        (&quot;Terms&quot;). If you do not agree with these Terms&#44; please do
        not use our website.
      </p>

      <h2 className="mt-5 font-heading text-xl font-bold">User Eligibility</h2>

      <p>
        You must be 10 years of age or older to use our website. By using our
        website&#44; you represent and warrant that you meet this eligibility
        requirement.
      </p>
      <h2 className="mt-5 font-heading text-xl font-bold">
        User Responsibilities
      </h2>
      <ul className="list-disc">
        <li className="ml-10">
          You agree to use our website for lawful purposes only and in
          compliance with these Terms.
        </li>
        <li className="ml-10">
          You are responsible for maintaining the confidentiality of your
          account login information.
        </li>
        <li className="ml-10">
          You agree not to engage in any activity that may compromise the
          security or integrity of our website.
        </li>
      </ul>

      <h2 className="mt-5 font-heading text-xl font-bold">
        Intellectual Property
      </h2>
      <p>
        All content&#44; trademarks&#44; logos&#44; and intellectual property on
        our website are owned by or licensed to AABEE. You may not use&#44;
        reproduce&#44; or distribute any content from our website without our
        prior written consent.
      </p>

      <h2 className="mt-5 font-heading text-xl font-bold">
        Privacy and Data Collection
      </h2>
      <p>
        Please review our Privacy Policy to understand how we collect&#44;
        use&#44; and protect your personal information.
      </p>

      <h2 className="mt-5 font-heading text-xl font-bold">
        Payments and Transactions
      </h2>

      <p>
        If you make any payments or transactions through our website&#44; you
        agree to the terms and conditions specified in our Payment and
        Transaction Policy.
      </p>

      <h2 className="mt-5 font-heading text-xl font-bold">
        Dispute Resolution
      </h2>

      <p>
        In the event of a dispute between you and AABEE&#44; you agree to
        attempt to resolve the dispute amicably through negotiation and
        mediation. If a resolution cannot be reached&#44; you agree to submit to
        the exclusive jurisdiction of the courts of Delhi&lsquo;India for
        resolution.
      </p>

      <h2 className="mt-5 font-heading text-xl font-bold">
        Limitations of Liability
      </h2>
      <ul className="list-disc">
        <li className="ml-10">
          We provide our website on an &quot;as-is&quot; basis and make no
          representations or warranties regarding its accuracy&#44;
          completeness&#44; or availability.
        </li>
        <li className="ml-10">
          We are not liable for any direct&#44; indirect&#44; incidental&#44;
          consequential&#44; or punitive damages arising from your use of our
          website or any content therein.
        </li>
        <li className="ml-10">
          We do not guarantee the accuracy or reliability of information
          provided on our website.
        </li>
      </ul>
      <h2 className="mt-5 font-heading text-xl font-bold">
        Termination of Accounts
      </h2>
      <p>
        We reserve the right to terminate or suspend your account at our
        discretion&#44; with or without notice&#44; for any violation of these
        Terms or for any other reason.
      </p>

      <h2 className="mt-5 font-heading text-xl font-bold">
        Changes to Terms and Conditions
      </h2>
      <p>
        We may update these Terms at any time. By continuing to use our website
        after changes have been made&#44; you agree to be bound by the revised
        Terms.
      </p>
      <h2 className="mt-5 font-heading text-xl font-bold">
        Governing Law and Jurisdiction
      </h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        Delhi&lsquo;India. Any disputes will be resolved in the courts of
        Delhi&lsquo;India.
      </p>

      <h2 className="mt-5 font-heading text-xl font-bold">
        Contact Information
      </h2>
      <p>
        If you have any questions or concerns about these Terms and
        Conditions&#44; please contact us at{" "}
        <a
          href="mailto:info@aabee.in"
          className="font-bold text-blue-700 hover:underline"
        >
          info@aabee.in
        </a>
        .
      </p>
    </main>
  );
};

const Page = () => {
  return <TermsConditions />;
};

export default Page;
