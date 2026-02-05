import { Layout, Menu, Button } from "antd";
import {
    HomeOutlined,
    UserOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    LogoutOutlined,
    DashboardOutlined,
    CreditCardOutlined,
} from "@ant-design/icons";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthContext";

const { Header, Content, Footer } = Layout;

export default function MainLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // Logout handler
    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* ================= HEADER / NAVBAR ================= */}
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
                    padding: "0 20px",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                }}
            >
               
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 6,
                            background: "rgba(255,255,255,0.08)",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(user?.role === "admin" ? "/admin" : "/")}
                    />
                    <h2
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            margin: 0,
                        }}
                        onClick={() => navigate(user?.role === "admin" ? "/admin" : "/")}
                    >
                        MyBank
                    </h2>
                </div>

                {/* Menu */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectable={false}
                    style={{
                        flex: 1,
                        background: "transparent",
                        borderBottom: "none",
                        marginLeft: 40,
                    }}
                >
                    {/* Home - only for non-admin users */}
                    {user?.role !== "admin" && (
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                    )}

                    {/* About */}
                    <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                        <a href="#about" style={{ color: "inherit" }}>
                            About Us
                        </a>
                    </Menu.Item>

                    {/* Contact */}
                    <Menu.Item key="3" icon={<PhoneOutlined />}>
                        <Link to="/contact">Contact</Link>
                    </Menu.Item>

                    {/* Transactions - only for users */}
                    {user?.role !== "admin" && (
                        <Menu.Item
                            key="6"
                            icon={<CreditCardOutlined />}
                            style={{ transition: "all 0.3s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#1890ff")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                            <Link to="/transactions" style={{ color: "white" }}>
                                Transactions
                            </Link>
                        </Menu.Item>
                    )}

                    {/* Profile */}
                    {user && (
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                    )}

                    {/* Admin - only for admin */}
                    {user?.role === "admin" && (
                        <Menu.Item key="5" icon={<DashboardOutlined />}>
                            <Link to="/admin">Admin</Link>
                        </Menu.Item>
                    )}
                </Menu>

                {/* Logout Button */}
                {user && (
                    <Button
                        danger
                        type="primary"
                        icon={<LogoutOutlined />}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                )}
            </Header>

            {/* ================= MAIN CONTENT ================= */}
            <Content
                style={{
                    padding: "40px 20px",
                    background: "#f5f7fa",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                <Outlet />
            </Content>

            {/* ================= FOOTER ================= */}
            <Footer
                style={{
                    textAlign: "center",
                    background: "#0f2027",
                    color: "white",
                    padding: "30px 20px",
                    marginTop: "80px",
                }}
            >
                <p style={{ margin: 0 }}>
                    © {new Date().getFullYear()} MyBank | Secure Digital Banking System
                </p>
                <p style={{ margin: "8px 0 0 0", fontSize: 12, opacity: 0.8 }}>
                    Protecting Your Financial Future
                </p>
            </Footer>
        </Layout>
    );
}
