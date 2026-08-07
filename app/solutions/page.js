import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllSolutionsList } from "@/app/data/solutions";

export const metadata = {
  title: "Solutions — POS Built For Every Food Business",
  description:
    "See how the POS adapts to restaurants, cafes, fast food counters, cloud kitchens, and food trucks — pick the format closest to yours.",
};

const TONE_CLASSES = [
  {
    card: "bg-primary-500",
    text: "text-white",
    sub: "text-white/70",
    btnBg: "bg-secondary-500",
    btnText: "text-white",
    glow: "bg-white/20",
  },
  {
    card: "bg-secondary-500",
    text: "text-white",
    sub: "text-white/50",
    btnBg: "bg-primary-500",
    btnText: "text-white",
    glow: "bg-black/30",
  },
];

const Page = () => {
  const solutions = getAllSolutionsList();

  return (
    <div className="min-h-screen bg-[#FDF6EC] px-4 py-16 sm:px-8">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="mb-3 inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#C1602A]">
          Solutions
        </span>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
          Built for every kind of kitchen
        </h1>
        <p className="mt-3 text-sm text-stone-500 sm:text-base">
          One POS, five formats. Pick the setup closest to yours and see exactly
          how it runs.
        </p>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        {solutions.map((item, i) => {
          const tone = TONE_CLASSES[i % TONE_CLASSES.length];
          const imageOnRight = i % 2 === 0;

          return (
            <Link
              key={item.id}
              href={`/solutions/${item.id}`}
              className={`group grid overflow-hidden rounded-[32px] shadow-[0_1px_1px_rgba(28,25,23,0.04),0_24px_48px_-20px_rgba(28,25,23,0.35)] sm:grid-cols-2 ${tone.card}`}
            >
              {/* Image half */}
              <div
                className={`relative flex h-64 items-center justify-center sm:h-auto ${
                  imageOnRight ? "sm:order-2" : "sm:order-1"
                }`}
              >
                <div
                  className={`absolute bottom-10 h-6 w-32 rounded-full blur-lg opacity-70 ${tone.glow}`}
                />
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 h-40 w-40 object-contain drop-shadow-[0_22px_20px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 sm:h-48 sm:w-48"
                />
              </div>

              {/* Text half */}
              <div
                className={`flex flex-col justify-center gap-4 px-8 py-10 sm:px-10 ${
                  imageOnRight ? "sm:order-1" : "sm:order-2"
                }`}
              >
                <span
                  className={`font-mono text-xs font-medium uppercase tracking-[0.2em] ${tone.sub}`}
                >
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(solutions.length).padStart(2, "0")}
                </span>

                <h2
                  className={`font-serif text-2xl font-bold leading-tight sm:text-3xl ${tone.text}`}
                >
                  {item.title}
                </h2>

                <p
                  className={`text-sm leading-relaxed sm:text-base ${tone.sub}`}
                >
                  {item.description}
                </p>

                <span
                  className={`mt-2 inline-flex w-fit items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition-transform group-hover:translate-x-1 ${tone.btnBg} ${tone.btnText}`}
                >
                  Explore setup
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
