"use client";

import { useState } from "react";
import {
  Store,
  User,
  Mail,
  Phone,
  MapPin,
  Map,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  Zap,
  Gift,
  ArrowRight,
  UtensilsCrossed,
  Star,
} from "lucide-react";
import PageWrapper from "../../components/page-wrapper.jsx";
import Image from "next/image";
import axios from "axios";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Chandigarh",
];

const FEATURES = [
  "Full POS System",
  "Inventory Management",
  "Real-time Analytics",
  "Staff Management",
  "Online Orders",
  "GST Reports",
];

/* ────────── Reusable Input ────────── */
const InputField = ({
  icon: Icon,
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
      {label} {required && <span className="text-rose-400 normal-case">*</span>}
    </label>
    <div className="relative group">
      <Icon
        size={15}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors pointer-events-none"
      />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-primary-400/25 focus:border-primary-400 focus:bg-white transition-all"
      />
    </div>
  </div>
);

/* ────────── Reusable Select ────────── */
const SelectField = ({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
      {label} {required && <span className="text-rose-400">*</span>}
    </label>
    <div className="relative group">
      <Icon
        size={15}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors pointer-events-none"
      />
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm
          focus:outline-none focus:ring-2 focus:ring-primary-400/25 focus:border-primary-400 focus:bg-white transition-all appearance-none cursor-pointer"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
      />
    </div>
  </div>
);

/* ────────── Section Header ────────── */
const SectionLabel = ({ children }) => (
  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4">
    <span className="w-4 h-px bg-slate-300" />
    {children}
  </p>
);

/* ════════════════════════════════════
   Main Component
═══════════════════════════════════ */
export default function RegisterPage() {
  const [form, setForm] = useState({
    restaurant_name: "",
    contact_person: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    plan_interest: "free",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/registration/register`,
        form,
      );

      // console.log("API Response:", res.data);

      setDone(true);
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message);

      alert(
        err.response?.data?.message || err.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  /* ── Success ── */
  if (done)
    return (
      <PageWrapper
        className="bg-gray-100 flex items-center justify-center"
        containerClassName="pt-10 lg:pt-6"
      >
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200 p-10 max-w-sm w-full text-center">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={32} className="text-emerald-500" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-800 mb-2">
            Registration Submitted!
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            <span className="font-semibold text-slate-700">
              {form.restaurant_name}
            </span>{" "}
            is registered. We'll contact{" "}
            <span className="font-semibold text-slate-700">{form.email}</span>{" "}
            within 24 hrs.
          </p>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-8
          ${form.plan_interest === "pro" ? "bg-primary-50 text-primary-600 border border-primary-200" : "bg-slate-100 text-slate-600 border border-slate-200"}`}
          >
            {form.plan_interest === "pro" ? (
              <Zap size={11} />
            ) : (
              <Gift size={11} />
            )}
            {form.plan_interest === "pro" ? "Pro Plan" : "Free Plan"} Selected
          </span>
          <button
            onClick={() => {
              setDone(false);
              setForm({
                restaurant_name: "",
                contact_person: "",
                email: "",
                phone: "",
                city: "",
                state: "",
                plan_interest: "free",
                message: "",
              });
            }}
            className="w-full py-3 rounded-xl bg-primary-500 text-white text-sm font-bold hover:bg-primary-600 transition-colors duration-200"
          >
            Register Another Outlet
          </button>
        </div>
      </PageWrapper>
    );

  /* ── Main ── */
  return (
    <PageWrapper className="bg-gray-100" containerClassName="pt-10 lg:pt-6">
      <div className="w-full bg-white rounded-3xl shadow-2xl shadow-slate-200/70 overflow-hidden lg:flex">
        {/* ── LEFT PANEL ── */}
        <div className="lg:w-[38%] bg-secondary-500 p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            {/* Brand */}
            <Image
              alt="logo"
              src={"/Images/imaker-logo.svg"}
              width={200}
              height={200}
            />

            {/* Hero */}
            <div>
              <div className="inline-flex items-center gap-1.5 bg-primary-500/15 border border-primary-500/25 text-primary-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <Star size={10} fill="currentColor" /> Trusted by 2,000+ outlets
              </div>
              <h1 className="text-[26px] font-extrabold text-white leading-snug mb-3">
                Manage your restaurant
                <br />
                <span className="text-primary-400">the smart way.</span>
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Everything you need to run a modern food outlet — from billing
                to analytics, all in one place.
              </p>
            </div>

            {/* Feature checklist */}
            <ul className="space-y-2.5">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-500/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={11} className="text-primary-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="flex-1 p-8 lg:p-10 overflow-y-auto">
          <div className="mb-7">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-1">
              Register Your Outlet
            </h2>
            <p className="text-slate-500 text-sm">
              Quick setup — takes less than 2 minutes.
            </p>
          </div>

          <form onSubmit={submit} className="space-y-7">
            {/* Outlet Info */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <InputField
                  icon={Store}
                  label="Restaurant Name"
                  name="restaurant_name"
                  value={form.restaurant_name}
                  onChange={handle}
                  placeholder="e.g. Biryani House"
                  required
                />
              </div>
              <InputField
                icon={User}
                label="Contact Person"
                name="contact_person"
                value={form.contact_person}
                onChange={handle}
                placeholder="Full name"
                required
              />
              <InputField
                icon={Phone}
                label="Phone Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handle}
                placeholder="+91 98765 43210"
                required
              />
              <div className="sm:col-span-2">
                <InputField
                  icon={Mail}
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="you@restaurant.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                icon={MapPin}
                label="City"
                name="city"
                value={form.city}
                onChange={handle}
                placeholder="e.g. Hyderabad"
                required
              />
              <SelectField
                icon={Map}
                label="State"
                name="state"
                value={form.state}
                onChange={handle}
                options={INDIAN_STATES}
                placeholder="Select state"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Choose Plan <span className="text-rose-400 normal-case">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    id: "free",
                    icon: Gift,
                    title: "Free",
                    sub: "Get started for free",
                  },
                  {
                    id: "pro",
                    icon: Zap,
                    title: "Pro",
                    sub: "Full feature access",
                  },
                ].map(({ id, icon: Icon, title, sub }) => {
                  const active = form.plan_interest === id;
                  return (
                    <label
                      key={id}
                      className={`relative flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200
                        ${
                          active
                            ? "border-primary-500 bg-primary-50"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        }`}
                    >
                      <input
                        type="radio"
                        name="plan_interest"
                        value={id}
                        checked={active}
                        onChange={handle}
                        className="sr-only"
                      />
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${active ? "bg-primary-100" : "bg-slate-100"}`}
                      >
                        <Icon
                          size={16}
                          className={
                            active ? "text-primary-500" : "text-slate-600"
                          }
                        />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-bold ${active ? (active ? "text-primary-600" : "text-slate-800") : "text-slate-600"}`}
                        >
                          {title}
                        </p>
                        <p className="text-xs text-slate-400">{sub}</p>
                      </div>
                      {active && (
                        <CheckCircle2
                          size={15}
                          className={`absolute top-3 right-3 ${active ? "text-primary-500" : "text-slate-700"}`}
                        />
                      )}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Message{" "}
                <span className="normal-case font-normal text-slate-400">
                  (optional)
                </span>
              </label>
              <div className="relative group">
                <MessageSquare
                  size={15}
                  className="absolute left-3.5 top-3.5 text-slate-400 group-focus-within:text-primary-500 transition-colors pointer-events-none"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows={3}
                  placeholder="Tell us about your specific requirements…"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-primary-400/25 focus:border-primary-400 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300
                ${
                  loading
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                    : "bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-slate-900/15 hover:shadow-primary-500/25 active:scale-[0.98]"
                }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Submitting…
                </>
              ) : (
                <>
                  Register Outlet
                  <ArrowRight size={15} />
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-400 pb-1">
              By registering, you agree to our{" "}
              <a href="#" className="text-primary-500 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary-500 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
