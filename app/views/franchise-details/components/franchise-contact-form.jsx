import { Check, Loader2, Send } from "lucide-react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { handleResponse } from "../../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { submitEnquiry } from "../../../store/slices/franchiseSlice";

function FormField({ label, required = false, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium text-slate-600">
        {label} {required && <span className="text-rose-600">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-[11.5px] text-rose-600">{error}</span>
      )}
    </label>
  );
}

const initialValues = {
  full_name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  investment_budget: "",
  business_experience: "",
  message: "",
  agree_to_contact: false,
};

const validationSchema = Yup.object({
  full_name: Yup.string()
    .required("Full name is required")
    .max(100, "Name too long"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\+?[0-9]{10,13}$/, "Enter a valid phone number"),
  investment_budget: Yup.string(),
  business_experience: Yup.string(),
  city: Yup.string().max(100, "City name too long"),
  state: Yup.string().max(100, "State name too long"),
  message: Yup.string().max(2000, "Message too long"),
  agree_to_contact: Yup.boolean()
    .required("Please confirm to proceed")
    .oneOf([true], "Please confirm to proceed"),
});

function FranchiseContactForm({ franchise }) {
  const dispatch = useDispatch();
  const { isSubmittingEnquiry } = useSelector((state) => state.franchise);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values) => {
    const payload = {
      franchise_id: franchise?.id,
      ...values,
    };
    await handleResponse(dispatch(submitEnquiry(payload)), () => {
      setSubmitted(true);
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-white px-7 py-12 text-center shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <Check className="h-6 w-6 text-emerald-600" />
        </div>
        <p className="mt-5 text-[15px] font-medium text-slate-900">
          Inquiry submitted successfully!
        </p>
        <p className="mt-1.5 max-w-sm text-[13.5px] leading-relaxed text-slate-500">
          Thanks for your interest in {franchise?.name}. Our team will review
          your details and get back to you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_2px_24px_-8px_rgba(15,23,42,0.10)]">
      <h3 className="text-[16px] font-semibold text-slate-900">
        Request franchise details
      </h3>
      <p className="mt-1 text-[12.5px] text-slate-500">
        Tell us a bit about yourself and our team will get in touch.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                label="Full name"
                required
                error={touched.full_name && errors.full_name}
              >
                <Field
                  type="text"
                  name="full_name"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-[13px] transition-colors focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5"
                  placeholder="Aditya Sharma"
                />
              </FormField>

              <FormField
                label="Phone number"
                required
                error={touched.phone && errors.phone}
              >
                <Field
                  type="tel"
                  name="phone"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-[13px] transition-colors focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5"
                  placeholder="+91 98765 43210"
                />
              </FormField>
            </div>

            <FormField
              label="Email"
              required
              error={touched.email && errors.email}
            >
              <Field
                type="email"
                name="email"
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-[13px] transition-colors focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5"
                placeholder="aditya@example.com"
              />
            </FormField>

            <div className="grid grid-cols-2 gap-3">
              <FormField label="City">
                <Field
                  type="text"
                  name="city"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-[13px] transition-colors focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5"
                  placeholder="Ahmedabad"
                />
              </FormField>

              <FormField label="State">
                <Field
                  type="text"
                  name="state"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-[13px] transition-colors focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5"
                  placeholder="Gujarat"
                />
              </FormField>
            </div>

            <FormField label="Investment budget">
              <Field
                as="select"
                name="investment_budget"
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] transition-colors focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5"
              >
                <option value="">Select investment range</option>
                <option value="under-5lakh">Under ₹5 Lakh</option>
                <option value="5-10lakh">₹5 Lakh - ₹10 Lakh</option>
                <option value="10-15lakh">₹10 Lakh - ₹15 Lakh</option>
                <option value="15-25lakh">₹15 Lakh - ₹25 Lakh</option>
                <option value="25-50lakh">₹25 Lakh - ₹50 Lakh</option>
                <option value="above-50lakh">More than ₹50 Lakh</option>
              </Field>
            </FormField>

            <FormField label="Business experience">
              <Field
                as="select"
                name="business_experience"
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] transition-colors focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5"
              >
                <option value="">Select an option</option>
                <option value="first-time">First-time entrepreneur</option>
                <option value="existing-business">
                  Already run a business
                </option>
                <option value="existing-franchise">
                  Already own another franchise
                </option>
              </Field>
            </FormField>

            <FormField label="Message (optional)">
              <Field
                as="textarea"
                name="message"
                rows={3}
                maxLength={2000}
                className="w-full resize-none rounded-xl border border-slate-200 px-3.5 py-2.5 text-[13px] transition-colors focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5"
                placeholder="Tell us a bit about your goals..."
              />
            </FormField>

            <label className="flex items-start gap-2.5 pt-1">
              <Field
                type="checkbox"
                name="agree_to_contact"
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500"
              />
              <span className="text-[12.5px] leading-snug text-slate-500">
                I agree to be contacted regarding franchise opportunities.
              </span>
            </label>
            {touched.agree_to_contact && errors.agree_to_contact && (
              <p className="text-[11.5px] text-rose-600">
                {errors.agree_to_contact}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmittingEnquiry}
              className="w-full rounded-xl bg-primary-500 px-4 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-primary-500/20 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmittingEnquiry ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit inquiry
                </>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FranchiseContactForm;
