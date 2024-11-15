"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";

type statusType = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

function statusMessage(status: statusType) {
  switch (status) {
    case "IDLE":
      return (
        <p>
          <br />
        </p>
      );
    case "PENDING":
      return <p className="text-[#888]">Sending...</p>;
    case "SUCCESS":
      return (
        <p className="text-green-500">Sent! Thank you for contacting us!</p>
      );
    case "ERROR":
      return <p className="text-red-500">Some error occured. Try again!</p>;
    default:
      return (
        <p>
          <br />
        </p>
      );
  }
}

const ContactForm = ({ messageTemplate }: { messageTemplate: string }) => {
  messageTemplate = useSearchParams().get("message") ?? messageTemplate;
  const formRef = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<statusType>("IDLE");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    message: messageTemplate,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //  Form Validation
    if (formRef.current !== null) {
      if (formData.name === "") {
        (formRef.current.children[0] as HTMLElement).focus();
        return;
      } else if (formData.email === "") {
        (formRef.current.children[1] as HTMLElement).focus();
        return;
      } else if (formData.mobile === "") {
        (formRef.current.children[2] as HTMLElement).focus();
        return;
      } else if (formData.message === "") {
        (formRef.current.children[3] as HTMLElement).focus();
        return;
      }
    }
    setStatus("PENDING");

    // Email Submission
    let emailResCode = 0;

    emailjs
      .sendForm(
        "service_24baa4g",
        "template_6fjkhuf",
        formRef.current!,
        "hBWAAEG6IYugb6vo8",
      )
      .then(
        (resp) => {
          setStatus("SUCCESS");
          setFormData({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });
        },
        (err) => {
          setStatus("ERROR");
        },
      );

    // Newsletter Submission
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: formData.email }),
      });
      if (!res.ok) {
        await fetch("/api/newsletter", {
          method: "POST",
          body: JSON.stringify({ email: formData.email }),
        });
      }
    } catch (err) {
      console.log("Newsletter registration failure");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form
      className="flex w-[500px] flex-col gap-2 bg-white p-10 drop-shadow-2xl max-[500px]:w-[100vw] max-[400px]:px-5"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="border-b border-[#888] px-4 py-2 focus:outline-none"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border-b border-[#888] px-4 py-2 focus:outline-none"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile No."
        className="border-b border-[#888] px-4 py-2 focus:outline-none"
        onChange={handleChange}
        value={formData.mobile}
      />
      <textarea
        placeholder="Query"
        name="message"
        className="resize-y border  border-[#888] px-4 py-2 focus:outline-none"
        onChange={handleChange}
        value={formData.message}
      ></textarea>
      <div className="text-center">{statusMessage(status)}</div>
      <button className="mx-[auto] mt-2 w-1/2 border border-black px-4 py-2 text-black transition hover:scale-110 hover:bg-black hover:text-white focus:outline-none">
        Submit
      </button>
      <div className="mt-2 text-center">
        Or contact us directly at:{" "}
        <a
          href="mailto:info@aabee.in"
          className="text-blue-800 hover:underline"
        >
          info@aabee.in
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
