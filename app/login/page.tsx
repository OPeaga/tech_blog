"use client";

import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError(null);
    // TODO: wire up authentication logic
  }

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-slate-400">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
            Sign in
          </h1>
          <p className="text-sm text-slate-500 mb-7">
            Welcome back to Tech Blog.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-slate-700 uppercase tracking-wide"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-xs font-semibold text-slate-700 uppercase tracking-wide"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
              />
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-1 w-full py-2.5 rounded-lg bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 active:bg-slate-900 transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
