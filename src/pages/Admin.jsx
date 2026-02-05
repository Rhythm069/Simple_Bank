import { Card, Row, Col, Statistic } from "antd";
import { UserOutlined, CreditCardOutlined, DollarOutlined } from "@ant-design/icons";

export default function AdminPage() {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ marginBottom: 20 }}>Admin Dashboard</h1>

            <Row gutter={20}>
                {/* Total Users */}
                <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Statistic
                            title="Total Users"
                            value={120}
                            prefix={<UserOutlined />}
                        />
                    </Card>
                </Col>

                {/* Total Transactions */}
                <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Statistic
                            title="Total Transactions"
                            value={350}
                            prefix={<CreditCardOutlined />}
                        />
                    </Card>
                </Col>

                {/* Total Revenue */}
                <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Statistic
                            title="Total Revenue"
                            value={7520}
                            prefix={<DollarOutlined />}
                        />
                    </Card>
                </Col>
            </Row>

            {/* Optional: Add more admin analytics / tables here */}
            <div style={{ marginTop: 40 }}>
                <h2>Recent Transactions</h2>
                <Card>
                    <p>No transaction data yet.</p>
                </Card>
            </div>
        </div>
    );
}
