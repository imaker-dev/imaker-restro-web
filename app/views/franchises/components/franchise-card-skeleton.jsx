import React from 'react'

function FranchiseCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl bg-white shadow-[0_2px_24px_-8px_rgba(15,23,42,0.12)]">
      <div className="h-44 bg-slate-100" />
      <div className="space-y-3 p-6">
        <div className="h-3 w-2/3 rounded-full bg-slate-100" />
        <div className="h-2.5 w-1/2 rounded-full bg-slate-100" />
        <div className="h-2.5 w-full rounded-full bg-slate-100" />
        <div className="mt-4 h-12 rounded-xl bg-slate-100" />
      </div>
    </div>
  );
}

export default FranchiseCardSkeleton
