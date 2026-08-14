"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/");
    } else {
      setError("Incorrect password.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-[360px]">
        <Image
          src="/logo-light.png"
          alt="Astan"
          width={1400}
          height={410}
          className="mb-10 h-7 w-auto"
        />

        <label htmlFor="password" className="eyebrow mb-2 block text-on-ink-muted">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 w-full border border-[rgba(237,230,214,0.32)] bg-transparent px-3.5 text-[14px] text-bone focus:border-bone focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-6 inline-flex h-11 w-full items-center justify-center border border-bone bg-bone px-6 text-[13.5px] font-medium text-ink transition-colors hover:bg-white hover:border-white disabled:opacity-60"
        >
          {loading ? "Checking…" : "Continue"}
        </button>

        {error && <p className="mt-4 text-[13.5px] text-critical">{error}</p>}
      </form>
    </div>
  );
}
