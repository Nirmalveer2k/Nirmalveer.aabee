"use client";

import { useState, useEffect } from "react";
import TrashIcon from "public/icons/trash.svg";
import Image from "next/image";

const Newsletter = () => {
  const [emails, setEmails] = useState<{ id: string; email: string }[]>([]);

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const dbResponse = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: formData.email }),
      });

      const db = await dbResponse.json();
      console.log(db);
      if (db.emailExists !== null) {
        setFormData({ email: "" });
        alert("Email already exists");
        return;
      }
      setEmails([db, ...emails]);
      setFormData({ email: "" });
    } catch (error) {
      console.log(error);
    }
  };

  async function getEmails() {
    try {
      const dbResponse = await fetch("/api/newsletter", {
        method: "GET",
      });

      const db = await dbResponse.json();
      console.log(db);
      setEmails(db);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const dbResponse = await fetch("/api/newsletter", {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
      });

      console.log("deleted", dbResponse);

      const newEmails = emails.filter((item) => item.id !== id);
      setEmails(newEmails);
    } catch (error) {
      console.log(error);
    }
  };

  const copyList = () => {
    let emailList = "";
    emails.forEach((item) => {
      emailList += item.email + ", ";
    });

    navigator.clipboard.writeText(emailList);
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <main>
      <div className="flex flex-grow flex-col items-center justify-center py-10">
        <button
          onClick={copyList}
          className="border px-4 py-2 active:bg-slate-400"
        >
          Copy Email List
        </button>
        <form onSubmit={handleSubmit} className="my-4">
          <input
            type="email"
            value={formData.email}
            onChange={handleFormChange}
            className="border-b border-black px-4 py-2"
          />
          <button type="submit">Add Email</button>
        </form>
        {emails.map((items, index) => {
          return (
            <div key={index} className="mt-2 flex w-1/5 justify-between border">
              <div className="py-2 pl-4">{items.email}</div>
              <button
                className="border bg-red-600 px-2 py-2 hover:bg-red-700"
                onClick={() => handleDelete(items.id)}
              >
                <Image src={TrashIcon} alt="Del" width={20} height={20} />
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Newsletter;
