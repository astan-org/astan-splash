"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4 bg-blue-100 backdrop-blur p-10 mt-16 mb-12 rounded-lg shadow-lg"
    >
      {/* Honeypot field for spam */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <input
        name="name"
        placeholder="Your Name"
        required
        className="bg-white/80 backdrop-blur px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="bg-white/80 backdrop-blur px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        className="bg-white/80 backdrop-blur px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      />

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg cursor-pointer hover:opacity-90 transition"
      >
         {status === "sending" ? "Sending…" : status === "success" ? "Sent!" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 mt-2">Thanks! We’ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-2">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
