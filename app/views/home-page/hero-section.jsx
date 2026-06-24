"use client";

import { useState, useEffect, useCallback } from "react";
import PageWrapper from "@/app/components/page-wrapper";
import {
  ArrowRight,
  Zap,
  Flame,
  Plus,
  Minus,
  Search,
  Bell,
  ChefHat,
  LayoutGrid,
  ShoppingBag,
  TrendingUp,
  UtensilsCrossed,
  Users,
  Clock,
  Table2,
  ClipboardList,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  BarChart3,
  Fingerprint,
  MoreHorizontal,
  X,
  Check,
  Wifi,
  Signal,
  ReceiptIndianRupee,
} from "lucide-react";

// ─── CONSTANTS ────────────────────────────────────────────────
const inr = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

const CATEGORIES = ["All", "Pizza", "Burgers", "Pasta", "Drinks", "Desserts"];

const FOODS = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 280,
    emoji: "🍕",
    category: "Pizza",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 320,
    emoji: "🍕",
    category: "Pizza",
  },
  { id: 3, name: "Veg Burger", price: 180, emoji: "🍔", category: "Burgers" },
  {
    id: 4,
    name: "Cheese Burger",
    price: 220,
    emoji: "🍔",
    category: "Burgers",
  },
  { id: 5, name: "French Fries", price: 120, emoji: "🍟", category: "Burgers" },
  { id: 6, name: "Pasta Alfredo", price: 220, emoji: "🍝", category: "Pasta" },
  { id: 7, name: "Cold Coffee", price: 150, emoji: "☕", category: "Drinks" },
  { id: 8, name: "Choc. Cake", price: 160, emoji: "🍰", category: "Desserts" },
  { id: 9, name: "Mango Lassi", price: 130, emoji: "🥤", category: "Drinks" },
];

const NAV_ITEMS = [
  { id: "orders", label: "Orders", icon: ShoppingBag },
  { id: "tables", label: "Tables", icon: Table2 },
  { id: "takeaway", label: "Takeaway", icon: ReceiptIndianRupee },
  { id: "kot", label: "KOT", icon: ClipboardList },
  { id: "menu", label: "Menu", icon: UtensilsCrossed },
  { id: "customers", label: "Customers", icon: Users },
  { id: "more", label: "More", icon: MoreHorizontal },
];

const TABLE_CYCLE = ["Available", "Occupied", "Reserved", "Cleaning"];
const TABLE_STYLES = {
  Available: {
    card: "bg-white border-zinc-200",
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    label: "Available",
  },
  Occupied: {
    card: "bg-primary-500 border-primary-600",
    dot: "bg-white",
    badge: "bg-white/20 text-white border-white/30",
    label: "Occupied",
  },
  Reserved: {
    card: "bg-amber-400 border-amber-500",
    dot: "bg-white",
    badge: "bg-white/20 text-white border-white/30",
    label: "Reserved",
  },
  Cleaning: {
    card: "bg-blue-500 border-blue-600",
    dot: "bg-white",
    badge: "bg-white/20 text-white border-white/30",
    label: "Cleaning",
  },
};

const TW_CYCLE = ["Preparing", "Ready", "On the way", "Completed"];
const TW_STYLES = {
  Preparing: "bg-amber-100 text-amber-700",
  Ready: "bg-emerald-100 text-emerald-700",
  "On the way": "bg-sky-100 text-sky-700",
  Completed: "bg-zinc-100 text-zinc-500",
};

const KOT_COLS = [
  {
    key: "New",
    label: "New",
    icon: AlertCircle,
    accent: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
    btn: "bg-blue-500 hover:bg-blue-600",
  },
  {
    key: "Preparing",
    label: "Preparing",
    icon: ChefHat,
    accent: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500 animate-pulse",
    btn: "bg-amber-500 hover:bg-amber-600",
  },
  {
    key: "Ready",
    label: "Ready",
    icon: CheckCircle2,
    accent: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
    btn: "bg-emerald-500 hover:bg-emerald-600",
  },
];

const SPARK = [38, 52, 45, 68, 55, 80, 100];

// ─── ORDERS SCREEN ────────────────────────────────────────────
function OrdersScreen({ cart, onAdd, onQty }) {
  const [cat, setCat] = useState("All");
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = Math.round(sub * 0.05);
  const total = sub + tax;
  const items = cat === "All" ? FOODS : FOODS.filter((f) => f.category === cat);

  return (
    <div className="flex h-full">
      {/* Menu side */}
      <div className="flex-1 flex flex-col min-w-0 border-r border-zinc-100">
        {/* Category strip */}
        <div className="flex gap-1.5 px-4 py-2.5 border-b border-zinc-100 bg-zinc-50/60 overflow-x-auto shrink-0">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 text-[10px] font-bold px-3 py-1.5 rounded-xl transition-all ${cat === c ? "bg-primary-500 text-white shadow-sm" : "bg-white border border-zinc-200 text-zinc-500 hover:border-zinc-300"}`}
            >
              {c}
            </button>
          ))}
        </div>
        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {items.map((food) => {
              const ci = cart.find((i) => i.id === food.id);
              return (
                <div
                  key={food.id}
                  onClick={() => onAdd(food)}
                  className={`relative rounded-xl border p-2.5 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95 ${ci ? "border-primary-300 bg-primary-50/60 shadow-sm shadow-primary-100" : "border-zinc-100 bg-white hover:border-zinc-200"}`}
                >
                  <div className="h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-2xl mb-2">
                    {food.emoji}
                  </div>
                  <p className="text-[9px] font-bold text-zinc-800 leading-tight mb-1">
                    {food.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-primary-500">
                      {inr(food.price)}
                    </span>
                    {ci ? (
                      <div
                        className="flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => onQty(food.id, -1)}
                          className="w-4 h-4 rounded-md bg-zinc-200 text-zinc-600 flex items-center justify-center hover:bg-zinc-300"
                        >
                          <Minus size={7} strokeWidth={3} />
                        </button>
                        <span className="text-[9px] font-black text-zinc-800 w-3 text-center">
                          {ci.qty}
                        </span>
                        <button
                          onClick={() => onQty(food.id, 1)}
                          className="w-4 h-4 rounded-md bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600"
                        >
                          <Plus size={7} strokeWidth={3} />
                        </button>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-lg bg-primary-50 border border-primary-200 text-primary-500 flex items-center justify-center">
                        <Plus size={9} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cart panel — fixed width, never changes */}
      <div className="w-44 shrink-0 flex flex-col bg-zinc-50/50">
        <div className="px-3.5 py-2.5 border-b border-zinc-100 bg-white shrink-0 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-zinc-900">Order #1052</p>
            <p className="text-[8px] text-zinc-400 font-medium">
              Table 07 · Dine In
            </p>
          </div>
          <span className="text-[9px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
            Open
          </span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-2.5 space-y-1.5">
          {cart.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-zinc-300 gap-1.5">
              <ShoppingBag size={22} strokeWidth={1} />
              <p className="text-[9px] text-zinc-400 font-medium">
                Cart is empty
              </p>
            </div>
          )}
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-zinc-100 rounded-xl p-2 shadow-sm"
            >
              <p className="text-[8.5px] font-semibold text-zinc-700 leading-tight mb-1.5">
                {item.name}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onQty(item.id, -1)}
                    className="w-4.5 h-4.5 rounded-lg bg-zinc-100 text-zinc-500 flex items-center justify-center hover:bg-zinc-200"
                  >
                    <Minus size={7} strokeWidth={3} />
                  </button>
                  <span className="text-[9px] font-black text-zinc-800 w-4 text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => onQty(item.id, 1)}
                    className="w-4.5 h-4.5 rounded-lg bg-primary-50 border border-primary-200 text-primary-500 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"
                  >
                    <Plus size={7} strokeWidth={3} />
                  </button>
                </div>
                <span className="text-[9px] font-black text-zinc-800">
                  {inr(item.price * item.qty)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-3 py-3 border-t border-zinc-100 bg-white space-y-1.5 shrink-0">
          <div className="flex justify-between text-[9px] text-zinc-400">
            <span>Subtotal</span>
            <span>{inr(sub)}</span>
          </div>
          <div className="flex justify-between text-[9px] text-zinc-400">
            <span>GST 5%</span>
            <span>{inr(tax)}</span>
          </div>
          <div className="flex justify-between text-[11px] font-black text-zinc-900 pt-1.5 border-t border-zinc-100">
            <span>Total</span>
            <span className="text-primary-500">{inr(total)}</span>
          </div>
          <button className="w-full text-[8.5px] font-bold py-2 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-600 hover:bg-zinc-200 transition-colors mt-0.5">
            Save Order
          </button>
          <button className="w-full text-[8.5px] font-bold py-2.5 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-md shadow-primary-200/60 flex items-center justify-center gap-1.5">
            <CreditCard size={10} strokeWidth={2.5} />
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── TABLES SCREEN ────────────────────────────────────────────
function TablesScreen({ tables, onCycle }) {
  const [zone, setZone] = useState("All");
  const shown = zone === "All" ? tables : tables.filter((t) => t.zone === zone);
  const counts = TABLE_CYCLE.reduce(
    (acc, s) => ({ ...acc, [s]: tables.filter((t) => t.status === s).length }),
    {},
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-100 bg-zinc-50/60 shrink-0 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          {Object.entries(counts).map(([status, count]) => {
            const s = TABLE_STYLES[status];
            return (
              <div key={status} className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${s.card} `} />
                <span className="text-[9px] font-semibold text-zinc-500">
                  {status}
                </span>
                <span className="text-[9px] font-black text-zinc-700 bg-zinc-100 w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex gap-1">
          {["All", "Indoor", "Outdoor"].map((z) => (
            <button
              key={z}
              onClick={() => setZone(z)}
              className={`text-[9px] font-bold px-2.5 py-1 rounded-lg transition-all ${zone === z ? "bg-primary-500 text-white" : "bg-white border border-zinc-200 text-zinc-500 hover:border-zinc-300"}`}
            >
              {z}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {shown.map((table) => {
            const s = TABLE_STYLES[table.status];
            return (
              <button
                key={table.id}
                onClick={() => onCycle(table.id)}
                className={`relative text-left rounded-2xl border-2 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${s.card}`}
              >
                <p
                  className={`text-[15px] font-black ${table.status === "Available" ? "text-zinc-900" : "text-white"}`}
                >
                  {table.n}
                </p>
                {table.status === "Occupied" && (
                  <>
                    <p className="text-[9px] text-white/80 font-medium mt-0.5">
                      {table.guests} guests
                    </p>
                    <p className="text-[11px] font-black text-white mt-1">
                      {inr(table.bill)}
                    </p>
                  </>
                )}
                {table.status === "Reserved" && (
                  <p className="text-[9px] text-white/80 font-medium mt-0.5">
                    Pre-booked
                  </p>
                )}
                {table.status === "Cleaning" && (
                  <p className="text-[9px] text-white/80 font-medium mt-0.5">
                    ~5 mins
                  </p>
                )}
                {table.status === "Available" && (
                  <p className="text-[9px] text-emerald-600 font-semibold mt-0.5">
                    {table.zone}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── TAKEAWAY SCREEN ──────────────────────────────────────────
function TakeawayScreen({ orders, onCycle }) {
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? orders : orders.filter((o) => o.status === filter);
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-100 bg-zinc-50/60 shrink-0 overflow-x-auto">
        {["All", "Preparing", "Ready", "On the way", "Completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`shrink-0 text-[9px] font-bold px-3 py-1.5 rounded-xl transition-all ${filter === f ? "bg-primary-500 text-white shadow-sm" : "bg-white border border-zinc-200 text-zinc-500 hover:border-zinc-300"}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {shown.map((o, i) => (
          <div
            key={o.id}
            className="flex items-center justify-between bg-white border border-zinc-100 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary-50 border border-primary-100 rounded-xl flex items-center justify-center">
                <ShoppingBag
                  size={15}
                  className="text-primary-500"
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="text-[11px] font-black text-zinc-900">{o.id}</p>
                <p className="text-[9px] text-zinc-400 font-medium">
                  {o.items} · {inr(o.total)}
                </p>
              </div>
            </div>
            <button
              onClick={() => onCycle(i)}
              className={`text-[9px] font-bold px-3 py-1.5 rounded-xl transition-all hover:opacity-80 active:scale-95 ${TW_STYLES[o.status]}`}
            >
              {o.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── KOT SCREEN ───────────────────────────────────────────────
function KOTScreen({ tickets, onAdvance }) {
  const [elapsed, setElapsed] = useState({});
  useEffect(() => {
    const id = setInterval(
      () =>
        setElapsed((p) => {
          const n = { ...p };
          tickets.forEach((t) => {
            n[t.id] = (n[t.id] ?? t.elapsed) + 1 / 60;
          });
          return n;
        }),
      1000,
    );
    return () => clearInterval(id);
  }, [tickets]);
  const fmt = (t) => {
    const m = Math.floor(elapsed[t.id] ?? t.elapsed);
    return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h${m % 60}m`;
  };

  return (
    <div className="flex h-full overflow-hidden">
      {KOT_COLS.map((col) => {
        const Icon = col.icon;
        const colTickets = tickets.filter((t) => t.status === col.key);
        return (
          <div
            key={col.key}
            className="flex-1 flex flex-col border-r last:border-r-0 border-zinc-100"
          >
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-zinc-100 bg-white shrink-0">
              <div className="flex items-center gap-1.5">
                <Icon
                  size={13}
                  className={`${col.key === "New" ? "text-blue-500" : col.key === "Preparing" ? "text-amber-500" : "text-emerald-500"}`}
                  strokeWidth={2.5}
                />
                <span className="text-[10px] font-black text-zinc-800">
                  {col.label}
                </span>
              </div>
              <span
                className={`text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center ${col.badge}`}
              >
                {colTickets.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
              {colTickets.length === 0 && (
                <div className="flex flex-col items-center justify-center h-20 text-zinc-300">
                  <Icon size={20} strokeWidth={1} />
                  <p className="text-[8px] mt-1 text-zinc-400">No tickets</p>
                </div>
              )}
              {colTickets.map((t) => {
                const over =
                  (elapsed[t.id] ?? t.elapsed) > 18 && col.key !== "Ready";
                return (
                  <div
                    key={t.id}
                    className={`bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer ${over ? "border-red-200" : col.key === "New" ? "border-blue-100" : col.key === "Preparing" ? "border-amber-100" : "border-emerald-100"}`}
                    onClick={() => onAdvance(t.id)}
                  >
                    <div
                      className={`flex items-center justify-between px-3 py-2 ${col.accent}`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${col.dot}`}
                        />
                        <span className="text-[9px] font-black text-zinc-800">
                          {t.id}
                        </span>
                      </div>
                      <span className="text-[8px] font-bold text-primary-600 bg-primary-50 border border-primary-200 px-1.5 py-0.5 rounded-lg">
                        {t.table}
                      </span>
                    </div>
                    <div className="px-3 py-2 space-y-0.5">
                      {t.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span
                            className={`w-1 h-1 rounded-full shrink-0 ${col.key === "Ready" ? "bg-emerald-500" : "bg-zinc-300"}`}
                          />
                          <span className="text-[8.5px] font-medium text-zinc-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`flex items-center justify-between px-3 py-1.5 border-t ${over ? "border-red-100 bg-red-50" : "border-zinc-50 bg-zinc-50"}`}
                    >
                      <div className="flex items-center gap-1">
                        <Clock
                          size={8}
                          className={over ? "text-red-500" : "text-zinc-400"}
                        />
                        <span
                          className={`text-[8px] font-bold ${over ? "text-red-600" : "text-zinc-500"}`}
                        >
                          {fmt(t)}
                          {over && " · LATE"}
                        </span>
                      </div>
                      {col.key !== "Ready" ? (
                        <span
                          className={`text-[7.5px] font-black text-white px-2 py-0.5 rounded-lg ${col.btn}`}
                        >
                          {col.key === "New" ? "Start →" : "Done ✓"}
                        </span>
                      ) : (
                        <span className="text-[7.5px] font-bold text-emerald-600 flex items-center gap-0.5">
                          <CheckCircle2 size={9} className="text-emerald-500" />
                          Serve
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── TABLET MOCKUP ────────────────────────────────────────────
function TabletMockup() {
  const [activeNav, setActiveNav] = useState("orders");
  const [cart, setCart] = useState([
    { id: 1, name: "Margherita Pizza", price: 280, emoji: "🍕", qty: 1 },
    { id: 3, name: "Veg Burger", price: 180, emoji: "🍔", qty: 1 },
    { id: 7, name: "Cold Coffee", price: 150, emoji: "☕", qty: 1 },
  ]);

  const [tables, setTables] = useState([
    {
      id: 1,
      n: "T-01",
      zone: "Indoor",
      status: "Available",
      guests: 0,
      bill: 0,
    },
    {
      id: 2,
      n: "T-02",
      zone: "Indoor",
      status: "Occupied",
      guests: 4,
      bill: 874,
    },
    {
      id: 3,
      n: "T-03",
      zone: "Indoor",
      status: "Available",
      guests: 0,
      bill: 0,
    },
    {
      id: 4,
      n: "T-04",
      zone: "Outdoor",
      status: "Reserved",
      guests: 0,
      bill: 0,
    },
    {
      id: 5,
      n: "T-05",
      zone: "Indoor",
      status: "Occupied",
      guests: 3,
      bill: 560,
    },
    {
      id: 6,
      n: "T-06",
      zone: "Outdoor",
      status: "Available",
      guests: 0,
      bill: 0,
    },
    {
      id: 7,
      n: "T-07",
      zone: "Indoor",
      status: "Cleaning",
      guests: 0,
      bill: 0,
    },
    {
      id: 8,
      n: "T-08",
      zone: "Outdoor",
      status: "Occupied",
      guests: 5,
      bill: 2100,
    },
    {
      id: 9,
      n: "T-09",
      zone: "Indoor",
      status: "Reserved",
      guests: 0,
      bill: 0,
    },
    {
      id: 10,
      n: "T-10",
      zone: "Outdoor",
      status: "Available",
      guests: 0,
      bill: 0,
    },
    {
      id: 11,
      n: "T-11",
      zone: "Indoor",
      status: "Occupied",
      guests: 2,
      bill: 398,
    },
    {
      id: 12,
      n: "T-12",
      zone: "Outdoor",
      status: "Cleaning",
      guests: 0,
      bill: 0,
    },
  ]);

  const [twOrders, setTwOrders] = useState([
    { id: "#T1026", items: "2 items", status: "Preparing", total: 610 },
    { id: "#T1025", items: "3 items", status: "Ready", total: 1000 },
    { id: "#T1024", items: "2 items", status: "On the way", total: 360 },
    { id: "#T1023", items: "2 items", status: "Completed", total: 360 },
  ]);

  const [kotTickets, setKotTickets] = useState([
    {
      id: "KT-041",
      table: "T-03",
      items: ["2× Paneer Tikka", "1× Veg Biryani"],
      elapsed: 4,
      status: "New",
    },
    {
      id: "KT-042",
      table: "T-08",
      items: ["1× Burger", "3× Fries"],
      elapsed: 8,
      status: "New",
    },
    {
      id: "KT-043",
      table: "T-01",
      items: ["1× Dal Makhani", "2× Naan"],
      elapsed: 12,
      status: "Preparing",
    },
    {
      id: "KT-044",
      table: "T-06",
      items: ["2× Samosa", "2× Chai"],
      elapsed: 15,
      status: "Preparing",
    },
    {
      id: "KT-045",
      table: "T-11",
      items: ["1× Tikka", "1× Lassi"],
      elapsed: 20,
      status: "Ready",
    },
  ]);

  const handleAddItem = useCallback((food) => {
    setCart((p) => {
      const ex = p.find((i) => i.id === food.id);
      if (ex)
        return p.map((i) => (i.id === food.id ? { ...i, qty: i.qty + 1 } : i));
      return [...p, { ...food, qty: 1 }];
    });
  }, []);

  const handleQty = useCallback((id, delta) => {
    setCart((p) =>
      p
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const handleCycleTable = useCallback((id) => {
    setTables((p) =>
      p.map((t) => {
        if (t.id !== id) return t;
        const next =
          TABLE_CYCLE[(TABLE_CYCLE.indexOf(t.status) + 1) % TABLE_CYCLE.length];
        return {
          ...t,
          status: next,
          guests: next === "Occupied" ? t.guests || 2 : 0,
          bill:
            next === "Occupied"
              ? t.bill || Math.floor(Math.random() * 800 + 200)
              : 0,
        };
      }),
    );
  }, []);

  const handleCycleTW = useCallback((idx) => {
    setTwOrders((p) =>
      p.map((o, i) => {
        if (i !== idx) return o;
        return {
          ...o,
          status: TW_CYCLE[(TW_CYCLE.indexOf(o.status) + 1) % TW_CYCLE.length],
        };
      }),
    );
  }, []);

  const handleAdvanceKOT = useCallback((id) => {
    const CYCLE = ["New", "Preparing", "Ready"];
    setKotTickets((p) =>
      p.map((t) => {
        if (t.id !== id) return t;
        const ni = CYCLE.indexOf(t.status);
        if (ni === CYCLE.length - 1) return t;
        return { ...t, status: CYCLE[ni + 1] };
      }),
    );
  }, []);

  const occupiedCount = tables.filter((t) => t.status === "Occupied").length;
  const pendingKot = kotTickets.filter((t) => t.status !== "Ready").length;

  const NAV_LABELS = {
    orders: "Dine In Orders",
    tables: "Floor Management",
    takeaway: "Takeaway Orders",
    kot: "Kitchen Display",
    menu: "Menu Manager",
    customers: "Customers",
    more: "More",
  };

  return (
    <div className="w-full lg:min-w-[600px] lg:max-w-[720px] mx-auto rounded-[28px] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[10px] shadow-[0_48px_96px_-16px_rgba(0,0,0,0.45)] border border-zinc-700/50">
      {/* Camera dot */}
      <div className="flex justify-center pb-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
      </div>

      {/* Screen */}
      <div
        className="rounded-[20px] overflow-hidden bg-white"
        style={{ height: "480px" }}
      >
        <div
          className="grid h-full"
          style={{ gridTemplateColumns: "52px 1fr" }}
        >
          {/* ── SIDEBAR ── */}
          <div className="bg-zinc-50 border-r border-zinc-100 flex flex-col items-center py-3 gap-1.5 shrink-0">
            {/* Brand mark */}
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveNav(id)}
                title={label}
                className={`w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all ${activeNav === id ? "bg-primary-500 shadow-lg shadow-primary-300/40" : "bg-white border border-zinc-200 hover:border-primary-300 hover:text-primary-500"}`}
              >
                <Icon
                  size={13}
                  className={activeNav === id ? "text-white" : "text-zinc-400"}
                  strokeWidth={2}
                />
                <span
                  className={`text-[5.5px] font-bold leading-none ${activeNav === id ? "text-white" : "text-zinc-400"}`}
                >
                  {label}
                </span>
              </button>
            ))}

            <div className="flex-1" />
            <div className="w-9 h-9 bg-primary-50 border border-primary-100 rounded-xl flex flex-col items-center justify-center">
              <p className="text-[10px] font-black text-primary-600 leading-none">
                {occupiedCount}
              </p>
              <p className="text-[5px] font-semibold text-primary-400">
                active
              </p>
            </div>
          </div>

          {/* ── MAIN AREA ── */}
          <div className="flex flex-col min-w-0 h-full overflow-hidden">
            {/* App header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-100 bg-white shrink-0">
              <div className="flex items-center gap-2">
                <img
                  src="/Images/logo-icon.png"
                  alt="logo"
                  className="w-7 h-7 rounded shadow"
                />
                <div>
                  <p className="text-[11px] font-black text-zinc-900 leading-none">
                    iMaker Restro
                  </p>
                  <p className="text-[8px] text-zinc-400 font-medium">
                    {NAV_LABELS[activeNav]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[8px] font-semibold text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {occupiedCount} live
                </div>
                <button className="relative p-1.5 hover:bg-zinc-100 rounded-lg transition-colors">
                  <Bell size={13} className="text-zinc-400" strokeWidth={2} />
                  {pendingKot > 0 && (
                    <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Screen content — fixed height, overflow scroll inside */}
            <div className="flex-1 overflow-hidden">
              {activeNav === "orders" && (
                <OrdersScreen
                  cart={cart}
                  onAdd={handleAddItem}
                  onQty={handleQty}
                />
              )}
              {activeNav === "tables" && (
                <TablesScreen tables={tables} onCycle={handleCycleTable} />
              )}
              {activeNav === "takeaway" && (
                <TakeawayScreen orders={twOrders} onCycle={handleCycleTW} />
              )}
              {activeNav === "kot" && (
                <KOTScreen tickets={kotTickets} onAdvance={handleAdvanceKOT} />
              )}
              {["menu", "customers", "more"].includes(activeNav) && (
                <div className="flex flex-col items-center justify-center h-full text-zinc-300 gap-2">
                  <UtensilsCrossed size={28} strokeWidth={1} />
                  <p className="text-[11px] font-semibold text-zinc-400 capitalize">
                    {activeNav}
                  </p>
                  <p className="text-[9px] text-zinc-300">Coming soon</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HERO SECTION ────────────────────────────────────────────
export default function HeroSection() {
  return (
    <PageWrapper
      className="relative bg-gradient-to-br from-[#FFF7F7] via-white to-[#FFF9F0] min-h-[100dvh] flex items-center justify-center overflow-hidden"
      containerClassName="w-full pt-16 lg:pt-8"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#fca5a5_1px,_transparent_1px)] bg-[size:28px_28px] opacity-[0.16] pointer-events-none" />
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-100 rounded-full opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-100 rounded-full opacity-15 blur-3xl pointer-events-none" />

      <div className="grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-16 items-center">
        {/* ── LEFT: COPY ── */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-primary-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <Flame size={11} className="text-primary-500" strokeWidth={2.5} />
            <span className="text-[10px] sm:text-xs font-bold text-primary-600 uppercase tracking-widest">
              Smart Restaurant POS
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-zinc-900 leading-[1.06] tracking-tight mb-5">
            Run Your
            <br />
            Restaurant
            <br />
            <span className="text-primary-500">Smarter.</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed max-w-md mb-7">
            Built by{" "}
            <span className="text-zinc-800 font-semibold">
              iMaker Technology Pvt. Ltd.
            </span>{" "}
            — one platform for tables, billing, kitchen orders, and payments.
            Built for Indian restaurants.
          </p>
          <div className="flex items-center gap-8 mb-7">
            {[
              { val: "500+", label: "Restaurants" },
              { val: "99.9%", label: "Uptime" },
              { val: "< 2s", label: "Bill Time" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-xl sm:text-2xl font-black text-zinc-900">
                  {val}
                </p>
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="w-10 h-px bg-zinc-200 mb-7" />
           */}
          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-primary-300/50"
            >
              <Zap size={15} strokeWidth={2.5} />
              Start Free Trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border border-zinc-200 bg-white hover:border-zinc-300 text-zinc-700 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all shadow-sm"
            >
              See How It Works
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["👨‍🍳", "👩‍💼", "🧑‍🍳", "👩‍🍳"].map((e, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white border-2 border-primary-50 shadow-sm flex items-center justify-center text-sm"
                >
                  {e}
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-500">
              <span className="text-zinc-800 font-semibold">
                500+ restaurants
              </span>{" "}
              across India trust iMaker
            </p>
          </div>
        </div>

        {/* ── RIGHT: TABLET + FLOATING CARDS ── */}
        <div className="relative flex items-center justify-center py-16">
          {/* TOP-LEFT float: Revenue */}
          <div className="absolute top-2 -left-2 z-10 bg-white/90 backdrop-blur-md border border-white shadow-2xl shadow-zinc-200/60 rounded-2xl px-4 py-3.5 hover:-translate-y-1 transition-transform duration-300 min-w-[150px]">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
                Today's Revenue
              </p>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingUp size={9} strokeWidth={2.5} />
                <span className="text-[8px] font-bold">14.6%</span>
              </div>
            </div>
            <p className="text-[20px] font-black text-zinc-900 leading-none">
              ₹18,540
            </p>
            <div className="flex items-end gap-0.5 h-5 mt-2">
              {SPARK.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === SPARK.length - 1 ? "bg-primary-500" : "bg-primary-100"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* TOP-RIGHT float: Active Tables */}
          <div className="absolute top-2 -right-2 z-10 bg-white/90 backdrop-blur-md border border-white shadow-2xl shadow-zinc-200/60 rounded-2xl px-4 py-3.5 hover:-translate-y-1 transition-transform duration-300 min-w-[140px]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                <Table2
                  size={15}
                  className="text-emerald-600"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Active Tables
                </p>
                <p className="text-[20px] font-black text-zinc-900 leading-none">
                  12
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[8px] font-semibold text-emerald-600">
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM-LEFT float: Kitchen */}
          <div className="absolute bottom-2 -left-2 z-10 bg-white/90 backdrop-blur-md border border-white shadow-2xl shadow-zinc-200/60 rounded-2xl px-4 py-3.5 hover:-translate-y-1 transition-transform duration-300 min-w-[150px]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                <ChefHat
                  size={15}
                  className="text-amber-600"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Kitchen Efficiency
                </p>
                <p className="text-[20px] font-black text-zinc-900 leading-none">
                  94%
                </p>
                <div className="mt-1 w-full bg-zinc-100 rounded-full h-1">
                  <div
                    className="bg-amber-400 h-1 rounded-full"
                    style={{ width: "94%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM-RIGHT float: Avg Bill */}
          <div className="absolute bottom-2 -right-2 z-10 bg-white/90 backdrop-blur-md border border-white shadow-2xl shadow-zinc-200/60 rounded-2xl px-4 py-3.5 hover:-translate-y-1 transition-transform duration-300 min-w-[140px]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <BarChart3
                  size={15}
                  className="text-blue-600"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Avg Bill Value
                </p>
                <p className="text-[20px] font-black text-zinc-900 leading-none">
                  ₹392
                </p>
                <p className="text-[8px] font-bold text-emerald-500 mt-0.5">
                  ↑ +8.2% this week
                </p>
              </div>
            </div>
          </div>

          {/* Tablet */}
          <div className="relative">
            <TabletMockup />
          </div>

          {/* Ground shadow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-5 bg-zinc-300/25 blur-2xl rounded-full pointer-events-none" />
        </div>
      </div>
    </PageWrapper>
  );
}
