"use client";

import { Toaster } from "react-hot-toast";
import AppLayout from "./app-layout";
import { Suspense } from "react";

export default function ClientProviders({ children }) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Suspense fallback={null}>
        <AppLayout>{children}</AppLayout>
      </Suspense>
    </>
  );
}
