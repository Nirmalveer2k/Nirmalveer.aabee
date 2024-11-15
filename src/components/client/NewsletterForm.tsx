"use client";

import { useState, useRef } from "react";

const NewsletterForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "IDLE" | "PENDING" | "SUCCESS" | "ERROR"
  >("IDLE");

  function statusMessage() {
    switch (status) {
      case "IDLE":
        return (
          <p>
            {" "}
            <br />{" "}
          </p>
        );
      case "PENDING":
        return <p className="text-[#888]">Sending...</p>;
      case "SUCCESS":
        return <p className="text-green-500">You are now signed up!</p>;
      case "ERROR":
        return <p className="text-red-500">Some error occured. Try again!</p>;
      default:
        return (
          <p>
            {" "}
            <br />{" "}
          </p>
        );
    }
  }

  async function handleEmailCollection(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email === "") {
      (formRef.current?.children[0] as HTMLElement).focus();
      return;
    }

    setStatus("PENDING");
    const dbResponse = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (dbResponse.ok) {
      setEmail("");
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <>
      <form
        onSubmit={handleEmailCollection}
        className="flex flex-wrap justify-center gap-2"
        ref={formRef}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-sm border border-[var(--secondary)] bg-transparent p-2 text-[var(--secondary)]"
        />
        <button
          type="submit"
          className="rounded-sm border border-[var(--secondary)] bg-transparent p-2 transition hover:bg-white hover:text-black"
        >
          Submit
        </button>
      </form>
      <div>{statusMessage()}</div>
    </>
  );
};

export default NewsletterForm;
