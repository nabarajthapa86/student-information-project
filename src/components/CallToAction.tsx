import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-blue-700 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Start Your Journey Today
          </h2>
          <p className="mt-2 text-blue-100">
            Applications for the next academic semester are now open for all
            faculties.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <Link
            href="/students"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-800 shadow-sm transition-transform hover:scale-[1.02]"
          >
            Apply Now
          </Link>
          <Link
            href="/#contact"
            className="rounded-md border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
