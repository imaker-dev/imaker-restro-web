// ---------------------------------------------------------------------------
// Franchise Card
// ---------------------------------------------------------------------------

import Link from "next/link";
import { ArrowUpRight, Building2, Star, TrendingUp } from "lucide-react";
import { formatValue } from "@/app/utils/number.utils";
import FranchiseTag from "@/app/views/franchises/components/franchise-tag";

function FranchiseCard({ franchise, isSelected, canSelect, onToggleCompare }) {
  return (
    <Link
      href={`/franchises/${franchise?.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-[28px] bg-white transition-all duration-500 hover:-translate-y-2 border ${
        isSelected
          ? "border-primary-300 shadow-[0_12px_30px_-16px_rgba(15,23,42,0.16)] ring-2 ring-primary-400/60"
          : "border-slate-200/80 shadow-[0_2px_12px_-5px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_30px_-16px_rgba(15,23,42,0.12)] hover:border-slate-300"
      }`}
    >
      {/* Cover image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={franchise?.cover_image_url}
          alt=""
          className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

        {/* Top row: featured + category */}
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          {franchise?.is_featured === 1 ? (
            <div className="flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur-md">
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
              <span className="text-[11px] font-semibold text-slate-800">
                Featured
              </span>
            </div>
          ) : (
            <span />
          )}
          {franchise?.category && (
            <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
              {franchise?.category}
            </span>
          )}
        </div>

        {/* Brand mark + name */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end gap-3 p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)]">
            <img
              src={franchise?.logo_url}
              alt={`${franchise?.name} logo`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-[17px] font-semibold leading-tight text-white">
              {franchise?.name}
            </h3>
            <p className="text-[11.5px] text-white/70">
              Est. {franchise?.established_year}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <p className="line-clamp-2 text-[13.5px] leading-relaxed text-slate-500">
          {franchise?.short_description}
        </p>

        {/* Stat block — the focal point */}
        <div className="mt-5 grid grid-cols-2 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50/70 py-4">
          <div className="px-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Investment
            </p>
            <p className="mt-1.5 text-[17px] font-bold tracking-tight text-slate-900">
              {formatValue(franchise?.investment_min, "compact")}
              <span className="text-slate-400">&ndash;</span>
              {formatValue(franchise?.investment_max, "compact")}
            </p>
          </div>
          <div className="px-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Expected ROI
            </p>
            <p className="mt-1.5 flex items-center gap-1 text-[17px] font-bold tracking-tight text-emerald-700">
              <TrendingUp className="h-3.5 w-3.5" />
              {franchise?.expected_roi}%
            </p>
          </div>
        </div>

        {/* Secondary metrics */}
        <div className="mt-4 flex items-center justify-between text-[12px] text-slate-500">
          <span>{franchise?.break_even_months} mo payback</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5 text-slate-400" />
            {franchise?.outlets_live} outlets live
          </span>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {franchise?.tags.map((tag) => (
            <FranchiseTag key={tag} label={tag} />
          ))}
        </div>

        {/* Footer CTA — text only, whole card is still the link */}
        <div className="mt-8 flex items-center justify-between ">
          <span className="text-[10px] italic text-slate-400">
            *Figures are approximate
          </span>
          <span className="flex items-center gap-1 text-[12.5px] font-semibold text-slate-900 transition-colors duration-300 group-hover:text-primary-500">
            Explore
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FranchiseCard;
