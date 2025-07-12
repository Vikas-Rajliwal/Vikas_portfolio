"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name.value,
      reply_to: formData.email.value,
      message: formData.message.value,
    };

    emailjs
      .send(
        "service",     // e.g., 'service_xyz'
        "template",    // e.g., 'template_abc'
        templateParams,
        "000000"      // e.g., 'user_xxxxxxxxx'
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Message sent!");
          setFormData(defaultFormState); // clear form
        },
        (err) => {
          console.error("Email sending failed:", err);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: { value: e.target.value, error: "" },
            })
          }
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: { value: e.target.value, error: "" },
            })
          }
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: { value: e.target.value, error: "" },
            })
          }
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
