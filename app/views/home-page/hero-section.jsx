"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  Star,
  ArrowUpRight,
  Sparkles,
  Shield,
  Play,
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
    card: "bg-white border-zinc-200 hover:border-emerald-300",
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    label: "Available",
  },
  Occupied: {
    card: "bg-gradient-to-br from-primary-500 to-primary-600 border-primary-600",
    dot: "bg-white",
    badge: "bg-white/20 text-white border-white/30",
    label: "Occupied",
  },
  Reserved: {
    card: "bg-gradient-to-br from-amber-400 to-amber-500 border-amber-500",
    dot: "bg-white",
    badge: "bg-white/20 text-white border-white/30",
    label: "Reserved",
  },
  Cleaning: {
    card: "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-600",
    dot: "bg-white",
    badge: "bg-white/20 text-white border-white/30",
    label: "Cleaning",
  },
};

const TW_CYCLE = ["Preparing", "Ready", "On the way", "Completed"];
const TW_STYLES = {
  Preparing: "bg-amber-100 text-amber-700 border border-amber-200",
  Ready: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  "On the way": "bg-sky-100 text-sky-700 border border-sky-200",
  Completed: "bg-zinc-100 text-zinc-500 border border-zinc-200",
};

const KOT_COLS = [
  {
    key: "New",
    label: "New",
    icon: AlertCircle,
    accent: "bg-gradient-to-r from-blue-50 to-blue-100/50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
    btn: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
  },
  {
    key: "Preparing",
    label: "Preparing",
    icon: ChefHat,
    accent: "bg-gradient-to-r from-amber-50 to-amber-100/50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500 animate-pulse",
    btn: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
  },
  {
    key: "Ready",
    label: "Ready",
    icon: CheckCircle2,
    accent:
      "bg-gradient-to-r from-emerald-50 to-emerald-100/50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
    btn: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
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
        <div className="flex gap-1.5 px-4 py-2.5 border-b border-zinc-100 bg-gradient-to-r from-zinc-50 to-white overflow-x-auto shrink-0">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 text-[10px] font-bold px-3 py-1.5 rounded-xl transition-all duration-200 ${
                cat === c
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-200/50 scale-105"
                  : "bg-white border border-zinc-200 text-zinc-500 hover:border-primary-300 hover:text-primary-500 hover:shadow-md"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-3 bg-gradient-to-b from-white to-zinc-50/50">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {items.map((food) => {
              const ci = cart.find((i) => i.id === food.id);
              return (
                <div
                  key={food.id}
                  onClick={() => onAdd(food)}
                  className={`group relative rounded-xl border p-2.5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${
                    ci
                      ? "border-primary-300 bg-gradient-to-br from-primary-50 to-primary-100/50 shadow-md shadow-primary-100/50"
                      : "border-zinc-100 bg-white hover:border-primary-200 hover:shadow-md"
                  }`}
                >
                  <div className="h-12 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    {food.emoji}
                  </div>
                  <p className="text-[9px] font-bold text-zinc-800 leading-tight mb-1 group-hover:text-primary-600 transition-colors">
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
                          className="w-4 h-4 rounded-md bg-zinc-200 text-zinc-600 flex items-center justify-center hover:bg-zinc-300 transition-colors"
                        >
                          <Minus size={7} strokeWidth={3} />
                        </button>
                        <span className="text-[9px] font-black text-zinc-800 w-3 text-center">
                          {ci.qty}
                        </span>
                        <button
                          onClick={() => onQty(food.id, 1)}
                          className="w-4 h-4 rounded-md bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-center hover:from-primary-600 hover:to-primary-700 transition-all shadow-sm"
                        >
                          <Plus size={7} strokeWidth={3} />
                        </button>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 text-primary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
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

      {/* Cart panel */}
      <div className="hidden w-44 shrink-0 lg:flex flex-col bg-gradient-to-b from-white to-zinc-50/80">
        <div className="px-3.5 py-2.5 border-b border-zinc-100 bg-white shrink-0 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-zinc-900">Order #1052</p>
            <p className="text-[8px] text-zinc-400 font-medium">
              Table 07 · Dine In
            </p>
          </div>
          <span className="text-[9px] font-bold bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
            Open
          </span>
        </div>
        <div className="max-h-[240px] overflow-y-auto px-3 py-2.5 space-y-1.5">
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
              className="bg-white border border-zinc-100 rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-[8.5px] font-semibold text-zinc-700 leading-tight mb-1.5">
                {item.name}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onQty(item.id, -1)}
                    className="w-4.5 h-4.5 rounded-lg bg-zinc-100 text-zinc-500 flex items-center justify-center hover:bg-zinc-200 transition-colors"
                  >
                    <Minus size={7} strokeWidth={3} />
                  </button>
                  <span className="text-[9px] font-black text-zinc-800 w-4 text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => onQty(item.id, 1)}
                    className="w-4.5 h-4.5 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 text-primary-500 flex items-center justify-center hover:from-primary-500 hover:to-primary-600 hover:text-white transition-all"
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
          <button className="w-full text-[8.5px] font-bold py-2 rounded-xl bg-gradient-to-r from-zinc-100 to-zinc-200 border border-zinc-200 text-zinc-600 hover:from-zinc-200 hover:to-zinc-300 transition-all mt-0.5">
            Save Order
          </button>
          <button className="w-full text-[8.5px] font-bold py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-200/50 flex items-center justify-center gap-1.5 hover:shadow-xl hover:shadow-primary-300/50">
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
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-100 bg-gradient-to-r from-zinc-50 to-white shrink-0 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          {Object.entries(counts).map(([status, count]) => {
            const s = TABLE_STYLES[status];
            return (
              <div key={status} className="flex items-center gap-1">
                <span
                  className={`w-2 h-2 rounded-full shadow-sm ${s.dot} ring-2 ring-offset-1 ${status === "Available" ? "ring-emerald-100" : "ring-white/20"}`}
                />
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
              className={`text-[9px] font-bold px-2.5 py-1 rounded-lg transition-all duration-200 ${
                zone === z
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md"
                  : "bg-white border border-zinc-200 text-zinc-500 hover:border-primary-300 hover:text-primary-500"
              }`}
            >
              {z}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-white to-zinc-50/50">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {shown.map((table) => {
            const s = TABLE_STYLES[table.status];
            return (
              <button
                key={table.id}
                onClick={() => onCycle(table.id)}
                className={`group relative text-left rounded-2xl border-2 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 ${s.card} ${
                  table.status === "Available"
                    ? "hover:shadow-emerald-100/50"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      table.status === "Available"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-white/30 text-white"
                    }`}
                  >
                    <ArrowUpRight size={10} strokeWidth={2.5} />
                  </div>
                </div>
                <p
                  className={`text-[15px] font-black ${
                    table.status === "Available"
                      ? "text-zinc-900"
                      : "text-white"
                  }`}
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
                  <p className="text-[9px] text-emerald-600 font-semibold mt-0.5 group-hover:text-emerald-700 transition-colors">
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
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-100 bg-gradient-to-r from-zinc-50 to-white shrink-0 overflow-x-auto">
        {["All", "Preparing", "Ready", "On the way", "Completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`shrink-0 text-[9px] font-bold px-3 py-1.5 rounded-xl transition-all duration-200 ${
              filter === f
                ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md"
                : "bg-white border border-zinc-200 text-zinc-500 hover:border-primary-300 hover:text-primary-500"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gradient-to-b from-white to-zinc-50/50">
        {shown.map((o, i) => (
          <div
            key={o.id}
            className="group flex items-center justify-between bg-white border border-zinc-100 rounded-2xl px-4 py-3 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
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
              className={`text-[9px] font-bold px-3 py-1.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm ${TW_STYLES[o.status]}`}
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
    <div className="flex h-full overflow-hidden bg-gradient-to-b from-white to-zinc-50/50">
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
                  className={`${
                    col.key === "New"
                      ? "text-blue-500"
                      : col.key === "Preparing"
                        ? "text-amber-500"
                        : "text-emerald-500"
                  }`}
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
                    className={`group bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 ${
                      over
                        ? "border-red-200 hover:border-red-300"
                        : col.key === "New"
                          ? "border-blue-100 hover:border-blue-200"
                          : col.key === "Preparing"
                            ? "border-amber-100 hover:border-amber-200"
                            : "border-emerald-100 hover:border-emerald-200"
                    }`}
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
                            className={`w-1 h-1 rounded-full shrink-0 ${
                              col.key === "Ready"
                                ? "bg-emerald-500"
                                : "bg-zinc-300"
                            }`}
                          />
                          <span className="text-[8.5px] font-medium text-zinc-600 group-hover:text-zinc-800 transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`flex items-center justify-between px-3 py-1.5 border-t ${
                        over
                          ? "border-red-100 bg-red-50"
                          : "border-zinc-50 bg-zinc-50"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Clock
                          size={8}
                          className={over ? "text-red-500" : "text-zinc-400"}
                        />
                        <span
                          className={`text-[8px] font-bold ${
                            over ? "text-red-600" : "text-zinc-500"
                          }`}
                        >
                          {fmt(t)}
                          {over && " · LATE"}
                        </span>
                      </div>
                      {col.key !== "Ready" ? (
                        <span
                          className={`text-[7.5px] font-black text-white px-2 py-0.5 rounded-lg shadow-sm group-hover:shadow-md transition-shadow ${col.btn}`}
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
    <div className="w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[600px] xl:max-w-[720px] mx-auto rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-[6px] sm:p-[8px] lg:p-[10px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3),0_16px_32px_-8px_rgba(0,0,0,0.2)] sm:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.35)] lg:shadow-[0_48px_96px_-16px_rgba(0,0,0,0.4)] border border-zinc-700/50 ring-1 ring-white/5">
      {/* Camera dot */}
      <div className="flex justify-center pb-1 sm:pb-1.5">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-b from-zinc-500 to-zinc-600 ring-1 ring-zinc-700" />
      </div>

      {/* Screen */}
      <div
        className="rounded-[14px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden bg-white ring-1 ring-black/5"
        style={{ height: "clamp(360px, 55vh, 540px)" }}
      >
        <div
          className="grid h-full"
          style={{ gridTemplateColumns: "40px 1fr" }}
        >
          {/* ── SIDEBAR ── */}
          <div className="bg-gradient-to-b from-zinc-50 to-white border-r border-zinc-100 flex flex-col items-center py-2 sm:py-3 gap-1 sm:gap-1.5 shrink-0">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveNav(id)}
                title={label}
                className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg sm:rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-200 ${
                  activeNav === id
                    ? "bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-300/40 text-white scale-105"
                    : "bg-white border border-zinc-200 hover:border-primary-300 hover:text-primary-500 hover:shadow-md hover:scale-105"
                }`}
              >
                <Icon
                  size={10}
                  className={`sm:size-[13px] transition-colors duration-200 ${
                    activeNav === id ? "text-white" : "text-zinc-400"
                  }`}
                  strokeWidth={2}
                />
                <span
                  className={`text-[4.5px] sm:text-[5.5px] font-bold leading-none hidden sm:block ${
                    activeNav === id ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}

            <div className="flex-1" />
            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-lg sm:rounded-xl flex flex-col items-center justify-center shadow-sm">
              <p className="text-[9px] sm:text-[10px] font-black text-primary-600 leading-none">
                {occupiedCount}
              </p>
              <p className="text-[4px] sm:text-[5px] font-semibold text-primary-400 hidden sm:block">
                active
              </p>
            </div>
          </div>

          {/* ── MAIN AREA ── */}
          <div className="flex flex-col min-w-0 h-full overflow-hidden">
            {/* App header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-zinc-100 bg-gradient-to-r from-white to-zinc-50/80 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <img
                  src="/Images/logo-icon.png"
                  alt="logo"
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-lg"
                />
                <div>
                  <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-black text-zinc-900 leading-none">
                    iMaker Restro
                  </p>
                  <p className="text-[6px] sm:text-[7px] lg:text-[8px] text-zinc-400 font-medium">
                    {NAV_LABELS[activeNav]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex items-center gap-0.5 sm:gap-1 text-[6px] sm:text-[7px] lg:text-[8px] font-semibold text-zinc-400 bg-zinc-50 px-2 py-1 rounded-full border border-zinc-100">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-100" />
                  <span className="hidden sm:inline">{occupiedCount} live</span>
                  <span className="sm:hidden">{occupiedCount}</span>
                </div>
                <button className="relative p-1 sm:p-1.5 hover:bg-zinc-100 rounded-lg transition-colors">
                  <Bell
                    size={10}
                    className="sm:size-[13px] text-zinc-400 hover:text-zinc-600 transition-colors"
                    strokeWidth={2}
                  />
                  {pendingKot > 0 && (
                    <span className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                  )}
                </button>
              </div>
            </div>

            {/* Screen content */}
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
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <PageWrapper
      className="relative bg-gradient-to-br from-[#FFFBFC] via-white to-[#FFF9F5]"
      containerClassName="w-full pt-16 lg:pt-8"
    >
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#fca5a5_0.5px,_transparent_0.5px)] bg-[size:24px_24px] opacity-[0.12]" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-gradient-to-br from-primary-100/40 to-primary-200/20 rounded-full opacity-40 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-0 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-gradient-to-tr from-amber-100/30 to-amber-200/20 rounded-full opacity-30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-full opacity-20 blur-3xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-24 left-10 w-20 h-20 border border-primary-200/30 rounded-full opacity-20 animate-spin-slow" />
      <div
        className="absolute bottom-32 right-10 w-16 h-16 border border-amber-200/30 rounded-full opacity-20 animate-spin-slow"
        style={{ animationDelay: "2s" }}
      />

      <div
        ref={heroRef}
        className="grid lg:grid-cols-[1fr_1.35fr] gap-8 lg:gap-16 items-center w-full z-10"
      >
        {/* ── LEFT: COPY ── */}
        <div
          className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
          <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10 mb-6 sm:mb-7">
            {" "}
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
        <div
          className={`relative flex items-center justify-center py-8 sm:py-12 lg:py-16 mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          {/* TOP-LEFT float: Revenue */}
          <div className="absolute -top-2 sm:top-4 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl shadow-zinc-200/40 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3.5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer min-w-[130px] sm:min-w-[160px] animate-float">
            <div className="flex items-center justify-between mb-1 sm:mb-1.5">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <p className="text-[7px] sm:text-[8px] lg:text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Today's Revenue
                </p>
              </div>
              <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                <TrendingUp
                  size={8}
                  className="sm:size-[9px]"
                  strokeWidth={2.5}
                />
                <span className="text-[6px] sm:text-[7px] lg:text-[8px] font-bold">
                  14.6%
                </span>
              </div>
            </div>
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-black text-zinc-900 leading-none mb-2">
              ₹18,540
            </p>
            <div className="flex items-end gap-0.5 h-4 sm:h-5">
              {SPARK.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-all duration-300 hover:opacity-80 ${
                    i === SPARK.length - 1
                      ? "bg-gradient-to-t from-primary-500 to-primary-400"
                      : "bg-gradient-to-t from-primary-100 to-primary-50"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* TOP-RIGHT float: Active Tables */}
          <div
            className="absolute -top-2 sm:top-4 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl shadow-zinc-200/40 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3.5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer min-w-[120px] sm:min-w-[150px] animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <Table2
                  size={14}
                  className="sm:size-[15px] lg:size-[16px] text-emerald-600"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-[7px] sm:text-[8px] lg:text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Active Tables
                </p>
                <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-black text-zinc-900 leading-none">
                  12
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[7px] sm:text-[8px] lg:text-[9px] font-semibold text-emerald-600">
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM-LEFT float: Kitchen */}
          <div
            className="absolute -bottom-4 sm:-bottom-2 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl shadow-zinc-200/40 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3.5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer min-w-[130px] sm:min-w-[160px] animate-float"
            style={{ animationDelay: "4s" }}
          >
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <ChefHat
                  size={14}
                  className="sm:size-[15px] lg:size-[16px] text-amber-600"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-[7px] sm:text-[8px] lg:text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Kitchen Efficiency
                </p>
                <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-black text-zinc-900 leading-none">
                  94%
                </p>
                <div className="mt-1.5 w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 animate-pulse"
                    style={{ width: "94%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM-RIGHT float: Avg Bill */}
          <div
            className="absolute -bottom-4 sm:-bottom-2 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl shadow-zinc-200/40 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3.5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer min-w-[120px] sm:min-w-[150px] animate-float"
            style={{ animationDelay: "6s" }}
          >
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <BarChart3
                  size={14}
                  className="sm:size-[15px] lg:size-[16px] text-blue-600"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-[7px] sm:text-[8px] lg:text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Avg Bill Value
                </p>
                <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-black text-zinc-900 leading-none">
                  ₹392
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <ArrowUpRight
                    size={8}
                    className="text-emerald-500"
                    strokeWidth={3}
                  />
                  <span className="text-[7px] sm:text-[8px] lg:text-[9px] font-bold text-emerald-500">
                    +8.2% this week
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet */}
          <div className="relative w-full px-2 sm:px-0">
            <TabletMockup />
          </div>

          {/* Ground shadow */}
          <div className="absolute -bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-3/4 sm:w-1/2 h-6 sm:h-8 bg-gradient-to-r from-transparent via-zinc-400/10 to-transparent blur-2xl rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </PageWrapper>
  );
}
