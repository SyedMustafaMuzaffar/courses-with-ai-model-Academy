import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/data/courses";
import EnrollButton from "@/components/EnrollButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const firstLesson = course.curriculum[0];

  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-[minmax(0,1.6fr),minmax(0,1fr)]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">
            {course.category}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            {course.title}
          </h1>
          <p className="text-sm text-slate-300 sm:text-base">
            {course.subtitle}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span>
              ⭐ {course.rating} ({course.ratingCount.toLocaleString()} ratings)
            </span>
            <span>·</span>
            <span>{course.students.toLocaleString()} students</span>
            <span>·</span>
            <span>{course.level}</span>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl transition-all hover:border-purple-500/30">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-950/60 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-purple-500">
                <svg className="ml-1 h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 rounded-full bg-purple-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-purple-300 backdrop-blur-sm border border-purple-500/30">
              Preview this course
            </div>
          </div>

          <div className="space-y-5 p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-slate-50">₹{course.price}</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Lifetime Access</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                  Best Value
                </span>
                <p className="text-[10px] text-slate-500 line-through">₹{Math.round(course.price * 1.5)}</p>
              </div>
            </div>

            <div className="space-y-3">
              <EnrollButton courseTitle={course.title} coursePrice={course.price} />
              <button className="w-full rounded-full border border-slate-700 py-2.5 text-xs font-bold text-slate-300 transition hover:bg-slate-800">
                Add to Cart
              </button>
            </div>

            <p className="text-center text-[11px] text-slate-400">
              30-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.6fr),minmax(0,1fr)]">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
            What you'll learn
          </h2>
          <div className="grid gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 sm:grid-cols-2 sm:text-sm">
            {course.whatYouWillLearn.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
              About this course
            </h2>
            <p className="text-sm text-slate-300">{course.description}</p>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
            Course curriculum
          </h2>
          <div className="space-y-2 text-xs text-slate-200 sm:text-sm">
            {course.curriculum.map((lesson, index) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[11px] text-slate-200">
                    {index + 1}
                  </span>
                  <span className="text-xs text-slate-100 sm:text-sm">
                    {lesson.title}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  {lesson.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

