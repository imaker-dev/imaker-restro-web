"use client";

import { Minus, Plus } from "lucide-react";

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-6 rounded-lg py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
      >
        <span className=" text-base leading-snug text-[#14181c] sm:text-lg">
          {question}
        </span>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e4e4e1] transition-colors group-hover:border-prring-primary-500/40">
          {isOpen ? (
            <Minus size={14} className="text-primary-500" />
          ) : (
            <Plus size={14} className="text-primary-500" />
          )}
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl text-[14px] leading-relaxed text-[#5b6472]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
