"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
];

export function MainShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="relative z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/20 ring-1 ring-orange-400/40">
              <span className="text-lg font-bold text-orange-300">S</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">
                SkillNest Academy
              </p>
              <p className="text-[11px] text-slate-400">
                Learn. Build. Get hired.
              </p>
            </div>
          </Link>

          <nav className="ml-6 hidden flex-1 items-center gap-4 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 transition-colors ${pathname === item.href
                  ? "bg-slate-800 text-slate-50"
                  : "hover:bg-slate-800/80"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 text-sm">
            {user ? (
              <>
                <span className="hidden text-slate-300 md:inline">
                  Hi, <span className="font-semibold">{user.name}</span>
                </span>
                <button
                  onClick={logout}
                  className="rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800"
                >
                  Log in
                </Link>
                <Link
                  href="/auth/signup"
                  className="rounded-full bg-purple-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-purple-500/40 hover:bg-purple-400"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">{children}</main>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SkillNest Academy. All rights reserved.</p>
          <p className="hidden gap-3 md:flex">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Help</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

