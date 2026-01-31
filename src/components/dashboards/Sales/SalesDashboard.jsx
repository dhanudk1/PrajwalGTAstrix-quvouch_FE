import {
  User,
  QrCode,
  Star,
  DollarSign,
  Eye,
  Moon,
  Sun,
  Settings,
  LogOut,
  Briefcase,
  Utensils,
  Stethoscope,
  Scissors,
  Car,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateClient from "./CreateClient";
import { logoutThunk } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [createClientOpen, setCreateClientOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutThunk());
    navigate(ROUTES.LOGIN, { replace: true });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* ============ BACKGROUND GLOW (MATCHES IMAGE) ============ */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Main center glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 40% at 50% 30%, rgba(168,85,247,0.18), transparent 70%)",
          }}
        />

        {/* Lower soft wash */}
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
        <header className="relative z-10 bg-white/70 dark:bg-black/40 backdrop-blur border-b border-gray-200/60 dark:border-white/10 h-16">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

            {/* LOGO */}
            <div className="flex items-center gap-2 font-semibold">
              <div className="relative w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-500/40 blur-lg -z-10" />
                <QrCode size={18} />
              </div>
              <span className="text-lg">
                Qu<span className="text-purple-600">vouch</span>
              </span>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100/70 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-medium">
                <Briefcase size={16} />
                Sales Representative
              </div>

              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                <Settings size={18} />
              </button>

              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-purple-600 dark:text-purple-300 text-sm font-medium"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <main className="px-10 py-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-1">
            Welcome, Sales Rep! 👋
          </h1>
          <p className="text-gray-500 mb-8">
            Manage your clients and grow your portfolio
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard icon={<User />} title="My Clients" value="42" badge="+8 this month" />
            <StatCard icon={<QrCode />} title="Active QR Codes" value="156" badge="+23 this week" />
            <StatCard icon={<Star />} title="Total Reviews" value="3,847" badge="+287 this month" />
            <StatCard icon={<DollarSign />} title="Commission" value="$8,420" badge="+12.5%" />
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setCreateClientOpen(true)}
              className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700"
            >
              Create New Client
            </button>
            <button className="border px-5 py-2 rounded-lg text-purple-600 hover:bg-purple-50">
              Generate Report
            </button>
          </div>

          {/* CLIENT LIST */}
          <div className="space-y-4">
            <ClientCard
              icon={<Utensils />}
              color="from-orange-500 to-red-500"
              name="Bella Vista Restaurant"
              contact="Sarah Johnson"
              email="sarah@bellavista.com"
              status="active"
              qr="5 QR Codes"
              reviews="287 Reviews"
            />
            <ClientCard
              icon={<Stethoscope />}
              color="from-blue-500 to-indigo-500"
              name="Bright Smile Dental"
              contact="Dr. Michael Chen"
              email="mchen@brightsmile.com"
              status="active"
              qr="3 QR Codes"
              reviews="156 Reviews"
            />
            <ClientCard
              icon={<Scissors />}
              color="from-pink-500 to-purple-500"
              name="Luxe Hair Studio"
              contact="Amanda Rodriguez"
              email="amanda@luxehair.com"
              status="active"
              qr="4 QR Codes"
              reviews="198 Reviews"
            />
            <ClientCard
              icon={<Car />}
              color="from-yellow-500 to-orange-500"
              name="Premium Auto Care"
              contact="James Wilson"
              email="james@premiumauto.com"
              status="pending"
              qr="2 QR Codes"
              reviews="89 Reviews"
            />
          </div>
        </main>
      </div>

      <CreateClient
        open={createClientOpen}
        onClose={() => setCreateClientOpen(false)}
      />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ icon, title, value, badge }) {
  return (
    <div className="relative bg-white/70 dark:bg-white/5 backdrop-blur rounded-xl p-5 border border-purple-200/40 dark:border-white/10">
      <div className="absolute inset-0 bg-purple-500/10 blur-xl rounded-xl -z-10" />
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
          {badge}
        </span>
      </div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}

function ClientCard({ icon, color, name, contact, email, status, qr, reviews }) {
  return (
    <div className="relative bg-white/70 dark:bg-white/5 backdrop-blur rounded-xl p-5 flex items-center justify-between border border-purple-200/40 dark:border-white/10">
      <div className="absolute inset-0 bg-purple-500/10 blur-xl rounded-xl -z-10" />

      <div className="flex gap-4 w-1/3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{name}</h3>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                status === "active"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {status}
            </span>
          </div>
          <p className="text-sm text-gray-500">{contact}</p>
          <p className="text-xs text-gray-400">{qr}</p>
        </div>
      </div>

      <div className="w-1/3 text-sm text-gray-500 space-y-1">
        <p>{email}</p>
        <p>{reviews}</p>
      </div>

      <div className="flex gap-3">
        <button className="border px-3 py-1 rounded-lg text-purple-600 text-sm hover:bg-purple-50">
          Assign QR
        </button>
        <button className="border px-3 py-1 rounded-lg text-sm flex items-center gap-1 hover:bg-gray-50">
          <Eye size={16} />
          View
        </button>
      </div>
    </div>
  );
}
