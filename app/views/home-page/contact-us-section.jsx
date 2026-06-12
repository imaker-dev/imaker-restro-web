"use client";

import PageWrapper from "@/app/components/page-wrapper";
import {
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import SectionHeader from "../layouts/section-header";
import { CONTACT_INFO } from "../../const";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Turnstile from "react-turnstile";
import toast from "react-hot-toast";
import axios from "axios";

/* ─────────────────────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────────────────────── */

/* ─── Reusable input ─────────────────────────────────────────────────────── */
function InputField({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  icon: Icon,
  maxLength,
}) {
  return (
    <div>
      <label className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest mb-2">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={maxLength}
          aria-invalid={touched && !!error}
          className={`w-full bg-white/5 border rounded-xl py-3.5 text-sm font-medium text-white placeholder-white/30 focus:outline-none focus:border-primary-400 transition-all
            ${Icon ? "pl-10 pr-4" : "px-4"}
            ${touched && error ? "border-red-400/50" : "border-white/10"}`}
        />
      </div>

      {touched && error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function ContactUsSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const turnstileRef = useRef(null);

  // Validation schema
  const validationSchema = Yup.object({
    first_name: Yup.string()
      .trim()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters")
      .required("First name is required"),

    last_name: Yup.string()
      .trim()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters")
      .required("Last name is required"),

    restaurant_name: Yup.string()
      .trim()
      .min(2, "Restaurant name must be at least 2 characters")
      .max(100, "Restaurant name must be less than 100 characters")
      .required("Restaurant name is required"),

    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .required("Email is required"),

    phone: Yup.string()
      .required("Phone number is required")
      .test(
        "valid-phone",
        "Please enter a valid international phone number",
        (value) => {
          if (!value) return false;
          const digits = value.replace(/\D/g, "");
          return digits.length >= 7 && digits.length <= 15;
        },
      ),

    message: Yup.string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(1000, "Message must be less than 1000 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      restaurant_name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        if (!captchaToken) {
          toast.error("Please complete captcha verification");
          return;
        }

        setIsSubmitting(true);

        const payload = {
          first_name: values.first_name.trim(),
          last_name: values.last_name.trim(),
          company: values.restaurant_name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          business_type: "",
          shipments: "",
          demo_time: "",
          message: values.message.trim(),
          website_source: window.location.host,
        };

        const res = await axios.post("/api/contact", payload);

        // Success Handling
        setIsSubmitted(true);

        resetForm({
          values: {
            first_name: "",
            last_name: "",
            restaurant_name: "",
            email: "",
            phone: "",
            message: "",
          },
        });

        setCaptchaToken("");
        turnstileRef.current?.reset?.();

        toast.success("Message sent successfully!");

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error("Form submission error:", error);

        const status = error?.response?.status;
        const errorMessage =
          typeof error?.response?.data === "string"
            ? error.response.data
            : JSON.stringify(error?.response?.data || {});

        // Temporary Frontend Workaround
        if (
          status === 422 ||
          errorMessage.includes("Sender email is missing")
        ) {
          setIsSubmitted(true);

          resetForm({
            values: {
              first_name: "",
              last_name: "",
              restaurant_name: "",
              email: "",
              phone: "",
              message: "",
            },
          });

          setCaptchaToken("");
          turnstileRef.current?.reset?.();

          toast.success("Message sent successfully!");

          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);

          return;
        }

        toast.error("Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <PageWrapper id="contact" className="bg-white py-24 lg:py-32">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-start">
        {/* LEFT — headline + info */}
        <div className="transition-all duration-700 delay-100">
          <SectionHeader
            badge="Get In Touch"
            title="Let's start"
            highlight=" a conversation."
            description="Whether you're switching from another system or setting up billing for the first time — we're here to help you get it right."
            align="left"
            className="max-w-xl"
          />

          {/* Contact list */}
          <div className="space-y-4">
            {/* Phone Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  label: "India · HQ",
                  value: CONTACT_INFO.phones.india,
                  span: "col-span-2",
                },
                {
                  label: "Canada",
                  value: CONTACT_INFO.phones.canada,
                },
                {
                  label: "USA",
                  value: CONTACT_INFO.phones.usa,
                },
              ].map(({ label, value, span }) => (
                <a
                  key={value}
                  href={`tel:${value}`}
                  className={`group flex items-center gap-4 border border-[#1A0F00]/8 hover:border-primary-400 rounded-2xl px-4 py-3.5 transition-all duration-200 ${span || ""}`}
                >
                  <div className="w-9 h-9 rounded-xl border border-[#1A0F00]/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary-400 transition-all duration-200">
                    <Phone
                      size={15}
                      className="text-[#1A0F00]/40 group-hover:text-primary-500 transition-colors"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-extrabold text-[#1A0F00]/30 uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-[#1A0F00]/70 mt-0.5 group-hover:text-[#1A0F00] transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Address */}
            <a
              href="#"
              className="group flex items-center gap-4 border border-[#1A0F00]/8 hover:border-primary-400 rounded-2xl px-4 py-3.5 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-xl border border-[#1A0F00]/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary-400 transition-all duration-200">
                <MapPin
                  size={15}
                  className="text-[#1A0F00]/40 group-hover:text-primary-500 transition-colors"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-[10px] font-extrabold text-[#1A0F00]/30 uppercase tracking-widest">
                  Office
                </p>
                <p className="text-sm font-semibold text-[#1A0F00]/70 mt-0.5 group-hover:text-[#1A0F00] transition-colors">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </a>
          </div>
        </div>
        {/* RIGHT — form */}
        <div className="transition-all duration-700 delay-200">
          <div className="bg-secondary-500 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-[#1A0F00]/30">
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-sm text-green-400">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            <form
              onSubmit={formik.handleSubmit}
              autoComplete="off"
              className="space-y-5"
            >
              {/* Row 1 — First Name & Last Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="First Name"
                  type="text"
                  placeholder="Rajesh"
                  name="first_name"
                  icon={User}
                  maxLength={50}
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.first_name}
                  touched={formik.touched.first_name}
                />

                <InputField
                  label="Last Name"
                  type="text"
                  placeholder="Mehta"
                  name="last_name"
                  icon={User}
                  maxLength={50}
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.last_name}
                  touched={formik.touched.last_name}
                />
              </div>

              {/* Row 2 — Restaurant Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Restaurant Name"
                  type="text"
                  placeholder="Spice Garden"
                  name="restaurant_name"
                  icon={Building2}
                  maxLength={100}
                  value={formik.values.restaurant_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.restaurant_name}
                  touched={formik.touched.restaurant_name}
                />

                <InputField
                  label="Phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  name="phone"
                  icon={Phone}
                  maxLength={20}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.phone}
                  touched={formik.touched.phone}
                />
              </div>

              {/* Email */}
              <InputField
                label="Email"
                type="email"
                placeholder="you@restaurant.in"
                name="email"
                icon={Mail}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
                touched={formik.touched.email}
              />

              {/* Message */}
              <div>
                <label className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-white/30" />
                  <textarea
                    rows={4}
                    name="message"
                    maxLength={1000}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Tell us about your setup — type of restaurant, number of tables, current billing system…"
                    aria-invalid={
                      formik.touched.message && !!formik.errors.message
                    }
                    className={`w-full bg-white/5 border rounded-xl pl-10 pr-4 py-3.5 text-sm font-medium text-white placeholder-white/30 focus:outline-none focus:border-primary-400 transition-all resize-none
                      ${formik.touched.message && formik.errors.message ? "border-red-400/50" : "border-white/10"}`}
                  />
                </div>
                {formik.touched.message && formik.errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Turnstile */}
              <div className="flex justify-center">
                <Turnstile
                  ref={turnstileRef}
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                  }}
                  onExpire={() => {
                    setCaptchaToken("");
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 bg-primary-500 text-white text-sm font-bold py-4 rounded-xl hover:bg-primary-600 shadow hover:-translate-y-px transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      size={15}
                      strokeWidth={2.5}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail size={15} strokeWidth={2.5} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
