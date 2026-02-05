import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./provider/AuthContext";

import MainLayout from "./provider/MainLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import AdminPage from "./pages/Admin"; // Make sure you have this page

import "./App.css";

export default function App() {
    const { user } = useAuth();

    return (
        <Routes>
            {/* ================= PUBLIC ROUTES ================= */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* ================= ADMIN ROUTE ================= */}
            <Route
                path="/admin"
                element={
                    user?.role === "admin" ? <AdminPage /> : <Navigate to="/" replace />
                }
            />

            {/* ================= USER / PROTECTED ROUTES ================= */}
            <Route
                element={user && user.role !== "admin" ? <MainLayout /> : <Navigate to="/login" replace />}
            >
                {/* Home page for regular users */}
                <Route path="/" element={<Home />} />

                {/* Transactions page */}
                <Route path="/transactions" element={<Transactions />} />
            </Route>

            {/* ================= CATCH-ALL ================= */}
            <Route
                path="*"
                element={<Navigate to={user ? (user.role === "admin" ? "/admin" : "/") : "/login"} replace />}
            />
        </Routes>
    );
}
