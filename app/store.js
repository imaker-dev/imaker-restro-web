// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import franchiseSlice from "./store/slices/franchiseSlice";

export const store = configureStore({
  reducer: {
    franchise: franchiseSlice,
  },
});

export default store;