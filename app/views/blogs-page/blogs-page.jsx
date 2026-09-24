"use client";
import { useMemo, useState } from "react";
import { Search, SearchX, } from "lucide-react";
import BlogCard from "./components/blog-card";
import { blogs, getCategories, getCategoryCount } from "@/app/data/blogs";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeading from "../layouts/section-heading";
import CtaSection from "../layouts/cta-section";

export default function BlogsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogs.filter(
      (b) =>
        (category === "All" || b.category === category) &&
        (!q ||
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q))),
    );
  }, [query, category]);

  return (
    <>
      {/* Hero */}
      <PageWrapper
        className="relative overflow-hidden border-b border-slate-200/70 bg-white"
        containerClassName="mt-16"
      >
        {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.14),transparent)]" /> */}
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
        <SectionHeading
          eyebrow={"The POS Blog"}
          title={"Smarter outlets start with better insights"}
          highlight={"better insights"}
          description={
            "Guides, tips, and real-world strategies to help you bill faster, control stock, and grow your business."
          }
        />

        <div className="relative mx-auto mt-9 max-w-lg">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-12 pr-5 text-sm text-slate-900 shadow-lg shadow-primary-100/60 outline-none transition placeholder:text-slate-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-100"
          />
        </div>
      </PageWrapper>

      {/* Filters + grid */}
      <PageWrapper>
        <div className="mb-10 flex gap-2.5 overflow-x-auto px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {getCategories().map((c) => {
            const active = category === c;

            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? "bg-primary-500 text-white shadow-md shadow-primary-200"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-primary-500 hover:ring-primary-200"
                }`}
              >
                {c}

                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {getCategoryCount(c)}
                </span>
              </button>
            );
          })}
        </div>

        {filtered.length ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <SearchX className="h-8 w-8 text-slate-400" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-800">
              No articles found
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Try a different keyword or category.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-5 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Reset filters
            </button>
          </div>
        )}
      </PageWrapper>

      {/* CTA */}
      <CtaSection
        cta={{
          eyebrow: "Ready to Grow?",
          title: "Let's Build Your Restaurant's Future Together.",
          description:
            "Simplify billing, inventory, customer engagement and operations with one connected platform.",
          primaryButton: {
            text: "Book a Demo",
            link: "/contact",
          },
          secondaryButton: {
            text: "Talk to Sales",
            link: "/contact",
          },
        }}
      />
    </>
  );
}
