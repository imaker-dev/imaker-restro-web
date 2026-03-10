import PageWrapper from "@/app/components/page-wrapper";
import { Quote, Star } from "lucide-react";
import SectionHeader from "../layouts/section-header";

/* ─────────────────────────────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Rajesh Mehta",
    role: "Owner, Spice Garden",
    city: "Mumbai",
    text: "We ditched our legacy POS and never looked back. Day-end used to take 2 hours of manual work. Now it's literally one click.",
    rating: 5,
    av: "R",
    bg: "bg-orange-500",
  },
  {
    name: "Priya Nair",
    role: "Manager, The Brew House",
    city: "Bengaluru",
    text: "The floor management is exceptional. During peak weekends our table confusion dropped to zero. Turnaround time improved by 40%.",
    rating: 5,
    av: "P",
    bg: "bg-purple-600",
  },
  {
    name: "Arjun Sharma",
    role: "Director, CloudBite",
    city: "Delhi",
    text: "Managing 6 cloud kitchen brands from one dashboard was a dream. The category-wise analytics alone justifies the entire subscription.",
    rating: 5,
    av: "A",
    bg: "bg-sky-600",
  },
  {
    name: "Kavitha Reddy",
    role: "Owner, Dosa Palace",
    city: "Hyderabad",
    text: "Setup was shockingly fast. Our cashier had it figured out in an hour. The GST billing is perfect — our accountant specifically praised it.",
    rating: 5,
    av: "K",
    bg: "bg-green-600",
  },
];

export default function Testimonials() {
  return (
    <PageWrapper className="bg-[#F9F6F1]">
      {/* Header */}
      <SectionHeader
        badge="Customer Stories"
        title="Don't Take"
        highlight=" Our Word For It"
        align="left"
        className="max-w-2xl"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TESTIMONIALS.map(({ name, role, city, text, rating, av, bg }, i) => (
          <div
            key={name}
            className={`bg-white border border-[#1A0F00]/6 rounded-2xl p-5 flex flex-col hover:border-amber-300 hover:shadow-md transition-all duration-300`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(rating)].map((_, j) => (
                <Star
                  key={j}
                  size={13}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <Quote size={18} className="text-amber-300 mb-2" />
            <p className="text-sm font-medium text-[#1A0F00]/60 leading-relaxed flex-1 mb-5">
              {text}
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[#1A0F00]/6">
              <div
                className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center text-white text-sm font-black flex-shrink-0`}
              >
                {av}
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A0F00]">{name}</p>
                <p className="text-xs font-medium text-[#1A0F00]/40">
                  {role} · {city}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
