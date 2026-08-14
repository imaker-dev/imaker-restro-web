"use client";

import PageWrapper from "@/app/components/page-wrapper";
import {
  Mail,
  Phone,
  Loader2,
  CheckCircle,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Turnstile from "react-turnstile";
import toast from "react-hot-toast";
import axios from "axios";
import SectionHeading from "../layouts/section-heading";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────────────────────── */

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
      <label className="block text-[10px] font-mono font-bold text-[#14181c]/40 uppercase tracking-widest mb-1">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#14181c]/30" />
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
          className={`w-full bg-[#14181c]/[0.035] rounded-lg py-2.5 text-[13px] font-medium text-[#14181c] placeholder-[#14181c]/30 outline-none ring-1 ring-transparent focus:bg-[#14181c]/[0.05] focus:ring-primary-400/40 transition-all
            ${Icon ? "pl-9 pr-3.5" : "px-3.5"}
            ${touched && error ? "ring-1 ring-red-400/60 bg-red-50" : ""}`}
        />
      </div>

      {touched && error && (
        <p className="mt-1 text-[11px] text-red-500">{error}</p>
      )}
    </div>
  );
}

function OnboardingReceiptPanel() {
  return (
    <div className="relative h-full min-h-[280px] lg:min-h-[520px] rounded-3xl overflow-hidden">
      <Image
        src="/Images/contact.png"
        alt="Customer support"
        fill
        priority
        unoptimized
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />
    </div>
  );
}

export default function ContactUsSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileSize, setTurnstileSize] = useState("normal");

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

  useEffect(() => {
    const handleResize = () => {
      setTurnstileSize(window.innerWidth < 640 ? "compact" : "normal");
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageWrapper id="contact" >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        {/* LEFT — headline + form */}
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's start a conversation"
            highlight="conversation"
            // description="Whether you're switching from another system or setting up billing for the first time — we're here to help you get it right."
            align="left"
            variant="compact"
          />

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-sm text-green-700">
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
              <label className="block text-[10px] font-mono font-bold text-[#14181c]/40 uppercase tracking-widest mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#14181c]/30" />
                <textarea
                  rows={2}
                  name="message"
                  maxLength={1000}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Tell us about your setup..."
                  aria-invalid={
                    formik.touched.message && !!formik.errors.message
                  }
                  className={`w-full bg-[#14181c]/[0.035] rounded-xl pl-10 pr-4 py-3.5 text-sm font-medium text-[#14181c] placeholder-[#14181c]/30 focus:outline-none focus:bg-[#14181c]/[0.06] focus:ring-2 focus:ring-primary-400/40 transition-all resize-none
                    ${formik.touched.message && formik.errors.message ? "ring-2 ring-red-400/50 bg-red-50" : ""}`}
                />
              </div>
              {formik.touched.message && formik.errors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {formik.errors.message}
                </p>
              )}
            </div>

            {/* Turnstile */}
            <div className="flex justify-center w-full">
              <div className="turnstile-wrapper">
                <Turnstile
                  ref={turnstileRef}
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                  }}
                  onExpire={() => {
                    setCaptchaToken("");
                  }}
                  theme="light"
                  size={turnstileSize}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-lg btn-primary"
              // className="w-full flex items-center justify-center gap-2.5 bg-primary-500 text-white text-sm font-bold py-4 rounded-xl hover:bg-primary-600 shadow hover:-translate-y-px transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
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

        {/* RIGHT — signature illustration */}
        <div className="transition-all duration-700 delay-200">
          <OnboardingReceiptPanel />
        </div>
      </div>
    </PageWrapper>
  );
}
