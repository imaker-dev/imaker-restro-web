import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * FeatureRow
 *
 * Data shape: { id, title, description, image, href? }
 *
 * One feature per row, image and copy alternating sides by index.
 * Deliberately different from AddonCard's compact grid — features are
 * fewer and get room to breathe, rather than being flattened into
 * equal-size tiles.
 */
export default function FeatureRow({ feature, index }) {
  const { title, description, image, eyebrow } = feature;
  const isReversed = index % 2 === 1;

  return (
    <div className="grid items-center gap-10 py-4 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-20 lg:py-8 ">
      {/* Visual */}
      <div className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
        {/* Offset panel behind the image — gives the row depth without a floating badge */}
        <div
          aria-hidden="true"
          className={`absolute -z-10 h-full w-full rounded-[28px] bg-primary-500/[0.06] ${
            isReversed ? "-right-4 -top-4" : "-left-4 -top-4"
          }`}
        />
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-[#E4E4E1] bg-[#F1EFE9] shadow-[0_24px_50px_-30px_rgba(20,24,28,0.25)]">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Copy */}
      <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-[6px] w-[6px] shrink-0 rounded-full bg-primary-500"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-500">
            {eyebrow}
          </span>
        </div>

        <h3 className="mt-3 text-[26px] font-semibold leading-[1.2] tracking-tight text-[#14181c] sm:text-[30px]">
          {title}
        </h3>

        <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-[#5b6472]">
          {description}
        </p>

        <Link
          href={`/features/${feature.id}`}
          className="group mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#14181c] transition-colors duration-300 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-sm"
        >
          Learn more
          <ArrowUpRight
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
