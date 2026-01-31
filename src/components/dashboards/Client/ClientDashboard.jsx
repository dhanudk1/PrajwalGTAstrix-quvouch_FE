import {
  Star,
  QrCode,
  Eye,
  BarChart3,
  Download,
  Share2,
  Search,
  BadgeCheck,
  ExternalLink,
  Settings,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutThunk } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function ReviewDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const reviews = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      text:
        "Amazing service! The staff was incredibly friendly and the quality exceeded my expectations. Will definitely recommend to friends and family.",
      time: "2 hours ago",
      place: "Main Entrance",
      code: "R-001",
    },
    {
      name: "John Davis",
      rating: 5,
      text:
        "Outstanding experience from start to finish. Very professional team and excellent attention to detail.",
      time: "5 hours ago",
      place: "Reception Desk",
      code: "R-002",
    },
    {
      name: "James Wilson",
      rating: 4,
      text:
        "Very good service. Professional staff and clean environment. A few small improvements could make it perfect.",
      time: "3 days ago",
      place: "Reception Desk",
      code: "R-006",
    },
    {
      name: "Amanda Lee",
      rating: 5,
      text:
        "Could not be happier with my experience! The team was knowledgeable, friendly, and very accommodating.",
      time: "4 days ago",
      place: "Checkout Counter",
      code: "R-007",
    },
    {
      name: "Robert Brown",
      rating: 5,
      text:
        "Top-notch service! Everything was handled professionally and efficiently. Will definitely be back.",
      time: "5 days ago",
      place: "Table Tent",
      code: "R-008",
    },
  ];

  const filteredReviews = reviews.filter((r) => {
    const matchRating = filter === "all" || r.rating === filter;
    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.text.toLowerCase().includes(search.toLowerCase()) ||
      r.place.toLowerCase().includes(search.toLowerCase()) ||
      r.code.toLowerCase().includes(search.toLowerCase());
    return matchRating && matchSearch;
  });

  const logout = () => {
    dispatch(logoutThunk())
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className={dark ? "dark" : ""}>
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 30%, rgba(168,85,247,0.20), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 35% at 50% 70%, rgba(196,181,253,0.16), transparent 72%)",
          }}
        />
      </div>

      <div className="min-h-screen bg-[#faf7ff] dark:bg-[#0b0b14] text-gray-800 dark:text-gray-100">

        {/* ================= NAVBAR ================= */}
        <header className="sticky top-0 z-20 bg-white/80 dark:bg-black/40 backdrop-blur border-b border-purple-200/40 dark:border-white/10 h-16">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 font-semibold">
              <div className="relative w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-500/40 blur-lg -z-10" />
                <QrCode size={18} />
              </div>
              <span className="text-lg">
                Qu<span className="text-purple-600">vouch</span>
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100/70 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-medium">
                Client Dashboard
              </button>

              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                <Settings size={18} />
              </button>

              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-200/40 dark:border-white/10 text-purple-600 dark:text-purple-300 text-sm font-medium"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              Your Review Dashboard
              <BarChart3 className="text-purple-600" />
            </h1>
            <p className="text-gray-500">
              Monitor and manage all customer reviews collected via Quvouch
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat icon={<Star />} title="Total Reviews" value="287" />
            <Stat icon={<BadgeCheck />} title="Average Rating" value="4.8" />
            <Stat icon={<Eye />} title="Total Scans" value="3,429" />
            <Stat icon={<QrCode />} title="Active QR Codes" value="5" />
          </div>

          {/* MIDDLE */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RatingDistribution />
            <QuickActions />
          </div>

          {/* REVIEWS */}
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur rounded-2xl border border-purple-200/40 dark:border-white/10 p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
              <h2 className="font-semibold">Customer Reviews</h2>

              <div className="flex flex-wrap gap-2 items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search reviews..."
                    className="pl-9 pr-3 py-2 rounded-lg border border-purple-200/40 dark:border-white/10 bg-transparent text-sm"
                  />
                </div>

                {["all", 5, 4, 3, 2, 1].map((r) => (
                  <button
                    key={r}
                    onClick={() => setFilter(r)}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      filter === r
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 dark:bg-white/10 hover:bg-purple-100"
                    }`}
                  >
                    {r === "all" ? "All" : `${r}★`}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredReviews.map((r, i) => (
                <ReviewCard key={i} {...r} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ icon, title, value }) {
  return (
    <div className="relative rounded-xl p-5 border border-purple-200/40 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent" />
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mb-3">
          {icon}
        </div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );
}

function RatingDistribution() {
  const data = [
    { star: 5, value: 234 },
    { star: 4, value: 42 },
    { star: 3, value: 8 },
    { star: 2, value: 2 },
    { star: 1, value: 1 },
  ];

  return (
    <div className="bg-white/70 dark:bg-white/5 backdrop-blur rounded-xl p-6 border border-purple-200/40 dark:border-white/10">
      <h3 className="font-semibold mb-4">Rating Distribution</h3>
      {data.map((d) => (
        <div key={d.star} className="flex items-center gap-3 mb-2">
          <span className="w-6">{d.star}★</span>
          <div className="flex-1 h-2 rounded bg-gray-200 dark:bg-white/10">
            <div
              className="h-2 rounded bg-purple-500"
              style={{ width: `${d.value / 3}%` }}
            />
          </div>
          <span className="text-xs w-8 text-right">{d.value}</span>
        </div>
      ))}
    </div>
  );
}

function QuickActions() {
  return (
    <div className="lg:col-span-2 bg-white/70 dark:bg-white/5 backdrop-blur rounded-xl p-6 border border-purple-200/40 dark:border-white/10">
      <h3 className="font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Action icon={<Download />} title="Export Reviews" />
        <Action icon={<Share2 />} title="Share Reviews" />
        <Action icon={<BarChart3 />} title="View Analytics" highlight />
      </div>
    </div>
  );
}

function Action({ icon, title, highlight }) {
  return (
    <div
      className={`p-4 rounded-xl border border-purple-200/40 dark:border-white/10 ${
        highlight
          ? "bg-gradient-to-br from-green-100 to-green-50 dark:from-green-500/20 dark:to-green-500/5"
          : "bg-gradient-to-br from-purple-100 to-white dark:from-white/10 dark:to-white/5"
      }`}
    >
      <div className="text-purple-600 mb-2">{icon}</div>
      <p className="font-medium">{title}</p>
    </div>
  );
}

function ReviewCard({ name, rating, text, time, place, code }) {
  return (
    <div className="relative rounded-xl p-5 border border-purple-200/40 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent" />

      <div className="relative">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold">
              {name[0]}
            </div>
            <div>
              <p className="font-semibold flex items-center gap-2">
                {name}
                <span className="flex items-center gap-1 text-xs border border-green-400 text-green-600 px-2 py-0.5 rounded-full">
                  <BadgeCheck size={12} /> Verified
                </span>
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className={
                      s <= rating
                        ? "fill-purple-500 text-purple-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <ExternalLink size={16} className="text-purple-500" />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 italic">
          “{text}”
        </p>

        <p className="text-xs text-gray-400 mt-3">
          {time} • {place} • {code}
        </p>
      </div>
    </div>
  );
}
