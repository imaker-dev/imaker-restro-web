import {
  Activity,
  BadgeCheck,
  BarChart3,
  CreditCard,
  LayoutDashboard,
  MonitorSmartphone,
  Package,
  Printer,
  QrCode,
  Table2,
  Tag,
  Users,
  Zap,
} from "lucide-react";
import SectionHeader from "../layouts/section-header";
import PageWrapper from "@/app/components/page-wrapper";

/* ─────────────────────────────────────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    Icon: LayoutDashboard,
    title: "Live Restaurant Dashboard",
    desc: "Monitor sales, active tables, ongoing orders, and staff activity in real time from one central dashboard.",
  },
  {
    Icon: Zap,
    title: "Fast POS Billing",
    desc: "Create bills in seconds for dine-in, takeaway, or delivery with an intuitive and lightning-fast billing screen.",
  },
  {
    Icon: Table2,
    title: "Smart Table Management",
    desc: "Visual table layouts, live occupancy status, and easy table merging or splitting during busy service hours.",
  },
  {
    Icon: Printer,
    title: "Kitchen Order Tickets (KOT)",
    desc: "Orders are instantly routed to kitchen printers so chefs receive clear tickets without confusion or delays.",
  },
  {
    Icon: BarChart3,
    title: "Sales & Business Reports",
    desc: "Track daily sales, top-selling items, category performance, and tax summaries with detailed reports.",
  },
  {
    Icon: MonitorSmartphone,
    title: "Works on Any Device",
    desc: "Run your POS on tablets, phones, or desktops with seamless syncing across all devices in real time.",
  },
  {
    Icon: BadgeCheck,
    title: "GST Ready Billing",
    desc: "Automatically calculate GST and generate compliant invoices with accurate tax breakdowns.",
  },
  {
    Icon: Tag,
    title: "Flexible Discounts",
    desc: "Apply item-level or bill-level discounts, run promotions, and manage special offers effortlessly.",
  },
  {
    Icon: Activity,
    title: "Staff Performance Tracking",
    desc: "Track cashier activity, orders processed, and shift totals with automated staff performance reports.",
  },
  {
  Icon: Package,
  title: "Menu Management",
  desc: "Easily add, edit, or organize menu items, categories, prices, and modifiers from a simple dashboard.",
},
{
  Icon: Users,
  title: "Customer Management",
  desc: "Store customer details, track visit history, and manage repeat guests for better service and loyalty.",
},
{
  Icon: BarChart3,
  title: "Multi-Outlet Management",
  desc: "Manage multiple restaurant outlets from one dashboard with centralized reporting and control.",
},
];

export default function FeaturesSection() {
  return (
    <PageWrapper id={"features"} className="bg-primary-50">
      {/* Header */}

      <SectionHeader
        badge="Everything Included"
        title="Built for How Restaurants"
        highlight=" Actually Operate"
        description="Every feature was shaped by spending real time inside busy kitchens — not just in boardrooms."
      />
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {FEATURES.map(({ Icon, title, desc }, i) => (
          <div
            key={title}
            className={`bg-white rounded-2xl border border-[#1A0F00]/6 p-6 hover:border-primary-300 hover:shadow-lg hover:shadow-amber-500/8 hover:-translate-y-0.5 transition-all duration-300 cursor-default `}
          >
            <div
              className={`inline-flex w-10 h-10 rounded-xl border items-center justify-center mb-4 bg-primary-100 text-primary-500 border-primary-200`}
            >
              <Icon size={18} strokeWidth={2} />
            </div>
            <h3 className="text-base font-bold text-[#1A0F00] mb-2">{title}</h3>
            <p className="text-sm font-medium text-[#1A0F00]/55 leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
