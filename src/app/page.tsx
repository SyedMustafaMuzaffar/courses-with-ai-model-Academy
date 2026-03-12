"use client";

import Link from "next/link";
import { courses } from "@/data/courses";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="relative isolate space-y-24 pb-20">
      {/* Background Blobs for Futuristic Look */}
      <div className="absolute -top-40 -left-20 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
      <div className="absolute top-1/4 -right-20 -z-10 h-[400px] w-[400px] rounded-full bg-sky-600/10 blur-[100px] animate-pulse [animation-delay:2s]" />

      {/* Massive Hero Section */}
      <section className="relative pt-12 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase animate-float">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            New · Next-Gen Fullstack Learning
          </p>
          <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Learn with <br />
            <span className="text-gradient">No Limits.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Master high-demand technical skills with SkillNest Academy. Our masterclasses are designed by industry veterans to take you from beginner to professional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/courses"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-purple-600 px-10 text-lg font-black text-white transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </Link>
            {!user && (
              <Link
                href="/auth/signup"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/50 px-10 text-lg font-bold text-white transition-all hover:bg-slate-800"
              >
                Free Account
              </Link>
            )}
          </div>
          <div className="flex items-center justify-center gap-8 pt-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-slate-300">105K+</span> Learners
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-300">4.8/5.0</span> Rating
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Support
            </div>
          </div>
        </div>
      </section>

      {/* Futuristic Bento Grid Features */}
      <section className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-sm font-black uppercase tracking-[0.3em] text-purple-500">
          Platform Capabilities
        </h2>
        <div className="grid gap-6 md:grid-cols-4 md:grid-rows-2">
          {/* Main Feature - Large */}
          <div className="glass-morphism neon-border group relative md:col-span-2 md:row-span-2 overflow-hidden rounded-[2.5rem] p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-purple-500 text-3xl shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  🤖
                </div>
                <h3 className="text-4xl font-black text-white">Always-On AI Chat</h3>
                <p className="mt-4 text-lg text-slate-400">
                  Our custom-trained AI assistant is available 24/7 inside your classroom to explain code,
                  answer technical queries, and guide your learning journey in real-time.
                </p>
              </div>
              <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 font-mono text-sm text-purple-300">
                <span className="text-slate-500">{"//"} AI Intelligence Status </span><br />
                <span className="text-emerald-400">READY</span> : Llama-3.2 Model Active
              </div>
            </div>
          </div>

          {/* Secondary Feature - Vertical */}
          <div className="glass-morphism neon-border group md:col-span-2 overflow-hidden rounded-[2.5rem] p-8">
            <div className="flex items-center gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/20 text-2xl text-sky-400 border border-sky-500/30 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                📺
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">4K HD Streaming</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Crystal clear lessons at up to 4K resolution. Zero buffering, frame-perfect pausing,
                  and interactive code overlays.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-morphism neon-border group md:col-span-1 overflow-hidden rounded-[2.5rem] p-8">
            <div className="h-full flex flex-col">
              <div className="mb-4 text-3xl">🏆</div>
              <h3 className="text-xl font-black text-white">Certificates</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Industry-recognized proof of mastery for every path.
              </p>
            </div>
          </div>

          <div className="glass-morphism neon-border group md:col-span-1 overflow-hidden rounded-[2.5rem] p-8">
            <div className="h-full flex flex-col">
              <div className="mb-4 text-3xl">🌐</div>
              <h3 className="text-xl font-black text-white">Community</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Connect with the next generation of engineers globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Course Grid */}
      <section className="space-y-12">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-white">Featured Masterclasses</h2>
            <p className="text-sm text-slate-400">Hand-curated programs for professional growth</p>
          </div>
          <Link
            href="/courses"
            className="group flex items-center gap-2 text-sm font-black text-purple-400 hover:text-purple-300 uppercase tracking-widest"
          >
            Explore All
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group relative h-full flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/50 hover:bg-slate-900/60 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute left-4 top-4 rounded-xl bg-slate-950/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
                  {course.level}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col space-y-3 p-6">
                <h3 className="line-clamp-2 text-lg font-black leading-tight text-slate-50 group-hover:text-purple-300 transition-colors">
                  {course.title}
                </h3>
                <p className="line-clamp-2 text-sm text-slate-400">
                  {course.subtitle}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-xs font-bold text-slate-300">{course.rating}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">({(course.ratingCount / 1000).toFixed(1)}K)</span>
                  </div>
                  <div className="text-lg font-black text-white">
                    ₹{course.price}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="glass-morphism neon-border overflow-hidden rounded-[3rem] p-12 text-center md:p-20 relative">
        <div className="absolute -z-10 bg-purple-500/10 blur-3xl w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <h2 className="text-4xl font-black text-white md:text-6xl mb-6">Ready to lead the future?</h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Join the professional platform where quality meets intelligence. Start your first masterclass today.
        </p>
        <Link
          href="/auth/signup"
          className="inline-flex h-16 items-center justify-center rounded-2xl bg-white px-12 text-lg font-black text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
}
