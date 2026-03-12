"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";

const CATEGORIES = [
  "All",
  "Design",
  "Development",
  "Marketing",
  "Business",
  "Personal Development",
  "Photography",
  "Music",
  "Health & Fitness",
  "Finance",
  "IT & Software",
  "Office Productivity",
  "Programming",
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log("CoursesPage mounted on client.");
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  if (!isMounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 text-slate-50 md:px-8">
      {/* Search Header Section */}
      <div className="relative mb-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-12 text-center shadow-2xl">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />

        <h1 className="relative mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Search your next <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skill</span>
        </h1>
        <p className="relative mx-auto mb-10 max-w-2xl text-lg text-slate-400">
          Discover thousands of world-class courses designed to help you grow. Learn anything, anytime, anywhere.
        </p>

        {/* Search Input */}
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <input
            type="text"
            placeholder="Search for courses (e.g., 'React', 'Python', 'Design')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 py-5 pl-8 pr-16 text-lg text-white shadow-2xl outline-none ring-purple-500/30 transition-all placeholder:text-slate-500 focus:border-purple-500 focus:ring-4"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl bg-purple-600 p-2.5 text-white shadow-lg shadow-purple-900/20 active:scale-95 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start">
          {/* Categories Sidebar/Chips */}
          <aside className="shrink-0 space-y-4 md:w-64">
            <h2 className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Categories
            </h2>
            <div className="flex flex-wrap gap-2 md:flex-col">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all ${selectedCategory === cat
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
                    : "bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Course Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between px-2">
              <h2 className="text-xl font-semibold">
                {selectedCategory} Courses
                <span className="ml-3 text-sm font-normal text-slate-500">
                  {filteredCourses.length} results
                </span>
              </h2>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-all hover:-translate-y-1 hover:border-purple-500/40 hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-purple-900/10"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-slate-800">
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-16 w-16">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 18c-4.97 0-9-4.03-9-9s4.03-9 9-9" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-purple-400">
                        <span>{course.category}</span>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-yellow-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                          {course.rating}
                        </span>
                      </div>
                      <h3 className="mb-2 line-clamp-1 font-semibold text-slate-100 group-hover:text-purple-400">
                        {course.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-xs text-slate-400">
                        {course.description}
                      </p>
                      <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-4">
                        <span className="font-bold text-slate-100">${course.price}</span>
                        <div className="rounded-lg bg-slate-800 px-3 py-1.5 text-[10px] font-medium text-slate-300 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                          View details
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 p-20 text-center">
                <div className="mb-4 rounded-full bg-slate-900 p-6 text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">No courses found</h3>
                <p className="max-w-xs text-slate-400">
                  We couldn&apos;t find any courses matching &quot;{searchQuery}&quot; in {selectedCategory}.
                </p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="mt-6 text-sm font-semibold text-purple-400 hover:text-purple-300"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
