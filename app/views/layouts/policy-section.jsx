"use client";

import React from "react";
import PageWrapper from "../../components/page-wrapper";

/* ─────────────────────────────────────────────────────────────────────────────
   INLINE BOLD + BULLET RENDERER
───────────────────────────────────────────────────────────────────────────── */
function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith("**") && chunk.endsWith("**") ? (
      <strong key={i} className="font-semibold text-slate-800">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      chunk
    ),
  );
}

function RichContent({ text }) {
  if (!text) return null;

  const lines = text.trim().split("\n");
  const output = [];
  let bullets = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    output.push(
      <ul key={`ul-${output.length}`} className="mt-4 space-y-2.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-[9px] w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
            <span className="text-slate-600 text-base leading-relaxed">
              {renderInline(b)}
            </span>
          </li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  lines.forEach((line, i) => {
    const t = line.trim();
    if (!t) {
      flushBullets();
      return;
    }
    if (t.startsWith("- ")) {
      bullets.push(t.slice(2));
    } else {
      flushBullets();
      output.push(
        <p key={`p-${i}`} className="text-slate-600 text-base leading-relaxed">
          {renderInline(t)}
        </p>,
      );
    }
  });
  flushBullets();

  return <div className="space-y-3">{output}</div>;
}

/* ─────────────────────────────────────────────────────────────────────────────
   SINGLE SECTION
───────────────────────────────────────────────────────────────────────────── */
function Section({ section, index }) {
  const hasSubSections =
    Array.isArray(section.subSections) && section.subSections.length > 0;

  return (
    <section className="py-6">
      {/* Section number + title */}
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-xs font-black text-slate-300 tabular-nums tracking-widest flex-shrink-0 w-7">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
          {section.title}
        </h2>
      </div>

      {/* Content indented to align with title */}
      <div className="pl-10">
        {/* Top-level content */}
        {section.content && <RichContent text={section.content} />}

        {/* Sub-sections */}
        {hasSubSections && (
          <div className="mt-6 space-y-6">
            {section.subSections.map((sub, si) => (
              <div key={si}>
                {/* Sub-section label */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-[11px] font-extrabold text-slate-400 tabular-nums tracking-widest">
                    {index + 1}.{si + 1}
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                    {sub.title}
                  </h3>
                </div>
                <RichContent text={sub.content} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────────────────── */
export default function PolicySection({ sections = [] }) {
  return (
    <PageWrapper className="bg-white" containerClassName=" space-y-6">
      {/* Last updated notice */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Last updated
        </span>
        <span className="w-1 h-1 rounded-full bg-slate-300" />
        <span className="text-xs font-semibold text-slate-500">
          March 1, 2025
        </span>
      </div>

      {/* All sections */}
      <div>
        {sections.map((section, i) => (
          <Section key={i} section={section} index={i} />
        ))}
      </div>
    </PageWrapper>
  );
}
