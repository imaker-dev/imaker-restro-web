import PageWrapper from "@/app/components/page-wrapper";
import React from "react";
import { Eyebrow } from "../../layouts/section-heading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const AddonsDetailsHero = ({ hero }) => {
  if (!hero) return null;
  return (
    <PageWrapper containerClassName="pt-16 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="lg:pb-6">
          {hero.eyebrow && <Eyebrow>{hero.eyebrow}</Eyebrow>}
          <h1 className="mt-4 max-w-xl font-medium text-[2.5rem] leading-[1.1] tracking-tight text-[#14181c] sm:max-w-lg sm:text-5xl lg:max-w-xl lg:text-[3.1rem]">
            {hero.title}{" "}
            {hero.highlightedTitle && (
              <span className="text-primary-500">{hero.highlightedTitle}</span>
            )}
          </h1>

          {hero.description && (
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#14181c]/65">
              {hero.description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {hero.primaryCta && (
              <Link
                href={hero.primaryCta.href}
                className="btn btn-lg btn-primary group"
              >
                {hero.primaryCta.label}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-[18px]"
                />
              </Link>
            )}
            {hero.secondaryCta && (
              <Link
                href={hero.secondaryCta.href}
                className="btn btn-lg btn-secondary"
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>
          {hero.trustLine && (
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[#14181c]/40">
              {hero.trustLine}
            </p>
          )}
        </div>

        {hero.visual?.src && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={hero.visual.src}
              alt={hero.visual.alt || ""}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default AddonsDetailsHero;
