import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ClientsIcon,
  QrIcon,
  StarIcon,
  MoneyIcon,
} from  "../../icons/Icons";


export default function SalesDashboard() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const clients = [
    {
      id: "c-001",
      name: "Bella Vista Restaurant",
      owner: "Sarah Johnson",
      email: "sarah@bellavista.com",
      reviews: 287,
      qr: 5,
      status: "active",
      color: "from-orange-500 to-pink-500",
    },
    {
      id: "c-002",
      name: "Bright Smile Dental",
      owner: "Dr. Michael Chen",
      email: "mchen@brightsmile.com",
      reviews: 156,
      qr: 3,
      status: "active",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "c-003",
      name: "Luxe Hair Studio",
      owner: "Amanda Rodriguez",
      email: "amanda@luxehair.com",
      reviews: 198,
      qr: 4,
      status: "active",
      color: "from-pink-500 to-fuchsia-500",
    },
    {
      id: "c-004",
      name: "Premium Auto Care",
      owner: "James Wilson",
      email: "james@premiumauto.com",
      reviews: 89,
      qr: 2,
      status: "pending",
      color: "from-orange-500 to-red-500",
    },
  ];

  const filteredClients = useMemo(
    () =>
      clients.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 relative">

      {/* 🌈 PURPLE GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none" />

      {/* 🔝 TOP BAR */}
      <header className="relative z-10 h-16 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 font-semibold">
            <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center">
              ⬛
            </div>
            <span className="text-lg text-gray-900 dark:text-white">
              Qu<span className="text-purple-600">vouch</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              🌙
            </button>

            <span className="px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm">
              Sales Representative
            </span>

            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome, Sales Rep! 👋
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Manage your clients and grow your portfolio
        </p>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            ["My Clients", "42", "+8 this month", ClientsIcon],
            ["Active QR Codes", "156", "+23 this week", QrIcon],
            ["Total Reviews", "3,847", "+287 this month", StarIcon],
            ["Commission", "$8,420", "+12.5%", MoneyIcon],
          ].map(([title, value, growth, Icon]) => (
            <div
              key={title}
              className="relative rounded-2xl p-6 bg-white/80 dark:bg-gray-900/80 border border-purple-200/40 backdrop-blur"
            >
              <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-2xl" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="mt-4 text-sm text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {value}
                </p>
                <span className="inline-block mt-3 px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  {growth}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 mt-10">
          <button
            onClick={() => navigate("/dashboard/sales/new-client")}
            className="px-5 py-2.5 rounded-lg bg-purple-600 text-white shadow hover:opacity-90"
          >
            + Create New Client
          </button>
          <button
            onClick={() => navigate("/dashboard/sales/report")}
            className="px-5 py-2.5 rounded-lg border bg-white dark:bg-gray-900"
          >
            Generate Report
          </button>
        </div>

        {/* CLIENT LIST */}
        <section className="mt-12 rounded-2xl border border-purple-200/40 bg-white/80 dark:bg-gray-900/80 backdrop-blur p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                My Clients
              </h3>
              <p className="text-sm text-gray-500">
                Manage and monitor all your clients
              </p>
            </div>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search clients..."
              className="px-3 py-2 rounded-lg border text-sm dark:bg-gray-800"
            />
          </div>

          <div className="space-y-4">
            {filteredClients.map((c) => (
              <div
                key={c.id}
                className="rounded-xl border p-4 bg-white dark:bg-gray-900 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${c.color} text-white flex items-center justify-center`}
                  >
                    🏢
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {c.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {c.status} • {c.reviews} Reviews
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      navigate(`/dashboard/sales/${c.id}/assign-qr`)
                    }
                    className="px-3 py-1.5 rounded-lg border text-sm"
                  >
                    Assign QR
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/sales/${c.id}/view`)
                    }
                    className="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-sm"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
