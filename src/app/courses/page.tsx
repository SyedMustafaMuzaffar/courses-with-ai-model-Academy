import Link from "next/link";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">
            Browse
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            All courses
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            Curated programs to take you from zero to job-ready.
          </p>
        </div>
        <div className="flex gap-2 text-xs text-slate-400">
          <button className="rounded-full border border-slate-800 px-3 py-1.5 hover:border-purple-500/60 hover:bg-slate-900">
            Web development
          </button>
          <button className="rounded-full border border-slate-800 px-3 py-1.5 hover:border-purple-500/60 hover:bg-slate-900">
            Programming
          </button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.slug}`}
            className="group flex gap-4 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-3 transition hover:border-purple-500/60 hover:bg-slate-900"
          >
            <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-40">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute left-1.5 top-1.5 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-50">
                {course.level}
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-2">
              <div className="space-y-1">
                <p className="line-clamp-2 text-sm font-semibold text-slate-50 sm:text-base">
                  {course.title}
                </p>
                <p className="line-clamp-2 text-xs text-slate-400">
                  {course.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-3">
                  <span>
                    ⭐ {course.rating} ({course.ratingCount.toLocaleString()})
                  </span>
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-200">₹{course.price}</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                    Bestseller
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

