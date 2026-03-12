"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const redirectTo = searchParams.get("redirect") || "/courses";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      router.push(redirectTo);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-xl shadow-black/40">
      <div className="space-y-2 text-center">
        <h1 className="text-xl font-semibold tracking-tight text-slate-50">
          Welcome back
        </h1>
        <p className="text-xs text-slate-400">
          Log in to continue learning with SkillNest Academy.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1 text-sm">
          <label className="block text-xs font-medium text-slate-300">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-purple-500/40 placeholder:text-slate-500 focus:border-purple-500 focus:ring-1"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-xs font-medium text-slate-300">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-purple-500/40 placeholder:text-slate-500 focus:border-purple-500 focus:ring-1"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="rounded-md border border-red-500/40 bg-red-500/10 p-2 text-xs text-red-200">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 hover:bg-purple-400 disabled:cursor-not-allowed disabled:bg-purple-500/60"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
      <p className="text-center text-xs text-slate-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/signup"
          className="font-semibold text-purple-300 hover:text-purple-200"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}

