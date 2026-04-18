"use client";

import { useState } from "react";
import PageHeader from "@/app/ui/page-header";
import { btn, input } from "@/app/ui/templates/classnames";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError(null);
    // TODO: wire up authentication logic
  }

  return (
    <main className="flex-1">
      <PageHeader heading="Sign In" subheading="Welcome back to Tech Blog." />

      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="p-8 bg-white rounded-2xl border border-zinc-200 shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className={input.wrapper}>
                <label htmlFor="email" className={input.label}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={input.field}
                />
              </div>

              <div className={input.wrapper}>
                <label htmlFor="password" className={input.label}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className={input.field}
                />
              </div>

              {error && <p className={input.error}>{error}</p>}

              <button type="submit" className={`w-full mt-1 ${btn.primary}`}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
