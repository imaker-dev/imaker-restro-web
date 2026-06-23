import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import FranchiseApi from "../api/FranchiseApi";

// GET ALL FRANCHISES
export const fetchFranchises = createAsyncThunk(
  "/franchise/fetch-franchises",
  async ({ search, category, city, investment_min, investment_max }) => {
    const res = await FranchiseApi.getAllFranchisesApi(
      search,
      category,
      city,
      investment_min,
      investment_max,
    );
    return res.data;
  },
);

// GET SINGLE FRANCHISE
export const fetchFranchise = createAsyncThunk(
  "/franchise/fetch-franchise",
  async ({ slug }) => {
    const res = await FranchiseApi.getFranchiseByIdApi(slug);
    return res.data;
  },
);

// SUBMIT ENQUIRY
export const submitEnquiry = createAsyncThunk(
  "/franchise/submit-enquiry",
  async (values) => {
    const res = await FranchiseApi.submitEnquiryApi(values);
    return res.data;
  },
);

const franchiseSlice = createSlice({
  name: "franchise",

  initialState: {
    // Franchise List
    isFetchingFranchises: false,
    allFranchisesData: null,

    // Single Franchise
    isFetchingFranchise: false,
    franchise: null,

    // Enquiry
    isSubmittingEnquiry: false,
    enquiryResponse: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ── FETCH FRANCHISES ────────────────────
      .addCase(fetchFranchises.pending, (state) => {
        state.isFetchingFranchises = true;
      })

      .addCase(fetchFranchises.fulfilled, (state, action) => {
        state.isFetchingFranchises = false;
        state.allFranchisesData = action.payload?.data;
      })

      .addCase(fetchFranchises.rejected, (state, action) => {
        state.isFetchingFranchises = false;
        toast.error(action.error.message || "Failed to fetch franchises");
      })

      // ── FETCH SINGLE FRANCHISE ────────────────────
      .addCase(fetchFranchise.pending, (state) => {
        state.isFetchingFranchise = true;
      })

      .addCase(fetchFranchise.fulfilled, (state, action) => {
        state.isFetchingFranchise = false;
        state.franchise =
          action.payload?.franchise ||
          action.payload?.data ||
          action.payload ||
          null;
      })

      .addCase(fetchFranchise.rejected, (state, action) => {
        state.isFetchingFranchise = false;
        toast.error(action.error.message || "Failed to fetch franchise");
      })

      // ── SUBMIT ENQUIRY ────────────────────
      .addCase(submitEnquiry.pending, (state) => {
        state.isSubmittingEnquiry = true;
      })

      .addCase(submitEnquiry.fulfilled, (state, action) => {
        state.isSubmittingEnquiry = false;
        state.enquiryResponse = action.payload;

        toast.success(
          action.payload?.message || "Enquiry submitted successfully",
        );
      })

      .addCase(submitEnquiry.rejected, (state, action) => {
        state.isSubmittingEnquiry = false;

        toast.error(action.error.message || "Failed to submit enquiry");
      });
  },
});

const { reducer } = franchiseSlice;

export default reducer;
