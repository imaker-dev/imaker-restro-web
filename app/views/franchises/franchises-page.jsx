"use client";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../layouts/header";
import { useDispatch, useSelector } from "react-redux";
import { fetchFranchises } from "../../store/slices/franchiseSlice";
import {
  ChevronDown,
  LayoutGrid,
  MapPin,
  Search,
  Wallet,
  X,
} from "lucide-react";
import FranchiseCard from "../franchises/components/franchise-card";
import FranchiseCardSkeleton from "./components/franchise-card-skeleton";
import { formatValue } from "../../utils/number.utils";
import PageWrapper from "../../components/page-wrapper";

function FilterSelect({ value, onChange, options, icon: Icon, dark }) {
  return (
    <div className="relative lg:w-48">
      <Icon
        className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${dark ? "text-white/40" : "text-slate-400"}`}
      />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none rounded-xl py-3 pl-10 pr-8 text-[13.5px] focus:outline-none ${
          dark
            ? "bg-white/5 text-white focus:bg-white/10"
            : "border border-slate-200 bg-white text-slate-700 focus:border-slate-400"
        }`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-slate-900">
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className={`pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 ${dark ? "text-white/40" : "text-slate-400"}`}
      />
    </div>
  );
}

// function ComparisonModal({ franchises, onClose }) {
//   const rows = [
//     { label: "Category", get: (f) => f.category },
//     { label: "Established", get: (f) => f.established },
//     {
//       label: "Investment",
//       get: (f) =>
//         `${formatINR(f.investment.min)} - ${formatINR(f.investment.max)}`,
//     },
//     { label: "Franchise fee", get: (f) => formatINR(f.franchiseFee) },
//     { label: "Expected ROI", get: (f) => `${f.roi}%`, highlight: true },
//     { label: "Payback period", get: (f) => `${f.paybackMonths} mo` },
//     { label: "Space required", get: (f) => f.space },
//     { label: "Existing outlets", get: (f) => f.outlets },
//     { label: "Monthly revenue", get: (f) => formatINR(f.monthlyRevenue) },
//   ];

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
//       role="dialog"
//       aria-modal="true"
//       onClick={onClose}
//     >
//       <div
//         className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-[0_32px_80px_-20px_rgba(0,0,0,0.45)]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between px-7 py-6">
//           <h2 className="text-[17px] font-semibold text-slate-900">
//             Compare opportunities
//           </h2>
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
//           >
//             <X className="h-4.5 w-4.5" />
//           </button>
//         </div>
//         <div className="overflow-x-auto px-7 pb-7">
//           <table className="w-full min-w-[480px] border-collapse text-left">
//             <thead>
//               <tr>
//                 <th className="w-32 pb-3 text-[11px] font-medium uppercase tracking-wide text-slate-400">
//                   Metric
//                 </th>
//                 {franchises.map((f) => (
//                   <th
//                     key={f.id}
//                     className="pb-3 pl-5 text-[13px] font-semibold text-slate-900"
//                   >
//                     {f.name}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row) => (
//                 <tr key={row.label} className="border-t border-slate-100">
//                   <td className="py-3 text-[12px] font-medium text-slate-500">
//                     {row.label}
//                   </td>
//                   {franchises.map((f) => (
//                     <td
//                       key={f.id}
//                       className={`py-3 pl-5 text-[13px] ${row.highlight ? "font-semibold text-amber-700" : "text-slate-700"}`}
//                     >
//                       {row.get(f)}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

const FranchisesPage = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [investmentRange, setInvestmentRange] = useState("");
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [compareIds, setCompareIds] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleCompare = useCallback((id) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  }, []);

  const { allFranchisesData, isFetchingFranchises } = useSelector(
    (state) => state.franchise,
  );

  const { franchises, filters, pagination } = allFranchisesData || {};

  const {
    categories = [],
    cities = [],
    investment_ranges = [],
    sort_options = [],
    states = [],
  } = filters || {};

  useEffect(() => {
    // Find the selected investment range object to get min/max
    const selectedRange = investment_ranges.find(
      (range) => range.label === investmentRange,
    );

    dispatch(
      fetchFranchises({
        search: searchTerm || undefined,
        category: category || undefined,
        city: location || undefined,
        // Send min/max instead of the label
        investment_min: selectedRange?.min ?? undefined,
        investment_max: selectedRange?.max ?? undefined,
      }),
    );
  }, [searchTerm, category, investmentRange, location]);

  // Build options with value/label structure for FilterSelect
  const categoryOptions = [
    { value: "", label: "All Categories" },
    ...categories.map((cat) => ({ value: cat, label: cat })),
  ];

  const locationOptions = [
    { value: "", label: "All Locations" },
    ...cities.map((city) => ({ value: city, label: city })),
  ];

  const investmentOptions = [
    { value: "", label: "Any Investment" },
    ...investment_ranges.map((range) => ({
      value: range.label, // We'll use label to find the range object later
      label: range.label,
    })),
  ];

  const handleReset = () => {
    setCategory("");
    setInvestmentRange("");
    setLocation("");
    setSearchTerm("");
  };
  return (
    <>
      <Header title={"Top Franchises"} />

      <PageWrapper containerClassName="space-y-6">
        {/* Search + Filters */}
        <div className="flex flex-col gap-2.5 lg:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search franchises by name..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-[13.5px] placeholder:text-slate-300 focus:border-slate-400 focus:outline-none"
            />
          </div>
          <FilterSelect
            value={category}
            onChange={setCategory}
            options={categoryOptions}
            icon={LayoutGrid}
          />
          <FilterSelect
            value={investmentRange}
            onChange={setInvestmentRange}
            options={investmentOptions}
            icon={Wallet}
          />
          <FilterSelect
            value={location}
            onChange={setLocation}
            options={locationOptions}
            icon={MapPin}
          />
        </div>

        {/* Active filters indicator */}
        {(category || investmentRange || location || searchTerm) && (
          <div className="flex flex-wrap items-center gap-2 text-[13px]">
            <span className="text-slate-500">Active filters:</span>
            {searchTerm && (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                Search: {searchTerm}
                <button onClick={() => setSearchTerm("")}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {category && (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                {category}
                <button onClick={() => setCategory("")}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {investmentRange && (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                {investmentRange}
                <button onClick={() => setInvestmentRange("")}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {location && (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                {location}
                <button onClick={() => setLocation("")}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            <button
              onClick={handleReset}
              className="ml-2 text-slate-500 hover:text-slate-700"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results count */}
        {/* {filters?.stats && (
          <div className="text-[13px] text-slate-500">
            Showing{" "}
            <strong className="text-slate-700">
              {filters.stats.total_active}
            </strong>{" "}
            franchises
            {filters.stats.min_investment && (
              <>
                {" "}
                • Investment range: {formatValue(
                  filters.stats.min_investment,
                )}{" "}
                – {formatValue(filters.stats.max_investment)}
              </>
            )}
          </div>
        )} */}

        {/* Listing */}
        <div>
          {isFetchingFranchises ? (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <FranchiseCardSkeleton key={i} />
              ))}
            </div>
          ) : franchises?.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-3xl bg-white py-20 text-center shadow-[0_2px_24px_-8px_rgba(15,23,42,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <p className="mt-5 text-[15px] font-medium text-slate-900">
                No franchises match your filters
              </p>
              <p className="mt-1.5 text-[13.5px] text-slate-500">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={handleReset}
                className="mt-5 rounded-xl border border-slate-200 px-5 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {franchises?.map((franchise) => (
                <FranchiseCard
                  key={franchise.id}
                  franchise={franchise}
                  isSelected={compareIds.includes(franchise.id)}
                  canSelect={compareIds.length < 3}
                  onToggleCompare={toggleCompare}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => {
                    const selectedRange = investment_ranges.find(
                      (range) => range.label === investmentRange,
                    );
                    dispatch(
                      fetchFranchises({
                        search: searchTerm || undefined,
                        category: category || undefined,
                        city: location || undefined,
                        investment_min: selectedRange?.min ?? undefined,
                        investment_max: selectedRange?.max ?? undefined,
                        page,
                      }),
                    );
                  }}
                  className={`h-9 w-9 rounded-lg text-[13px] font-medium transition-colors ${
                    page === pagination.currentPage
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {page}
                </button>
              ),
            )}
          </div>
        )}
      </PageWrapper>
    </>
  );
};

export default FranchisesPage;
