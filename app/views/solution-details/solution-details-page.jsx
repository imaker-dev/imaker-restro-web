"use client";
import React, { useState } from "react";
import {
  Layers,
  ChefHat,
  SplitSquareHorizontal,
  Boxes,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Plus,
  Phone,
  Mail,
  User,
  MessageSquare,
  Plug,
  Star,
} from "lucide-react";
import PageWrapper from "../../components/page-wrapper";
import { getAllSolutionsList } from "../../data/solutions";

const TONES = [
  { block: "#F2B441", text: "#3B2A20", sub: "#5A4430", chip: "rgba(59,42,32,0.12)", chipText: "#3B2A20", glow: "rgba(59,42,32,0.2)" },
  { block: "#3B2A20", text: "#FDF6EC", sub: "#C9B8A6", chip: "rgba(253,246,236,0.12)", chipText: "#FDF6EC", glow: "rgba(0,0,0,0.4)" },
];

const featureIconMap = { Layers, ChefHat, SplitSquareHorizontal, Boxes };

function Eyebrow({ children, color = "#C1602A" }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="h-px w-8" style={{ backgroundColor: color }} />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color }}>
        {children}
      </span>
    </div>
  );
}

function Section({ eyebrow, title, description, children, tight }) {
  return (
    <section className={`${tight ? "py-8" : "py-14"} first:pt-0`}>
      {(eyebrow || title) && (
        <div className="mb-8 max-w-2xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && (
            <h2 className="font-serif text-[26px] font-bold leading-tight text-stone-800 sm:text-[32px]">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-3 text-[15px] leading-relaxed text-stone-500">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      style={{ borderColor: isOpen ? "#F2B441" : "#E7E1D6", backgroundColor: isOpen ? "#FBF0DA" : "#FFFFFF" }}
      className="overflow-hidden rounded-2xl border transition-colors"
    >
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left">
        <span className="text-[14.5px] font-semibold text-stone-800">{q}</span>
        <span
          style={{ backgroundColor: isOpen ? "#F2B441" : "#F1EDE3", color: "#3B2A20", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300"
        >
          <Plus size={15} />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[14px] leading-relaxed text-stone-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function SolutionDetailsPage({ solution }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!solution) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center bg-[#FDF6EC] text-stone-500">
        No solution data provided.
      </div>
    );
  }

  const {
    hero,
    idealFor = [],
    challenges = [],
    solution: solutionBlock,
    modules = [],
    features = [],
    workflow = [],
    benefits = [],
    metrics = [],
    integrations = [],
    screenshots = [],
    faqs = [],
    cta,
  } = solution;

  const allSolutions = getAllSolutionsList();
  const solutionIndex = Math.max(allSolutions.findIndex((s) => s.id === solution.id), 0);
  const heroTone = TONES[solutionIndex % TONES.length];
  const ctaTone = TONES[(solutionIndex + 1) % TONES.length];

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageWrapper containerClassName="pt-6">
        {/* ---------------- HERO — full-bleed photo background ---------------- */}
        <section className="relative isolate overflow-hidden rounded-[32px] shadow-[0_20px_50px_-20px_rgba(41,28,15,0.35)] sm:rounded-[36px]">
          <div className="relative h-[420px] sm:h-[520px]">
            <img
              // NOTE: use a real wide photograph here (e.g. hero.backgroundImage),
              // not the transparent product cutout used on cards elsewhere —
              // that will stretch/blur badly as a cover background.
              src={hero?.backgroundImage || hero?.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Overlay tuned for legibility, not decoration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
              <span className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
                {String(solutionIndex + 1).padStart(2, "0")} / {String(allSolutions.length).padStart(2, "0")} — {hero?.subtitle}
              </span>

              <h1 className="max-w-2xl font-serif text-[32px] font-bold leading-[1.15] text-white sm:text-[46px]">
                {hero?.title}
              </h1>

              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/85 sm:text-base">
                {hero?.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                {hero?.primaryCTA && (
                  <a
                    href={hero.primaryCTA.link}
                    style={{ backgroundColor: "#F2B441", color: "#3B2A20" }}
                    className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold shadow-sm transition-transform active:scale-95"
                  >
                    {hero.primaryCTA.text}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                )}
                {hero?.secondaryCTA && (
                 <a 
                    href={hero.secondaryCTA.link}
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                  >
                    <PlayCircle size={17} />
                    {hero.secondaryCTA.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- IDEAL FOR STRIP ---------------- */}
        {idealFor.length > 0 && (
          <div className="mt-5 flex justify-center px-2">
            <div className="flex max-w-full flex-wrap items-center justify-center gap-2.5 rounded-2xl border border-stone-200 bg-white px-5 py-3.5 sm:gap-3">
              <span className="hidden font-mono text-[11px] font-medium uppercase tracking-widest text-stone-400 sm:inline">
                Ideal for
              </span>
              {idealFor.map((tag) => (
                <span key={tag} style={{ backgroundColor: "#FBF0DA", color: "#3B2A20" }} className="rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </PageWrapper>

      {/* ---------------- MAIN LAYOUT ---------------- */}
      <PageWrapper>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-10">
          <div className="divide-y divide-stone-200/70 lg:col-span-2">
            {/* Challenges — numbered, no invented icons */}
            {challenges.length > 0 && (
              <Section
                eyebrow="The problem"
                title="Challenges restaurants face every day"
                description="Manual processes slow teams down right when speed matters most."
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {challenges.map((c, i) => (
                    <div
                      key={c.title}
                      style={{ borderLeftColor: "#C1602A" }}
                      className="rounded-2xl border-l-[3px] border-y border-r border-stone-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-stone-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-[15px] font-semibold text-stone-800">{c.title}</h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-stone-500">{c.description}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Solution highlight */}
            {solutionBlock && (
              <Section tight>
                <div style={{ backgroundColor: ctaTone.block }} className="relative overflow-hidden rounded-3xl p-8 sm:p-12">
                  <Eyebrow color={ctaTone.chipText}>The solution</Eyebrow>
                  <h2 style={{ color: ctaTone.text }} className="font-serif text-[26px] font-bold sm:text-[30px]">
                    {solutionBlock.title}
                  </h2>
                  <p style={{ color: ctaTone.sub }} className="mt-3 max-w-2xl text-[15px] leading-relaxed">
                    {solutionBlock.description}
                  </p>
                </div>
              </Section>
            )}

            {/* Features — icon comes from your data, not a guess */}
            {features.length > 0 && (
              <Section eyebrow="Capabilities" title="Built for how restaurants actually run">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {features.map((f) => {
                    const Icon = featureIconMap[f.icon] || Star;
                    return (
                      <div key={f.title} className="group rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1">
                        <div style={{ backgroundColor: "#FBF0DA" }} className="mb-4 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105">
                          <Icon size={19} style={{ color: "#3B2A20" }} />
                        </div>
                        <h3 className="text-[15.5px] font-semibold text-stone-800">{f.title}</h3>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-stone-500">{f.description}</p>
                      </div>
                    );
                  })}
                </div>
              </Section>
            )}

            {/* Modules — same check icon repeated, not varied per item */}
            {modules.length > 0 && (
              <Section eyebrow="What's included" title="Every module you need, in one platform">
                <div className="flex flex-wrap gap-2.5">
                  {modules.map((m) => (
                    <span key={m} className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-stone-700">
                      <CheckCircle2 size={14} style={{ color: "#C1602A" }} />
                      {m}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {/* Workflow — a real ordered sequence, numbering earned here */}
            {workflow.length > 0 && (
              <Section eyebrow="How it works" title="From guest to bill in six simple steps">
                <ol className="relative ml-4 space-y-9 border-l-2 border-stone-200 pl-9">
                  {workflow.map((step, i) => {
                    const tone = TONES[i % TONES.length];
                    return (
                      <li key={step.title} className="relative">
                        <span
                          style={{ backgroundColor: tone.block, color: tone.text }}
                          className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full font-mono text-xs font-bold ring-4 ring-[#FDF6EC]"
                        >
                          {i + 1}
                        </span>
                        <h3 className="text-[15px] font-semibold text-stone-800">{step.title}</h3>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-stone-500">{step.description}</p>
                      </li>
                    );
                  })}
                </ol>
              </Section>
            )}

            {/* Metrics */}
            {metrics.length > 0 && (
              <Section tight>
                <div style={{ backgroundColor: ctaTone.block }} className="grid grid-cols-2 gap-6 rounded-3xl p-8 sm:grid-cols-4 sm:p-10">
                  {metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p style={{ color: ctaTone.text }} className="font-serif text-3xl font-bold sm:text-4xl">{m.value}</p>
                      <p style={{ color: ctaTone.sub }} className="mt-1.5 text-[12.5px] font-medium">{m.label}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Benefits — one consistent icon for the whole section */}
            {benefits.length > 0 && (
              <Section eyebrow="Why it matters" title="The impact on your restaurant">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {benefits.map((b) => (
                    <div key={b.title} className="flex gap-3.5">
                      <div style={{ backgroundColor: "#FBF0DA" }} className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 size={18} style={{ color: "#3B2A20" }} />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-stone-800">{b.title}</h3>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-stone-500">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Screenshots */}
            {screenshots.length > 0 && (
              <Section eyebrow="Product tour" title="See it in action">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {screenshots.map((s) => (
                    <figure key={s.title} className="group overflow-hidden rounded-2xl border border-stone-200 bg-white">
                      <div className="aspect-video w-full overflow-hidden bg-stone-100">
                        <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <figcaption className="px-4 py-3 text-[13.5px] font-semibold text-stone-700">{s.title}</figcaption>
                    </figure>
                  ))}
                </div>
              </Section>
            )}

            {/* Integrations — same plug icon repeated, not per-item guesses */}
            {integrations.length > 0 && (
              <Section eyebrow="Integrations" title="Works with the hardware you already have">
                <div className="flex flex-wrap gap-2.5">
                  {integrations.map((it) => (
                    <span key={it} className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3.5 py-1.5 text-[12.5px] font-semibold text-stone-700">
                      <Plug size={14} className="text-stone-500" />
                      {it}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <Section eyebrow="FAQ" title="Common questions">
                <div className="space-y-3">
                  {faqs.map((f, i) => (
                    <FAQItem key={f.question} q={f.question} a={f.answer} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
                  ))}
                </div>
              </Section>
            )}
          </div>

          {/* ---------------- RIGHT: STICKY CONTACT FORM ---------------- */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-20">
              <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white">
                {submitted ? (
                  <div className="flex flex-col items-center gap-2.5 px-7 py-12 text-center">
                    <div style={{ backgroundColor: "#FBF0DA" }} className="flex h-14 w-14 items-center justify-center rounded-full">
                      <CheckCircle2 size={28} style={{ color: "#3B2A20" }} />
                    </div>
                    <p className="text-[15px] font-semibold text-stone-800">Request sent</p>
                    <p className="text-[13.5px] text-stone-500">We'll be in touch shortly to schedule your demo.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 px-7 py-7">
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-stone-600">Full name</label>
                      <div className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50/60 px-3.5 transition-all focus-within:border-stone-400 focus-within:bg-white">
                        <User size={16} className="text-stone-400" />
                        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full bg-transparent py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-stone-600">Email</label>
                      <div className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50/60 px-3.5 transition-all focus-within:border-stone-400 focus-within:bg-white">
                        <Mail size={16} className="text-stone-400" />
                        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@restaurant.com" className="w-full bg-transparent py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-stone-600">Phone</label>
                      <div className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50/60 px-3.5 transition-all focus-within:border-stone-400 focus-within:bg-white">
                        <Phone size={16} className="text-stone-400" />
                        <input required type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full bg-transparent py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-stone-600">Message</label>
                      <div className="flex gap-2.5 rounded-xl border border-stone-200 bg-stone-50/60 px-3.5 transition-all focus-within:border-stone-400 focus-within:bg-white">
                        <MessageSquare size={16} className="mt-3 shrink-0 text-stone-400" />
                        <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us about your restaurant" className="w-full resize-none bg-transparent py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      style={{ backgroundColor: "#3B2A20", color: "#FDF6EC" }}
                      className="group flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-transform active:scale-[0.98]"
                    >
                      {cta?.primaryButton?.text || "Book Free Demo"}
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </button>

                    <p className="text-center text-[11px] text-stone-400">We typically respond within one business day.</p>
                  </form>
                )}
              </div>
            </div>
          </aside>
        </div>
      </PageWrapper>

      {/* ---------------- BOTTOM CTA BANNER ---------------- */}
      {cta && (
        <PageWrapper>
          <section style={{ backgroundColor: heroTone.block }} className="relative overflow-hidden rounded-[32px] py-16 sm:rounded-[36px]">
            <div className="relative mx-auto flex max-w-xl flex-col items-center gap-5 px-6 text-center">
              <h2 style={{ color: heroTone.text }} className="font-serif text-[26px] font-bold sm:text-[32px]">{cta.title}</h2>
              <p style={{ color: heroTone.sub }} className="text-[15px]">{cta.description}</p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                {cta.primaryButton && (
                  <a
                    href={cta.primaryButton.link}
                    style={{ backgroundColor: heroTone.text, color: heroTone.block }}
                    className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-transform active:scale-95"
                  >
                    {cta.primaryButton.text}
                    <ArrowRight size={16} />
                  </a>
                )}
                {cta.secondaryButton && (
                  <a
                    href={cta.secondaryButton.link}
                    style={{ borderColor: heroTone.sub, color: heroTone.text }}
                    className="inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-sm font-semibold transition-colors"
                  >
                    {cta.secondaryButton.text}
                  </a>
                )}
              </div>
            </div>
          </section>
        </PageWrapper>
      )}
    </>
  );
}