// ---------------------------------------------------------------------------
// Franchise Card
// ---------------------------------------------------------------------------

import Link from "next/link";
import { Building2, Check, Scale, Star, TrendingUp } from "lucide-react";
import { formatValue } from "@/app/utils/number.utils";
import FranchiseTag from "@/app/views/franchises/components/franchise-tag";

function FranchiseCard({ franchise, isSelected, canSelect, onToggleCompare }) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:-translate-y-1.5 border border-slate-200 ${
        isSelected
          ? "shadow-[0_24px_48px_-16px_rgba(15,23,42,0.28)] ring-2 ring-primary-400"
          : "shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)] hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.22)]"
      }`}
    >
      {/* Cover image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={franchise?.cover_image_url}
          alt=""
          className="h-full w-full scale-100 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

        {/* Compare checkbox */}
        {/* <label className="absolute right-3 top-3 z-10">
          <input
            type="checkbox"
            checked={isSelected}
            disabled={!isSelected && !canSelect}
            onChange={() => onToggleCompare(franchise?.id)}
            className="peer sr-only"
          />
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-md transition-colors ${
              isSelected
                ? "bg-white text-slate-900"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {isSelected ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Scale className="h-3.5 w-3.5" />
            )}
          </span>
        </label> */}

        {/* featured */}
        {franchise?.is_featured === 1 && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 backdrop-blur-md">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            <span className="text-[11.5px] font-semibold text-slate-800">
              Featured
            </span>
          </div>
        )}

        {/* Brand mark + name on image */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-white shadow-sm">
              <img src={franchise?.logo_url} alt="logo" />
            </div>
            <div>
              <h3 className="text-[15.5px] font-semibold leading-tight text-white">
                {franchise?.name}
              </h3>
              <p className="text-[11.5px] text-white/70">
                {franchise?.category} &middot; Est.{" "}
                {franchise?.established_year}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <p className="line-clamp-2 text-[13px] leading-relaxed text-slate-500">
          {franchise?.short_description}
        </p>

        {/* Editorial metric row */}
        <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-5">
          <div>
            <p className="text-[10.5px] font-medium uppercase tracking-wider text-slate-400">
              Investment
            </p>
            <p className="mt-1 text-[16px] font-semibold tracking-tight text-slate-900">
              {formatValue(franchise?.investment_min, "compact")} &ndash;
              {formatValue(franchise?.investment_max, "compact")}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10.5px] font-medium uppercase tracking-wider text-slate-400">
              Expected ROI
            </p>
            <p className="mt-1 flex items-center justify-end gap-1 text-[16px] font-semibold tracking-tight text-amber-700">
              <TrendingUp className="h-3.5 w-3.5" />
              {franchise?.expected_roi}%
            </p>
          </div>
        </div>

        <p className="mt-2 text-[10px] italic text-slate-400">
          *All financial figures are approximate
        </p>
        
        <div className="mt-3 flex items-center justify-between text-[12px] text-slate-500">
          <span>{franchise?.break_even_months} mo payback</span>
          <span className="flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5 text-slate-400" />
            {franchise?.outlets_live} outlets live
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {franchise?.tags.map((tag) => (
            <FranchiseTag key={tag} label={tag} />
          ))}
        </div>

        <div className="mt-5">
          <Link
            href={`/franchises/${franchise?.slug}`}
            className="flex w-full items-center justify-center rounded-xl bg-primary-500 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-primary-600"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FranchiseCard;
