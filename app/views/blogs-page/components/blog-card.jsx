import { Clock, CalendarDays, ArrowUpRight } from "lucide-react";
import { formatDate } from "@/app/data/blogs";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group relative flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-[0_24px_48px_-16px_rgba(217,56,74,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
    >
      {/* Image (gradient shows if the image is missing) */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-primary-500">
        <img
          src={blog.coverImage}
          alt={blog.coverAlt}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

        <span className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          <Clock className="h-3.5 w-3.5" />
          {blog.readTime} min read
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-3.5 pb-3 pt-5">
        <div className="flex items-center gap-3 text-[13px] font-medium">
          <span className="inline-flex items-center gap-2 font-semibold text-primary-600">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            {blog.category}
          </span>

          <span className="h-4 w-px bg-slate-200" />

          <span className="inline-flex items-center gap-1.5 text-slate-400">
            <CalendarDays className="h-3.5 w-3.5 text-primary-400" />
            {formatDate(blog.publishedAt)}
          </span>
        </div>

        <h3 className="mt-2.5 line-clamp-2 text-xl font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-primary-500">
          {blog.title}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {blog.excerpt}
        </p>

        <div className="  flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
          <span className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-primary-500">
            Read article
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-all duration-300 group-hover:rotate-12 group-hover:bg-primary-500 group-hover:text-white">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
