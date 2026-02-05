import { Card, Row, Col, Button } from "antd";
import { BankOutlined } from "@ant-design/icons";

export default function Home() {
    return (
        <div>

            {/* ================= HERO SECTION ================= */}
            <div
                style={{
                    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                    color: "white",
                    padding: "100px 20px",
                    textAlign: "center",
                    borderRadius: 12,
                    marginBottom: 60,
                }}
            >
                <h1 style={{ fontSize: 48, fontWeight: 700, margin: '0 0 16px 0' }}>Welcome to MyBank</h1>
                <p style={{ fontSize: 18, margin: '0 0 32px 0', opacity: 0.9 }}>Secure • Fast • Reliable Digital Banking</p>

                <Button type="primary" size="large" style={{ height: 48, fontSize: 16, fontWeight: 600 }}>
                    Get Started
                </Button>
            </div>

            {/* ================= SERVICES ================= */}
            <div style={{ marginBottom: 80 }}>
                <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, marginBottom: 40 }}>Our Services</h2>
                <Row gutter={[20, 20]}>
                    <Col xs={24} md={8}>
                        <Card title="💳 Accounts" style={{ height: '100%' }} hoverable>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>Manage your savings and current accounts easily.</p>
                        </Card>
                    </Col>

                    <Col xs={24} md={8}>
                        <Card title="💸 Transfers" style={{ height: '100%' }} hoverable>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>Send money instantly anywhere.</p>
                        </Card>
                    </Col>

                    <Col xs={24} md={8}>
                        <Card title="📊 Analytics" style={{ height: '100%' }} hoverable>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>Track your expenses and income.</p>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* ================= ABOUT SECTION ================= */}
            <section
                id="about"
                style={{
                    padding: "80px 20px",
                    background: "#f0f9ff",
                    borderRadius: 12,
                    textAlign: "center",
                }}
            >
                <h2 style={{ color: "#0f766e" }}>About Our Bank</h2>

                <p
                    style={{
                        maxWidth: 700,
                        margin: "20px auto",
                        color: "#334155",
                        fontSize: 16,
                        lineHeight: 1.7,
                    }}
                >
                    MyBank is a modern digital banking platform built to provide
                    secure, fast, and easy financial services. We help users manage
                    money, transfer funds, and grow savings with confidence.
                </p>

                <Row gutter={[20, 20]} justify="center">
                    <Col xs={24} md={6}>
                        <Card>
                            <h4>🔒 Secure</h4>
                            <p>Advanced data protection</p>
                        </Card>
                    </Col>

                    <Col xs={24} md={6}>
                        <Card>
                            <h4>⚡ Fast</h4>
                            <p>Instant transactions</p>
                        </Card>
                    </Col>

                    <Col xs={24} md={6}>
                        <Card>
                            <h4>🤝 Support</h4>
                            <p>24/7 customer service</p>
                        </Card>
                    </Col>
                </Row>
            </section>

        </div>
    );
}
