import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 py-16 sm:py-24">
      <div className="w-full max-w-3xl">
        {/* Broken path — the signature element */}
        <div className="mb-8 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-wide text-gray-400 sm:mb-12 sm:text-xs">
          <span>/</span>
          <span>page</span>
          <span>/</span>
          <span className="text-gray-300 line-through">not-found</span>
          <span className="ml-1 rounded-full bg-primary-50 px-2.5 py-0.5 text-[11px] font-semibold text-primary-500 sm:ml-2">
            404
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:gap-16">
          {/* Numeral */}
          <div className="sm:border-r sm:border-gray-200 sm:pr-16">
            <span className="block text-[4.5rem] font-bold leading-[0.85] tracking-tight text-gray-900 xs:text-[5.5rem] sm:text-[8rem]">
              404
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              This page took a wrong turn
            </h1>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500 sm:text-[15px]">
              The link you followed is broken, or the page has moved.
              Let&rsquo;s get you back on track.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="btn btn-primary inline-flex items-center gap-1.5"
              >
                Go home
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
