"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Banknote,
  Wallet,
  TrendingUp,
  Clock,
  Building2,
  Ruler,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  Check,
  GraduationCap,
  Megaphone,
  Laptop2,
  Settings,
  Boxes,
  ShieldCheck,
  Calendar,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { formatValue } from "@/app/utils/number.utils";
import { formatText } from "@/app/utils/text.utils";
import PageWrapper from "../../components/page-wrapper";
import FranchiseContactForm from "./components/franchise-contact-form";
import FranchiseTag from "../franchises/components/franchise-tag";
import { useRouter } from "next/navigation";
import FranchiseDetailsSkeleton from "./components/franchise-details-skeleton";

// ---------------------------------------------------------------------------
// Direct contact card (phone / email / website) — sits below the form
// ---------------------------------------------------------------------------

function DirectContactCard({ franchise }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <p className="text-[11.5px] font-semibold uppercase tracking-wider text-white/50">
        Prefer to reach out directly?
      </p>
      <div className="mt-4 space-y-3">
        {franchise?.contact_phone && (
          <a
            href={`tel:${franchise.contact_phone}`}
            className="flex items-center gap-3 text-[13.5px] text-white/90 hover:text-white"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Phone className="h-4 w-4" />
            </span>
            {franchise.contact_phone}
          </a>
        )}
        {franchise?.contact_email && (
          <a
            href={`mailto:${franchise.contact_email}`}
            className="flex items-center gap-3 text-[13.5px] text-white/90 hover:text-white"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Mail className="h-4 w-4" />
            </span>
            {franchise.contact_email}
          </a>
        )}
        {franchise?.website && (
          <a
            href={franchise.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[13.5px] text-white/90 hover:text-white"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Globe className="h-4 w-4" />
            </span>
            Visit website
          </a>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const FranchiseDetailsPage = ({ franchise, loading = false }) => {
  const router = useRouter();

  if (loading) return <FranchiseDetailsSkeleton />;

  const investmentMin = Number(franchise?.investment_min);
  const investmentMax = Number(franchise?.investment_max);
  const franchiseFee = Number(franchise?.franchise_fee);
  const workingCapital = Number(franchise?.working_capital);
  const monthlyRevenue = Number(franchise?.monthly_revenue);
  const establishedYear = Number(franchise?.established_year);

  const yearsInBusiness =
    !isNaN(establishedYear) && establishedYear > 0
      ? new Date().getFullYear() - establishedYear
      : 0;

  return (
    <PageWrapper className="bg-[#FAFAF9]" containerClassName="pt-8 space-y-8">
      {/* Cover + breadcrumb */}
      <div className="relative h-72 w-full rounded-4xl overflow-hidden sm:h-96">
        <img
          src={franchise?.cover_image_url}
          alt={franchise?.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40" />

        <div className="absolute inset-x-0 top-0 mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            href="/franchise"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[12.5px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-7 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg sm:h-16 sm:w-16">
                <img
                  src={franchise?.logo_url}
                  alt={`${franchise?.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-serif text-[24px] font-medium leading-tight text-white sm:text-[30px]">
                    {franchise?.name}
                  </h1>
                  {franchise?.is_featured === 1 && (
                    <span className="flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-[10.5px] font-semibold text-slate-900">
                      <Star className="h-3 w-3 fill-slate-900" />
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[13.5px] text-white/70">
                  {formatText(franchise?.category)} &middot; Est.{" "}
                  {franchise?.established_year} &middot;{" "}
                  {franchise?.location_city}, {franchise?.location_state}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {franchise?.tags?.map((tag) => (
                <FranchiseTag key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body: left content / right contact form */}
      <div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">
          {/* LEFT — content */}
          <div className="space-y-6">
            {/* About */}
            <section className="rounded-3xl bg-white p-6 shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)]">
              <h2 className="text-[16px] font-semibold text-slate-900">
                About this franchise
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                {franchise?.description}
              </p>
            </section>

            {/* Financial snapshot */}
            <section>
              <h2 className="mb-3 text-[11.5px] font-semibold uppercase tracking-wider text-slate-400">
                Financial snapshot
              </h2>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-100 sm:grid-cols-3">
                <MetricCell
                  icon={Banknote}
                  label="Total investment"
                  value={`Approx. ${formatValue(investmentMin, "compact")} – ${formatValue(
                    investmentMax,
                    "compact",
                  )}`}
                  span
                />

                <MetricCell
                  icon={Wallet}
                  label="Franchise fee"
                  value={`Approx. ${formatValue(franchiseFee, "compact")}`}
                />

                <MetricCell
                  icon={Wallet}
                  label="Working capital"
                  value={`Approx. ${formatValue(workingCapital, "compact")}`}
                />

                <MetricCell
                  icon={Banknote}
                  label="Monthly revenue"
                  value={`Approx. ${formatValue(monthlyRevenue, "compact")}`}
                />

                <MetricCell
                  icon={TrendingUp}
                  label="Expected ROI"
                  value={`Approx. ${franchise?.expected_roi}%`}
                  highlight
                />

                <MetricCell
                  icon={Clock}
                  label="Break-even"
                  value={`Approx. ${franchise?.break_even_months} months`}
                />
              </div>
            </section>

            {/* Growth stats */}
            <section className="grid grid-cols-3 gap-3">
              <StatTile value={franchise?.outlets_live} label="Live outlets" />
              <StatTile
                value={franchise?.locations_available?.length || 0}
                label="Cities available"
              />
              <StatTile value={yearsInBusiness} label="Years in business" />
            </section>

            {/* Requirements */}
            <section className="rounded-3xl bg-white p-6 shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)]">
              <h2 className="text-[16px] font-semibold text-slate-900">
                Requirements
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <RequirementItem
                  icon={Ruler}
                  label="Space required"
                  value={franchise?.space_requirement}
                />
                <RequirementItem
                  icon={Users}
                  label="Staff required"
                  value={`${franchise?.staff_required}+ people`}
                />
                <RequirementItem
                  icon={MapPin}
                  label="Home base"
                  value={`${franchise?.location_city}, ${franchise?.location_state}`}
                />
              </div>
            </section>

            {/* Support offered */}
            {franchise?.support_offered?.length > 0 && (
              <section className="rounded-3xl bg-white p-6 shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)]">
                <h2 className="text-[16px] font-semibold text-slate-900">
                  Support offered
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {franchise?.support_offered?.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-[12.5px] text-slate-700"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-slate-600" />
                      <span className="truncate">{formatText(item)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Available locations */}
            {franchise?.locations_available?.length > 0 && (
              <section className="rounded-3xl bg-white p-6 shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)]">
                <h2 className="text-[16px] font-semibold text-slate-900">
                  Expansion locations
                </h2>
                <p className="mt-1 text-[12.5px] text-slate-500">
                  This brand is actively looking for franchise partners in the
                  following cities.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {franchise?.locations_available?.map((city) => (
                    <span
                      key={city}
                      className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-[12.5px] text-slate-600"
                    >
                      <MapPin className="h-3 w-3 text-slate-400" />
                      {city}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery */}
            {franchise?.gallery_images?.length > 0 && (
              <section>
                <h2 className="mb-3 text-[11.5px] font-semibold uppercase tracking-wider text-slate-400">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {franchise?.gallery_images?.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)]"
                    >
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT — sticky contact form */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="space-y-5">
              <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                <p className="text-[12px] text-emerald-700">
                  Verified brand &middot; {franchise?.outlets_live} outlets
                  already live
                </p>
              </div>

              <FranchiseContactForm franchise={franchise} />
              <DirectContactCard franchise={franchise} />
            </div>
          </div>
        </div>
      </div>

      {/* Powered by iMaker Restro */}
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-[#1a0a0d] to-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          {/* LEFT — copy */}
          <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:py-0">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary-500/15 px-3 py-1 text-[11.5px] font-medium text-primary-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified franchise infrastructure
            </span>

            <h2 className="mt-5 font-serif text-[26px] font-medium leading-[1.2] text-white sm:text-[30px]">
              Every {franchise?.name} outlet runs on{" "}
              <span className="text-primary-500">iMaker Restro </span>
            </h2>

            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/55">
              Billing, inventory, and daily operations across all{" "}
              {franchise?.outlets_live} locations are powered by our platform -
              so every number on this page comes from real, verified business
              data, not projections.
            </p>

            <div className="mt-7 flex items-center gap-8">
              <div>
                <p className="font-serif text-[28px] font-medium leading-none text-white">
                  {franchise?.outlets_live}
                </p>
                <p className="mt-1.5 text-[12px] text-white/45">
                  Outlets live on iMaker Restro
                </p>
              </div>
              <div className="h-9 w-px bg-white/10" />
              <div>
                <p className="font-serif text-[28px] font-medium leading-none text-primary-400">
                  100%
                </p>
                <p className="mt-1.5 text-[12px] text-white/45">
                  Operations covered
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — device mockup */}
          <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a0d] to-slate-950 px-8 py-12 ">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full opacity-25 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, #C52031 0%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -left-12 bottom-0 h-48 w-48 rounded-full opacity-15 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, #e35c6a 0%, transparent 70%)",
              }}
            />

            {/* POS terminal mockup */}
            <div className="relative w-full max-w-[340px]">
              <div className="rounded-2xl bg-white/[0.07] p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <div className="overflow-hidden rounded-xl bg-white">
                  <div className="flex items-center justify-between bg-slate-900 px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary-400/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="text-[10px] font-medium text-white/50">
                      iMaker Restro POS
                    </span>
                  </div>
                  <img
                    src="/Images/imaker-restro-pos-screenshot.png"
                    alt="iMaker Restro POS dashboard"
                    className="w-full rounded-b-xl object-cover"
                  />
                </div>
              </div>

              {/* floating mobile notification card */}
              <div className="absolute -bottom-5 -left-6 w-44 rounded-xl bg-white p-3 shadow-2xl ring-1 ring-slate-900/5 sm:-left-10">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50">
                    <Check className="h-3.5 w-3.5 text-primary-600" />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-semibold text-slate-800">
                      Order synced
                    </p>
                    <p className="text-[9.5px] text-slate-400">
                      Live across all outlets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

// ---------------------------------------------------------------------------
// Small presentational pieces
// ---------------------------------------------------------------------------

function MetricCell({ icon: Icon, label, value, highlight, span }) {
  return (
    <div
      className={`bg-white px-5 py-4 ${span ? "col-span-2 sm:col-span-3" : ""} ${
        highlight ? "bg-amber-50" : ""
      }`}
    >
      <div className="flex items-center gap-1.5 text-slate-400">
        <Icon className="h-3.5 w-3.5" />
        <p className="text-[10.5px] font-medium uppercase tracking-wide">
          {label}
        </p>
      </div>
      <p
        className={`mt-1.5 text-[17px] font-semibold tracking-tight ${
          highlight ? "text-amber-700" : "text-slate-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function StatTile({ value, label }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-5 text-center">
      <p className="font-serif text-[24px] font-medium text-white">{value}</p>
      <p className="mt-1 text-[11.5px] text-white/50">{label}</p>
    </div>
  );
}

function RequirementItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50">
        <Icon className="h-4 w-4 text-slate-500" />
      </span>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="mt-0.5 text-[13.5px] font-medium text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}

export default FranchiseDetailsPage;
