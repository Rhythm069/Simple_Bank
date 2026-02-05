import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./provider/AuthContext";

import MainLayout from "./provider/MainLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";

import "./App.css";

export default function App() {
    const { user } = useAuth();

    return (
        <Routes>

            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes inside MainLayout */}
            <Route
                element={user ? <MainLayout /> : <Navigate to="/login" replace />}
            >
                {/* Home page */}
                <Route path="/" element={<Home />} />

                {/* Transactions page */}
                <Route path="/transactions" element={<Transactions />} />

                {/* You can add more protected pages here */}
            </Route>

            {/* Optional: Catch-all redirect to home if route not found */}
            <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />

        </Routes>
    );
}
