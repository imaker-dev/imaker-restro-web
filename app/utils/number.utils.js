export function formatValue(num, type = "comma") {
  // Convert numeric strings to number
  num = Number(num);

  if (isNaN(num)) {
    return "Invalid number";
  }

  type = String(type).toLowerCase();

  if (type === "compact") {
    const absNum = Math.abs(num);

    if (absNum >= 1_000_000_000_000) {
      return (num / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "T";
    } else if (absNum >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (absNum >= 10_000_000) {
      return (num / 10_000_000).toFixed(1).replace(/\.0$/, "") + "Cr";
    } else if (absNum >= 100_000) {
      return (num / 100_000).toFixed(1).replace(/\.0$/, "") + "L";
    } else {
      return num.toString();
    }
  }

  if (type === "comma") {
    return num.toLocaleString("en-IN");
  }

  return "Invalid format type";
}