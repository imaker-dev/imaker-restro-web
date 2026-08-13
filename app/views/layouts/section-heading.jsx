import clsx from "clsx";

export const Eyebrow = ({ children, className = "" }) => (
  <p
    className={clsx(
      "inline-flex items-start gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-500/90 sm:text-[13px] lg:text-[14px]",
      className,
    )}
  >
    <span
      className="mt-[0.55em] h-px w-6 shrink-0 bg-primary-500/90"
      aria-hidden="true"
    />
    <span>{children}</span>
  </p>
);
const variants = {
  default: {
    wrapper: "mb-8 sm:mb-10 lg:mb-12 max-w-3xl",
    showGrid: true,
    eyebrow: "mb-4",
    title:
      "text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[1.1] lg:text-[48px] lg:leading-[1.08] lg:tracking-[-0.025em]",
    description:
      "mt-5 text-[15px] font-normal leading-[1.6] text-gray-500 sm:text-[16px] lg:text-[17px]",
  },
compact: {
    wrapper: "mb-6 sm:mb-8 lg:mb-10 max-w-2xl",
    showGrid: false,
    eyebrow: "",
    title:
      "mt-5 text-[24px] font-medium leading-[1.2] tracking-[-0.01em] text-ink sm:text-[28px] md:text-[32px]",
    description: "mt-4 text-[15px] leading-relaxed text-[#5b6472] sm:text-base",
  },
};

function renderTitle(title, highlight) {
  if (!highlight || typeof title !== "string") return title;

  const idx = title.indexOf(highlight);
  if (idx === -1) return title; // highlight not found in title, leave as-is

  const before = title.slice(0, idx);
  const after = title.slice(idx + highlight.length);

  return (
    <>
      {before}
      <span className="text-primary-500">{highlight}</span>
      {after}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  variant = "default",
  className,
}) {
  const isCenter = align === "center";
  const v = variants[variant];

  return (
    <section
      className={clsx(
        "relative overflow-hidden",
        v.wrapper,
        isCenter && "mx-auto",
        className,
      )}
    >
      <div className={clsx("relative", isCenter ? "text-center" : "text-left")}>
        {eyebrow && (
          <Eyebrow className={clsx(v.eyebrow, isCenter && "justify-center")}>
            {eyebrow}
          </Eyebrow>
        )}

        <h2 className={v.title}>{renderTitle(title, highlight)}</h2>

        {description && (
          <p className={clsx(v.description, isCenter ? "mx-auto" : "")}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export default SectionHeading;
