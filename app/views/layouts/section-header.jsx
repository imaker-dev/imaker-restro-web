export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center", // center | left
  light = false,
  className = "",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div
      className={`max-w-2xl ${alignment} mb-10 transition-all duration-700 ${className}`}
    >
      {badge && <SectionBadge light={light}>{badge}</SectionBadge>}

      <SectionHeading light={light}>
        {title}
        {highlight && <span className="text-primary-500">{highlight}</span>}
      </SectionHeading>

      {description && (
        <SectionSubtext light={light}>{description}</SectionSubtext>
      )}
    </div>
  );
}

/* primitives */

export function SectionBadge({ children, light }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border ${
        light
          ? "bg-primary-400/12 border-primary-400/20"
          : "bg-primary-100 border-primary-300"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          light ? "bg-primary-500" : "bg-primary-500"
        }`}
      />
      <span
        className={`text-xs font-bold uppercase tracking-widest ${
          light ? "text-primary-500" : "text-primary-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({ children, light }) {
  return (
    <h2
      className={`font-display text-4xl sm:text-5xl font-black leading-tight tracking-tight ${
        light ? "text-white" : "text-[#1A0F00]"
      }`}
    >
      {children}
    </h2>
  );
}

export function SectionSubtext({ children, light }) {
  return (
    <p
      className={`text-base sm:text-lg font-medium leading-relaxed mt-4 ${
        light ? "text-white/60" : "text-[#1A0F00]/55"
      }`}
    >
      {children}
    </p>
  );
}