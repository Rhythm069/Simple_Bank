import { Layout, Menu, Button } from "antd";
import {
    HomeOutlined,
    UserOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    LogoutOutlined,
    DashboardOutlined,
    CreditCardOutlined, // <- For Transactions
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
                    background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
                    padding: "0 40px",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                }}
            >

                {/* Logo */}
                <h2
                    style={{
                        color: "white",
                        marginRight: 40,
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                    onClick={() => navigate("/")}
                >
                    MyBank
                </h2>

                {/* Menu */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectable={false}
                    style={{
                        flex: 1,
                        background: "transparent",
                        borderBottom: "none",
                    }}
                >

                    {/* Home */}
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>

                    {/* About (Scroll) */}
                    <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                        <a href="#about" style={{ color: "inherit" }}>
                            About Us
                        </a>
                    </Menu.Item>

                    {/* Contact */}
                    <Menu.Item key="3" icon={<PhoneOutlined />}>
                        <Link to="/contact">Contact</Link>
                    </Menu.Item>

                    {/* Transactions */}
                    <Menu.Item key="6" icon={<CreditCardOutlined />}>
                        <Link to="/transactions">Transactions</Link>
                    </Menu.Item>

                    {/* Profile */}
                    {user && (
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                    )}

                    {/* Admin */}
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
                <p style={{ margin: 0 }}>© {new Date().getFullYear()} MyBank | Secure Digital Banking System</p>
                <p style={{ margin: "8px 0 0 0", fontSize: 12, opacity: 0.8 }}>Protecting Your Financial Future</p>
            </Footer>

        </Layout>
    );
}
