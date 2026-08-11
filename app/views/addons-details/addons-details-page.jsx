







"use client"

import React from "react"
import Image from "next/image"
import NextLink from "next/link"
import { ArrowRight, ArrowUpRight, ChevronDown, CheckCircle } from "lucide-react"
import PageWrapper from "@/app/components/page-wrapper"
import { Eyebrow } from "../layouts/section-heading"

/* -------------------------------------------------------------------------
 * Design tokens (matches the existing iMaker Restro system)
 * ink:      #14181c
 * brand:    #d9384a
 * offwhite: #fbfaf8
 *
 * This component is intentionally generic — every label, heading, step,
 * and image comes from `data`. It's reused across all iMaker Restro
 * add-ons (Captain App, KDS, Loyalty, Analytics, etc.), so nothing here
 * is specific to any single add-on.
 * -----------------------------------------------------------------------*/



function ScreenshotFrame({ src, alt, aspect = "aspect-[16/11]", priority = false, className = "" }) {
  if (!src) return null
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-2xl border border-[#14181c]/10 bg-white shadow-[0_30px_70px_-30px_rgba(20,24,28,0.35)] ${className}`}
    >
      <Image
        src={src}
        alt={alt || ""}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-contain p-2 sm:p-3"
      />
    </div>
  )
}

function PhotoFrame({ src, alt, aspect = "aspect-[4/5]", className = "" }) {
  if (!src) return null
  return (
    <div className={`relative w-full ${aspect} overflow-hidden rounded-2xl bg-[#14181c]/5 ${className}`}>
      <Image
        src={src}
        alt={alt || ""}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
    </div>
  )
}

function PrimaryButton({ href, children }) {
  return (
    <NextLink
      href={href || "#"}
      className="inline-flex items-center gap-2 rounded-full bg-[#d9384a] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#c22e3f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9384a]"
    >
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
    </NextLink>
  )
}

function SecondaryButton({ href, children, light = false }) {
  return (
    <NextLink
      href={href || "#"}
      className={
        light
          ? "inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          : "inline-flex items-center gap-2 rounded-full border border-[#14181c]/15 px-6 py-3.5 text-sm font-medium text-[#14181c] transition hover:border-[#14181c]/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14181c]"
      }
    >
      {children}
    </NextLink>
  )
}

/* -------------------------------------------------------------------------
 * Interactive, data-driven workflow — one large screenshot at a time,
 * switched via an accessible tab strip. Works for any step count/labels.
 * -----------------------------------------------------------------------*/

function WorkflowWalkthrough({ workflow }) {
  const steps = workflow.steps || []
  const [active, setActive] = React.useState(0)
  const tabRefs = React.useRef([])

  if (steps.length === 0) return null

  const current = steps[active]

  function handleKeyDown(e) {
    const total = steps.length
    let next = null
    if (e.key === "ArrowRight") next = (active + 1) % total
    else if (e.key === "ArrowLeft") next = (active - 1 + total) % total
    else if (e.key === "Home") next = 0
    else if (e.key === "End") next = total - 1
    else return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="mx-auto mt-12 max-w-5xl">
      <div
        role="tablist"
        aria-label={workflow.title || "Workflow steps"}
        onKeyDown={handleKeyDown}
        className="flex flex-wrap items-center justify-center gap-1 border-b border-[#14181c]/10 sm:gap-2"
      >
        {steps.map((step, i) => {
          const isActive = i === active
          return (
            <button
              key={i}
              ref={(el) => (tabRefs.current[i] = el)}
              role="tab"
              id={`${workflow.id || "workflow"}-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`${workflow.id || "workflow"}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-2 px-3 py-3.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9384a] sm:px-4 ${
                isActive ? "text-[#14181c]" : "text-[#14181c]/40 hover:text-[#14181c]/70"
              }`}
            >
              <span className="font-mono text-xs">{step.number}</span>
              <span>{step.shortTitle || step.title}</span>
              {isActive && (
                <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#d9384a]" aria-hidden="true" />
              )}
            </button>
          )
        })}
      </div>

      <div
        id={`${workflow.id || "workflow"}-panel`}
        role="tabpanel"
        aria-labelledby={`${workflow.id || "workflow"}-tab-${active}`}
        className="mt-8"
      >
        <ScreenshotFrame src={current.visual?.src} alt={current.visual?.alt} aspect="aspect-[16/10]" />
        <div className="mx-auto mt-6 max-w-lg text-center">
          <h3 className="font-serif text-2xl text-[#14181c]">{current.title}</h3>
          {current.description && (
            <p className="mt-2 text-sm leading-relaxed text-[#14181c]/60">{current.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------
 * Page
 * -----------------------------------------------------------------------*/

const AddonsDetailsPage = ({ data }) => {
  if (!data) return null

  const { hero, overview, workflow, showcase, capabilities, benefits, useCases, faq, relatedAddons, finalCta } = data

  const [openFaq, setOpenFaq] = React.useState(0)

  return (
    <div className="bg-[#fbfaf8] font-sans text-[#14181c]">
      {/* ============================== HERO ============================== */}
      {hero && (
        <PageWrapper containerClassName="pt-10">
          <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-12">
            <div className="lg:pb-6">
              {hero.eyebrow && <Eyebrow>{hero.eyebrow}</Eyebrow>}
              <h1 className="mt-4 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-[#14181c] sm:text-5xl lg:text-[3.1rem]">
                {hero.title}{" "}
                {hero.highlightedTitle && <span className="text-[#d9384a]">{hero.highlightedTitle}</span>}
              </h1>
              {hero.description && (
                <p className="mt-5 max-w-md text-base leading-relaxed text-[#14181c]/65">{hero.description}</p>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {hero.primaryCta && (
                  <PrimaryButton href={hero.primaryCta.href}>{hero.primaryCta.label}</PrimaryButton>
                )}
                {hero.secondaryCta && (
                  <SecondaryButton href={hero.secondaryCta.href}>{hero.secondaryCta.label}</SecondaryButton>
                )}
              </div>
              {hero.trustLine && (
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[#14181c]/40">
                  {hero.trustLine}
                </p>
              )}
            </div>

            <ScreenshotFrame
              src={hero.visual?.src}
              alt={hero.visual?.alt}
              aspect="aspect-[16/12] sm:aspect-[16/11]"
              priority
            />
          </div>
        </PageWrapper>
      )}

      {/* ============================ OVERVIEW ============================= */}
      {overview && (
        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            {overview.eyebrow && <Eyebrow>{overview.eyebrow}</Eyebrow>}
            <h2 className="mt-4 font-serif text-3xl leading-[1.12] text-[#14181c] sm:text-4xl">{overview.title}</h2>
            {overview.description && (
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#14181c]/65">
                {overview.description}
              </p>
            )}
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <ScreenshotFrame src={overview.visual?.src} alt={overview.visual?.alt} aspect="aspect-[16/10]" />
          </div>

          {overview.highlights?.length > 0 && (
            <div className="mx-auto mt-12 max-w-4xl">
              <div className="grid grid-cols-1 divide-y divide-[#14181c]/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                {overview.highlights.map((h, i) => (
                  <div key={i} className="px-0 py-5 text-center sm:px-6 sm:py-0">
                    <p className="text-sm font-semibold text-[#14181c]">{h.title}</p>
                    <p className="mt-1 text-sm leading-snug text-[#14181c]/60">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ============================ WORKFLOW ============================= */}
      {workflow && (
        <section id={workflow.id} className="border-y border-[#14181c]/8 bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            {workflow.eyebrow && <Eyebrow>{workflow.eyebrow}</Eyebrow>}
            <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-[#14181c] sm:text-4xl">{workflow.title}</h2>
            {workflow.description && (
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#14181c]/65">
                {workflow.description}
              </p>
            )}
          </div>

          <WorkflowWalkthrough workflow={workflow} />
        </section>
      )}

      {/* ============================== SHOWCASE ============================== */}
      {showcase && (
        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            {showcase.eyebrow && <Eyebrow>{showcase.eyebrow}</Eyebrow>}
            <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-[#14181c] sm:text-4xl">{showcase.title}</h2>
            {showcase.description && (
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#14181c]/65">
                {showcase.description}
              </p>
            )}
          </div>

          <div className="mx-auto mt-16 max-w-6xl space-y-20 sm:space-y-28">
            {showcase.items?.map((item, i) => {
              const reversed = i % 2 === 1
              return (
                <div
                  key={item.id || i}
                  className={`grid items-center gap-8 lg:grid-cols-5 lg:gap-10 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-2">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#d9384a]">
                      {item.number} / {item.eyebrow}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl leading-[1.15] text-[#14181c] sm:text-[1.75rem]">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 text-sm leading-relaxed text-[#14181c]/60">{item.description}</p>
                    )}
                    {item.points?.length > 0 && (
                      <ul className="mt-5 space-y-2">
                        {item.points.map((p, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-[#14181c]/70">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#d9384a]" aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="lg:col-span-3">
                    <ScreenshotFrame src={item.visual?.src} alt={item.visual?.alt} aspect="aspect-[16/11]" />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* =========================== CAPABILITIES =========================== */}
      {capabilities && (
        <section className="border-y border-[#14181c]/8 bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-xl">
              {capabilities.eyebrow && <Eyebrow>{capabilities.eyebrow}</Eyebrow>}
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-[#14181c] sm:text-4xl">
                {capabilities.title}
              </h2>
              {capabilities.description && (
                <p className="mt-4 text-base leading-relaxed text-[#14181c]/65">{capabilities.description}</p>
              )}
            </div>

            {capabilities.items?.length > 0 && (
              <div className="mt-10 divide-y divide-[#14181c]/10 border-t border-[#14181c]/10">
                {capabilities.items.map((c, i) => (
                  <div key={i} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 py-6 sm:grid-cols-[4.5rem_1fr]">
                    <span className="font-mono text-xs text-[#d9384a]">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#14181c] sm:text-base">{c.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#14181c]/60">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ============================== BENEFITS ============================== */}
      {benefits && (
        <section className="bg-[#14181c] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            {benefits.eyebrow && <Eyebrow tone="light">{benefits.eyebrow}</Eyebrow>}
            <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-white sm:text-4xl">{benefits.title}</h2>
            {benefits.description && (
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">{benefits.description}</p>
            )}
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <Image
                src={benefits.visual?.src}
                alt={benefits.visual?.alt || ""}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain p-2 sm:p-3"
              />
            </div>
          </div>

          {benefits.items?.length > 0 && (
            <div className="mx-auto mt-14 max-w-5xl">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                {benefits.items.map((b, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <p className="text-sm font-semibold text-white">{b.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/50">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ============================= USE CASES ============================= */}
      {useCases && (
        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            {useCases.eyebrow && <Eyebrow>{useCases.eyebrow}</Eyebrow>}
            <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-[#14181c] sm:text-4xl">{useCases.title}</h2>
          </div>

          {useCases.items?.length > 0 && (
            <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
              {useCases.items.map((u, i) => (
                <div key={i}>
                  <PhotoFrame src={u.visual?.src} alt={u.visual?.alt} aspect="aspect-[4/5]" />
                  <h3 className="mt-4 text-base font-semibold text-[#14181c]">{u.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#14181c]/60">{u.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* =============================== FAQ ================================ */}
      {faq && (
        <section className="border-t border-[#14181c]/8 bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              {faq.eyebrow && <Eyebrow>{faq.eyebrow}</Eyebrow>}
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-[#14181c] sm:text-4xl">{faq.title}</h2>
            </div>

            {faq.questions?.length > 0 && (
              <div className="mt-12 divide-y divide-[#14181c]/10 border-t border-[#14181c]/10">
                {faq.questions.map((q, i) => {
                  const open = openFaq === i
                  return (
                    <div key={i}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? -1 : i)}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9384a]"
                      >
                        <span className="text-sm font-medium text-[#14181c] sm:text-base">{q.question}</span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-[#14181c]/50 transition-transform duration-300 motion-reduce:transition-none ${
                            open ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        id={`faq-panel-${i}`}
                        className={`grid overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
                          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="min-h-0 text-sm leading-relaxed text-[#14181c]/60">{q.answer}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ========================== RELATED ADD-ONS ========================== */}
      {relatedAddons && (
        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl">
              {relatedAddons.eyebrow && <Eyebrow>{relatedAddons.eyebrow}</Eyebrow>}
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-[#14181c] sm:text-4xl">
                {relatedAddons.title}
              </h2>
              {relatedAddons.description && (
                <p className="mt-4 text-base leading-relaxed text-[#14181c]/65">{relatedAddons.description}</p>
              )}
            </div>

            {relatedAddons.items?.length > 0 && (
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {relatedAddons.items.map((addon, i) => (
                  <NextLink key={i} href={addon.href || "#"} className="group block">
                    <PhotoFrame src={addon.visual?.src} alt={addon.visual?.alt} aspect="aspect-[4/3]" />
                    <div className="mt-4 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-[#14181c]">{addon.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#14181c]/60">{addon.description}</p>
                      </div>
                      <ArrowUpRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#14181c]/40 transition group-hover:text-[#d9384a]"
                        aria-hidden="true"
                      />
                    </div>
                  </NextLink>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ============================= FINAL CTA ============================= */}
      {finalCta && (
        <section className="px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#14181c] px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div className="mx-auto max-w-3xl">
              <ScreenshotFrame
                src={finalCta.visual?.src}
                alt={finalCta.visual?.alt}
                aspect="aspect-[16/10]"
                className="border-white/10"
              />
            </div>
            <div className="mx-auto mt-10 max-w-xl text-center">
              {finalCta.eyebrow && <Eyebrow tone="light">{finalCta.eyebrow}</Eyebrow>}
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-white sm:text-4xl">{finalCta.title}</h2>
              {finalCta.description && (
                <p className="mt-4 text-base leading-relaxed text-white/60">{finalCta.description}</p>
              )}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {finalCta.primaryCta && (
                  <PrimaryButton href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</PrimaryButton>
                )}
                {finalCta.secondaryCta && (
                  <SecondaryButton href={finalCta.secondaryCta.href} light>
                    {finalCta.secondaryCta.label}
                  </SecondaryButton>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default AddonsDetailsPage