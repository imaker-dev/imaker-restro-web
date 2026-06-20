"use client";

import { Toaster } from "react-hot-toast";
import AppLayout from "./app-layout";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "../store";

export default function ClientProviders({ children }) {
  return (
    <>
     <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <Suspense fallback={null}>
        <AppLayout>{children}</AppLayout>
      </Suspense>
      </Provider>
    </>
  );
}
