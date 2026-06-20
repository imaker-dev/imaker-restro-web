import { formatText } from "@/app/utils/text.utils";

function FranchiseTag({ label }) {
  const style = "bg-primary-100 text-primary-600";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${style}`}
    >
      {formatText(label)}
    </span>
  );
}

export default FranchiseTag;