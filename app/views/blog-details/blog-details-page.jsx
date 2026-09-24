"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Link2,
  Linkedin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import "../../styles/additional-styles/blog-prose.css";
import BlogCard from "../blogs-page/components/blog-card";
import { BLOG_AUTHOR, formatDate, getRelatedBlogs } from "@/app/data/blogs";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeading from "../layouts/section-heading";

const BLOG_PATH = "/blogs";

const prepareHtml = (html = "") =>
  html.replace(/<a\s+([^>]*href=["']https?:\/\/[^>]*)>/gi, (m, attrs) =>
    /target=/i.test(attrs)
      ? m
      : `<a ${attrs} target="_blank" rel="noopener noreferrer">`,
  );

/* ---------------------------- small pieces ---------------------------- */
function BrandMark({ size = "h-10 w-10", text = "text-sm" }) {
  const [failed, setFailed] = useState(false);
  return failed || !BLOG_AUTHOR.logo ? (
    <span
      className={`${size} ${text} flex shrink-0 items-center justify-center rounded-full bg-primary-600 font-semibold text-white`}
    >
      {BLOG_AUTHOR.name.charAt(0)}
    </span>
  ) : (
    <img
      src={BLOG_AUTHOR.logo}
      alt={BLOG_AUTHOR.name}
      onError={() => setFailed(true)}
      className={`${size} shrink-0 rounded-full border border-slate-200 bg-white object-contain p-1.5`}
    />
  );
}

function ShareButtons({ title, url, vertical = false }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:bg-primary-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600";

  const links = [
    {
      label: "Share on WhatsApp",
      Icon: MessageCircle,
      href: `https://wa.me/?text=${t}%20${u}`,
    },
    {
      label: "Share on LinkedIn",
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
    {
      label: "Share on X",
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
    },
  ];

  return (
    <div className={`flex items-center gap-2.5 ${vertical ? "flex-col" : ""}`}>
      {links.map(({ label, Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={btn}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className={btn}
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}

const BENEFITS = [
  "Fast billing, KOT and table management",
  "Live inventory and low-stock alerts",
  "Sales reports you can act on",
];

function CtaCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-7 text-white shadow-[0_28px_60px_-28px_rgba(15,23,42,0.6)]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-600/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          Free demo
        </span>

        <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight">
          Ready to simplify your outlet?
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
          See how {BLOG_AUTHOR.name} handles your daily operations in one place.
        </p>

        <ul className="mt-6 space-y-3">
          {BENEFITS.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-sm text-slate-200"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>

        <Link href={"/contact"} className="mt-6 w-full btn btn-primary">
          Book a free demo <ArrowRight className="h-4 w-4" />
        </Link>

        <p className="mt-5 text-center text-xs text-slate-400">
          Free, no-obligation demo
        </p>
      </div>
    </div>
  );
}

/* Slim bottom bar for mobile/tablet while reading */
function MobileCtaBar({ show }) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.25)] backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
        <p className="text-sm font-semibold leading-tight text-slate-900">
          Try {BLOG_AUTHOR.name}
          <span className="block text-xs font-normal text-slate-500">
            Free demo for your outlet
          </span>
        </p>
        <Link href={"/contact"} className="btn btn-primary">
          Book demo <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------- page -------------------------------- */
export default function BlogDetailsPage({ blog }) {
  const articleRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");

  const html = useMemo(() => prepareHtml(blog?.content), [blog]);

  useEffect(() => {
    setUrl(window.location.href.split("#")[0]);
  }, [blog]);

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const total = height - window.innerHeight * 0.6;
      const pct =
        total > 0 ? ((-top + window.innerHeight * 0.3) / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [blog]);

  if (!blog) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Article not found
        </h1>
        <p className="mt-2 text-slate-600">
          The article you are looking for may have moved or no longer exists.
        </p>
        <Link
          href={BLOG_PATH}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blogs
        </Link>
      </main>
    );
  }

  const related = getRelatedBlogs(blog);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.seo?.description || blog.excerpt,
    image: blog.seo?.ogImage || blog.coverImage,
    datePublished: blog.publishedAt,
    author: { "@type": "Organization", name: BLOG_AUTHOR.name },
    publisher: { "@type": "Organization", name: BLOG_AUTHOR.name },
    ...(url && { mainEntityOfPage: url }),
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Reading progress */}
      <div className="fixed left-0 top-0 z-[60] h-[3px] w-full">
        <div
          className="h-full bg-primary-600 transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ------------------------------ Hero ------------------------------ */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-primary-50/70 to-white">
        <PageWrapper containerClassName="w-full pt-16 pb-12 lg:pt-8 lg:pb-16">
          <Link
            href={BLOG_PATH}
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary-600"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All articles
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary-600 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {blog.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                  <Clock className="h-4 w-4 text-primary-600" /> {blog.readTime}{" "}
                  min read
                </span>
              </div>

              <h1 className="mt-6 text-balance text-3xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl xl:text-[2.85rem]">
                {blog.title}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                {blog.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-3.5 border-t border-slate-200 pt-6">
                <BrandMark size="h-11 w-11" />
                <div className="leading-tight">
                  <p className="font-semibold text-slate-900">
                    {BLOG_AUTHOR.name}
                  </p>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {formatDate(blog.publishedAt)}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)] sm:p-2.5">
                <div className="aspect-[4/3] overflow-hidden rounded-[20px] bg-slate-100 sm:aspect-[16/11]">
                  <img
                    src={blog.coverImage}
                    alt={blog.coverAlt}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>

      {/* ------------------------------ Body ------------------------------ */}
      <PageWrapper containerClassName="grid gap-10 py-4 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-14 xl:grid-cols-[56px_minmax(0,1fr)_350px]">
        {/* Share rail */}
        <aside className="hidden xl:block">
          <div className="sticky top-28 flex flex-col items-center gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              Share
            </span>
            <ShareButtons title={blog.title} url={url} vertical />
          </div>
        </aside>

        {/* Article */}
        <article
          ref={articleRef}
          className="min-w-0 xl:mx-auto xl:w-full xl:max-w-[720px]"
        >
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {blog.tags?.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-200 pt-8">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-sm text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>

        {/* Fixed CTA (sticky on desktop, stacks under the article on mobile) */}
        <aside>
          <div className="lg:sticky lg:top-28">
            <CtaCard />
          </div>
        </aside>
      </PageWrapper>

      {/* ----------------------------- Related ----------------------------- */}
      {related.length > 0 && (
        <PageWrapper>
          <SectionHeading
            eyebrow={"Related insights"}
            title="More restaurant insights"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b) => (
              <BlogCard key={b.id} blog={b} />
            ))}
          </div>
        </PageWrapper>
      )}

      <MobileCtaBar show={progress > 8 && progress < 92} />
    </main>
  );
}
