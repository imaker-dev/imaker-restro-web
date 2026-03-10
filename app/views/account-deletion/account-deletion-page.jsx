"use client";

import {
  User,
  Mail,
  Trash2,
  FileText,
  Loader2,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../layouts/header";
import PageWrapper from "../../components/page-wrapper";

// Yup schema
const validationSchema = Yup.object({
  name: Yup.string().trim().required("Full name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Email address is required"),
  reason: Yup.string()
    .trim()
    .min(10, "Please provide more details (at least 10 characters)")
    .required("Please provide a reason"),
});

const AccountDeletionPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const confirmDeletion = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const resetForm = () => {
    setStep(1);
    setFormValues({ name: "", email: "", reason: "" });
  };

  return (
    <>
      <Header title="Account Deletion" />
      <PageWrapper>
        {/* STEP 1: Form */}
        {step === 1 && (
          <div className="max-w-xl mx-auto">
            <div
              className="bg-white border border-gray-200 rounded-lg overflow-hidde
            n p-4 md:p-8"
            >
              <div className="text-center mb-5">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mb-4">
                  <AlertCircle className="text-amber-600" size={24} />
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-2">
                  Account Deletion
                </div>
                <p className="text-gray-600">
                  All personal information will be permanently removed from our
                  systems within 30 days.
                </p>
              </div>
              <div className="">
                <Formik
                  initialValues={formValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    setFormValues(values);
                    setStep(2);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-6" autoComplete="off">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <div className="flex items-center border border-slate-300 rounded-lg px-3 py-2.5">
                            <User className="mr-3 text-gray-400" size={18} />
                            <Field
                              type="text"
                              name="name"
                              placeholder="Enter your full name"
                              className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-500"
                            />
                          </div>
                          <ErrorMessage
                            name="name"
                            component="p"
                            className="text-red-600 text-xs mt-1 flex items-center gap-1"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <div className="flex items-center border border-slate-300 rounded-lg px-3 py-2.5">
                            <Mail className="mr-3 text-gray-400" size={18} />
                            <Field
                              type="email"
                              name="email"
                              placeholder="your.email@example.com"
                              className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-500"
                            />
                          </div>
                          <ErrorMessage
                            name="email"
                            component="p"
                            className="text-red-600 text-xs mt-1 flex items-center gap-1"
                          />
                        </div>
                      </div>

                      {/* Reason */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Reason for Deletion
                        </label>
                        <div className="flex items-start border border-slate-300 rounded-lg px-3 py-2.5">
                          <FileText
                            className="mt-1 mr-3 text-gray-400"
                            size={18}
                          />
                          <Field
                            as="textarea"
                            name="reason"
                            rows={3}
                            placeholder="Help us understand why you're leaving..."
                            className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-500 resize-none"
                          />
                        </div>
                        <ErrorMessage
                          name="reason"
                          component="p"
                          className="text-red-600 text-xs mt-1 flex items-center gap-1"
                        />
                      </div>

                      {/* Warning */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <AlertCircle
                            className="text-red-500 mt-0.5 mr-3 flex-shrink-0"
                            size={18}
                          />
                          <p className="text-red-700 text-sm">
                            After submission, you'll have 14 days to cancel this
                            request. After that period, your account and all
                            associated data will be permanently deleted.
                          </p>
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                        Request Account Deletion
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Confirmation */}
        {step === 2 && (
          <div className="max-w-xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-4 md:p-8">
              <div className="text-center mb-5">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mb-4">
                  <AlertCircle className="text-amber-600" size={24} />
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-2">
                  Final Confirmation
                </div>
                <p className="text-gray-600">
                  Please review your request before proceeding
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <p>
                    <span className="text-sm font-medium text-gray-500">
                      Name:
                    </span>{" "}
                    {formValues.name}
                  </p>
                  <p>
                    <span className="text-sm font-medium text-gray-500">
                      Email:
                    </span>{" "}
                    {formValues.email}
                  </p>
                  <p>
                    <span className="text-sm font-medium text-gray-500">
                      Reason:
                    </span>{" "}
                    {formValues.reason}
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle
                      className="text-red-500 mt-0.5 mr-3"
                      size={18}
                    />
                    <p className="text-red-700 text-sm">
                      This action cannot be undone. All your data will be
                      permanently deleted.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg"
                  >
                    <ArrowLeft size={16} /> Go Back
                  </button>
                  <button
                    onClick={confirmDeletion}
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={16} />
                    ) : (
                      <Trash2 size={16} />
                    )}
                    {loading ? "Processing..." : "Confirm Deletion"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Success */}
        {step === 3 && (
          <div className="max-w-xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden  p-4 md:p-8">
              <div className="text-center mb-5">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-2">
                  Request Submitted
                </div>
                <p className="text-gray-600">
                  Your account deletion request has been processed
                </p>
              </div>
              <div className="text-center space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <Clock className="text-gray-500 mx-auto mb-3" size={24} />
                  <h3 className="font-medium text-gray-900 mb-2">
                    What happens next?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    You'll receive a confirmation email within the next few
                    minutes. Your account will be permanently deleted after 14
                    days unless you cancel the request.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
                >
                  <ArrowLeft size={16} /> Submit Another Request
                </button>
              </div>
            </div>
          </div>
        )}
      </PageWrapper>
    </>
  );
};

export default AccountDeletionPage;
