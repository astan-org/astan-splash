"use client";

import { useEffect, useState } from "react";

export const TOPICS = [
  { value: "pilot", label: "Pilot with us — platforms" },
  { value: "govern", label: "Govern your agents — enterprise" },
  { value: "partner", label: "Partner with us — channel and reseller" },
  { value: "join", label: "Join us — careers" },
] as const;

export default function ContactForm({
  defaultTopic = "pilot",
}: {
  defaultTopic?: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [topic, setTopic] = useState(defaultTopic);

  // The four engagement CTAs link to /contact#pilot, #govern, #partner, #join.
  // Preselect the matching topic so the door the visitor picked is preserved.
  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "");
    if (TOPICS.some((t) => t.value === fromHash)) setTopic(fromHash);
  }, []);

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
          topic: formData.get("topic"),
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

  // AST-08: square fields, 1px hairline, warm white surface, no radius, no shadow.
  const field =
    "h-11 w-full border border-hairline bg-card px-3.5 text-[14px] text-ink placeholder:text-muted focus:border-teal focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="max-w-[520px]">
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="space-y-5">
        <div>
          <label
            htmlFor="topic"
            className="eyebrow mb-2 block text-muted"
          >
            What brings you here
          </label>
          <select
            id="topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={`${field} appearance-none`}
          >
            {TOPICS.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="eyebrow mb-2 block text-muted">
            Name
          </label>
          <input id="name" name="name" required className={field} />
        </div>

        <div>
          <label htmlFor="email" className="eyebrow mb-2 block text-muted">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
          />
        </div>

        <div>
          <label htmlFor="message" className="eyebrow mb-2 block text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none border border-hairline bg-card px-3.5 py-3 text-[14px] leading-relaxed text-ink placeholder:text-muted focus:border-teal focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="mt-8 inline-flex h-11 items-center border border-ink bg-ink px-6 text-[13.5px] font-medium text-bone transition-colors hover:bg-ink-raised hover:border-ink-raised disabled:opacity-60"
      >
        {status === "sending"
          ? "Sending…"
          : status === "success"
            ? "Sent"
            : "Send message"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-[13.5px] text-pass">
          Thanks. We&rsquo;ll come back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-[13.5px] text-critical">
          That didn&rsquo;t send. Try again, or email us directly.
        </p>
      )}
    </form>
  );
}
