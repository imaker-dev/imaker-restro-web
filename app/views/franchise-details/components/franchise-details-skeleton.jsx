import { ArrowLeft, Star, ShieldCheck } from "lucide-react";
import PageWrapper from "../../../components/page-wrapper";

function SkeletonBlock({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-3xl bg-white p-6 shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)] ${className}`}
    >
      <div className="h-5 w-40 rounded-md bg-slate-200" />
      <div className="mt-3 space-y-2">
        <div className="h-4 w-full rounded-md bg-slate-100" />
        <div className="h-4 w-5/6 rounded-md bg-slate-100" />
        <div className="h-4 w-4/6 rounded-md bg-slate-100" />
      </div>
    </div>
  );
}

function MetricSkeleton({ span }) {
  return (
    <div
      className={`animate-pulse bg-white px-5 py-4 ${span ? "col-span-2 sm:col-span-3" : ""}`}
    >
      <div className="h-3 w-16 rounded bg-slate-200" />
      <div className="mt-2 h-5 w-20 rounded bg-slate-200" />
    </div>
  );
}

function FranchiseDetailsSkeleton() {
  return (
    <PageWrapper className="space-y-8" containerClassName=" pt-10">
      {/* Cover + breadcrumb */}
      <div className="relative h-72 w-full animate-pulse overflow-hidden rounded-4xl bg-slate-200 sm:h-96">
        <div className="absolute inset-x-0 top-0 mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <div className="inline-flex h-8 w-20 rounded-full bg-white/20" />
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-7 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 shrink-0 rounded-2xl bg-white/20 sm:h-16 sm:w-16" />
              <div>
                <div className="h-7 w-48 rounded-md bg-white/20 sm:h-8 sm:w-56" />
                <div className="mt-2 h-4 w-64 rounded-md bg-white/10" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded-full bg-white/10" />
              <div className="h-6 w-20 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">
          {/* LEFT — content */}
          <div className="space-y-6">
            {/* About */}
            <SkeletonBlock>
              <div className="h-5 w-44 rounded-md bg-slate-200" />
              <div className="mt-3 space-y-2">
                <div className="h-4 w-full rounded-md bg-slate-100" />
                <div className="h-4 w-full rounded-md bg-slate-100" />
                <div className="h-4 w-5/6 rounded-md bg-slate-100" />
                <div className="h-4 w-4/6 rounded-md bg-slate-100" />
              </div>
            </SkeletonBlock>

            {/* Financial snapshot */}
            <section>
              <div className="mb-3 h-3 w-28 rounded bg-slate-200" />
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-100 sm:grid-cols-3">
                <MetricSkeleton span />
                <MetricSkeleton />
                <MetricSkeleton />
                <MetricSkeleton />
                <MetricSkeleton />
                <MetricSkeleton />
              </div>
            </section>

            {/* Growth stats */}
            <section className="grid grid-cols-3 gap-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-2xl bg-slate-800 px-4 py-5 text-center"
                >
                  <div className="mx-auto h-8 w-16 rounded bg-white/10" />
                  <div className="mx-auto mt-2 h-3 w-20 rounded bg-white/10" />
                </div>
              ))}
            </section>

            {/* Requirements */}
            <SkeletonBlock>
              <div className="h-5 w-32 rounded-md bg-slate-200" />
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="h-8 w-8 shrink-0 rounded-lg bg-slate-100" />
                    <div>
                      <div className="h-3 w-16 rounded bg-slate-200" />
                      <div className="mt-1 h-4 w-24 rounded bg-slate-100" />
                    </div>
                  </div>
                ))}
              </div>
            </SkeletonBlock>

            {/* Support offered */}
            <SkeletonBlock>
              <div className="h-5 w-36 rounded-md bg-slate-200" />
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-10 rounded-xl bg-slate-50" />
                ))}
              </div>
            </SkeletonBlock>

            {/* Available locations */}
            <SkeletonBlock>
              <div className="h-5 w-44 rounded-md bg-slate-200" />
              <div className="mt-1 h-3 w-64 rounded bg-slate-100" />
              <div className="mt-4 flex flex-wrap gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-8 w-20 rounded-full bg-slate-50" />
                ))}
              </div>
            </SkeletonBlock>

            {/* Gallery */}
            <section>
              <div className="mb-3 h-3 w-16 rounded bg-slate-200" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] animate-pulse rounded-2xl bg-slate-200"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT — sticky contact form */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="space-y-5">
              {/* Verified badge */}
              <div className="animate-pulse rounded-2xl bg-emerald-50/50 px-4 py-3">
                <div className="h-4 w-64 rounded bg-emerald-100" />
              </div>

              {/* Contact form skeleton */}
              <div className="animate-pulse rounded-3xl bg-white p-6 shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)]">
                <div className="h-5 w-44 rounded-md bg-slate-200" />
                <div className="mt-1 h-3 w-56 rounded bg-slate-100" />
                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-11 rounded-xl bg-slate-50" />
                    <div className="h-11 rounded-xl bg-slate-50" />
                  </div>
                  <div className="h-11 rounded-xl bg-slate-50" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-11 rounded-xl bg-slate-50" />
                    <div className="h-11 rounded-xl bg-slate-50" />
                  </div>
                  <div className="h-11 rounded-xl bg-slate-50" />
                  <div className="h-11 rounded-xl bg-slate-50" />
                  <div className="h-20 rounded-xl bg-slate-50" />
                  <div className="flex items-start gap-2.5">
                    <div className="h-4 w-4 rounded bg-slate-200" />
                    <div className="h-3 w-56 rounded bg-slate-100" />
                  </div>
                  <div className="h-12 rounded-xl bg-slate-200" />
                </div>
              </div>

              {/* Direct contact card skeleton */}
              <div className="animate-pulse rounded-3xl bg-slate-800 p-6">
                <div className="h-3 w-40 rounded bg-white/10" />
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10" />
                    <div className="h-4 w-32 rounded bg-white/10" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10" />
                    <div className="h-4 w-40 rounded bg-white/10" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10" />
                    <div className="h-4 w-24 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default FranchiseDetailsSkeleton;
