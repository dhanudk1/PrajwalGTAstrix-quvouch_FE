import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/HomePage";
import Footer from "./components/Footer/Footer";
import SignupPage from "./components/Signup/Signup";

import SalesDashboard from "./components/dashboards/Sales/SalesDashboard";
import ClientDashboard from "./components/dashboards/Client/ClientDashboard";
import AdminDashboard from "./components/dashboards/Admin/AdminDashboard";

import CreateClient from "./components/dashboards/Sales/CreateClient";
import SalesReport from "./components/dashboards/Sales/SalesReport";

import ProtectedRoute from "./components/Auth/ProtectedRoute";


export default function App() {
  const location = useLocation();

  // ❌ Hide Navbar on signup & dashboards
  const hideNavbar =
    location.pathname === "/signup" ||
    location.pathname.startsWith("/dashboard");

  return (
    <div className="App min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
      

        {/* ================= SALES DASHBOARD ================= */}
        <Route
          path="/dashboard/sales"
          element={
            <ProtectedRoute allowedRole="sales">
              <SalesDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/sales/new-client"
          element={
            <ProtectedRoute allowedRole="sales">
              <CreateClient />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/sales/report"
          element={
            <ProtectedRoute allowedRole="sales">
              <SalesReport />
            </ProtectedRoute>
          }
        />

        {/* ================= CLIENT DASHBOARD ================= */}
        <Route
          path="/dashboard/client"
          element={
            <ProtectedRoute allowedRole="client">
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN DASHBOARD ================= */}
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!hideNavbar && <Footer />}
    </div>
  );
}
