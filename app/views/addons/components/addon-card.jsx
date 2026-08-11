import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * AddonCard
 *
 * Data shape: { id, title, description, image, href? }
 *
 * Deliberately NOT a blog-card pattern: the screenshot is full-bleed
 * (no padded thumbnail floating in whitespace), there's no "Read more"
 * footer link — a single floating circular badge straddling the image/
 * content seam is the only CTA, doubling as a persistent "this is a
 * product" signal rather than an article affordance.
 */
export default function AddonCard({ addon }) {
  const { id, title, description, image, href } = addon;
  const resolvedHref = href || `/addons/${id}`;

  return (
    <Link
      href={resolvedHref}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E4E4E1] bg-white transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#d9384a]/30 hover:shadow-[0_32px_60px_-28px_rgba(20,24,28,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9384a] focus-visible:ring-offset-2"
    >
      {/* Animated top accent line */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 bg-[#d9384a] transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      {/* Product screenshot — full-bleed 4:3, no padding, no thumbnail feel */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F1EFE9]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
        />
        {/* Quiet gradient so the floating badge stays legible over any screenshot */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent"
        />
      </div>

      {/* Floating badge — straddles the image/content seam, the single CTA */}
      <span className="absolute right-5 top-[calc(25%-22px)] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E1] bg-white text-[#14181c] shadow-[0_8px_20px_-6px_rgba(20,24,28,0.25)] transition-all duration-300 group-hover:border-[#d9384a] group-hover:bg-[#d9384a] group-hover:text-white">
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </span>

      {/* Copy — module name, not an article headline */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#d9384a]"
          />
          <h3 className="text-[19px] font-semibold leading-snug tracking-tight text-[#14181c] transition-colors duration-300 group-hover:text-[#d9384a]">
            {title}
          </h3>
        </div>
        <p className="mt-2 line-clamp-2 pl-[14px] text-[14px] leading-relaxed text-[#5b6472]">
          {description}
        </p>
      </div>
    </Link>
  );
}