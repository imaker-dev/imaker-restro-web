import PageWrapper from "@/app/components/page-wrapper";
import React from "react";
import SectionHeading from "../../layouts/section-heading";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const AddonsDetailsShowcase = ({ showcase }) => {
  return (
    <PageWrapper>
      <SectionHeading
        eyebrow={showcase.eyebrow}
        title={showcase.title}
        description={showcase.description}
        variant="compact"
      />

      <div className="space-y-16 sm:space-y-20">
        {showcase.items?.map((item, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={item.id || i}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-10 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#d9384a]">
                  {item.number} / {item.eyebrow}
                </span>
                <h3 className="mt-3 text-2xl leading-[1.15] text-[#14181c] sm:text-[1.75rem]">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-3 text-sm leading-relaxed text-[#14181c]/60">
                    {item.description}
                  </p>
                )}
                {item.points?.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {item.points.map((p, pi) => (
                      <li
                        key={pi}
                        className="flex items-start gap-2 text-sm text-[#14181c]/70"
                      >
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#d9384a]"
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {item.visual?.src && (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 shadow">
                  <Image
                    src={item.visual.src}
                    alt={item.visual.alt || ""}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default AddonsDetailsShowcase;