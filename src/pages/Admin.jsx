import { Card, Row, Col, Statistic } from "antd";
import { UserOutlined, CreditCardOutlined, DollarOutlined } from "@ant-design/icons";

export default function Admin() {
    return (
        <div style={{ padding: 20 }}>
            <h1>Admin Dashboard</h1>
            <Row gutter={20}>
                <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Statistic title="Total Users" value={120} prefix={<UserOutlined />} />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Statistic title="Total Transactions" value={350} prefix={<CreditCardOutlined />} />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Statistic title="Total Revenue" value={7520} prefix={<DollarOutlined />} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
