import PageWrapper from "@/app/components/page-wrapper";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "../layouts/section-header";
import { CONTACT_INFO } from "../../const";

/* ─────────────────────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────────────────────── */

/* ─── Reusable input ─────────────────────────────────────────────────────── */
function InputField({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder-white/30 focus:outline-none focus:border-primary-400 transition-all"
      />
    </div>
  );
}

export default function ContactUsSection() {
  return (
    <PageWrapper id="contact" className="bg-primary-50 py-24 lg:py-32">
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
            <div className="space-y-5">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Your Name"
                  type="text"
                  placeholder="Rajesh Mehta"
                />

                <InputField
                  label="Restaurant Name"
                  type="text"
                  placeholder="Spice Garden"
                />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                />

                <InputField
                  label="Email"
                  type="email"
                  placeholder="you@restaurant.in"
                />
              </div>

              {/* Plan selector */}
              <div>
                <label className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest mb-2">
                  Interested In
                </label>

                <select
                  name="plan"
                  defaultValue=""
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium text-white focus:outline-none focus:border-primary-400 transition-all"
                >
                  <option value="" disabled>
                    Select a plan
                  </option>

                  <option value="starter">Starter — ₹999 / mo</option>

                  <option value="growth">Growth — ₹2,499 / mo</option>

                  <option value="enterprise">
                    Enterprise — Custom pricing
                  </option>

                  <option value="just-looking">
                    Just looking — No pressure
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest mb-2">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your setup — type of restaurant, number of tables, current billing system…"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder-white/30 focus:outline-none focus:border-primary-400 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button className="w-full flex items-center justify-center gap-2.5 bg-primary-500 text-white text-sm font-bold py-4 rounded-xl hover:bg-primary-600 shadow hover:-translate-y-px transition-all duration-200">
                <Mail size={15} strokeWidth={2.5} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
