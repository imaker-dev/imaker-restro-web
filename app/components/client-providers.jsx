"use client";

import { Toaster } from "react-hot-toast";
import AppLayout from "./app-layout";

export default function ClientProviders({ children }) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AppLayout>{children}</AppLayout>
    </>
  );
}
