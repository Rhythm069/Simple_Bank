import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./provider/AuthContext";
import MainLayout from "./provider/MainLayout";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Admin from "./pages/Admin";

export default function App() {
    const { user } = useAuth();

    return (
        <Routes>
            {/* Public */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected */}
            <Route element={user ? <MainLayout /> : <Navigate to="/login" replace />}>
                {user?.role !== "admin" && <Route path="/" element={<Home />} />}
                {user?.role !== "admin" && <Route path="/transactions" element={<Transactions />} />}
                {user?.role === "admin" && <Route path="/admin" element={<Admin />} />}
            </Route>

            <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
        </Routes>
    );
}
