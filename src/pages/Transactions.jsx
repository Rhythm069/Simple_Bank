import { Table, Card, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

export default function Transactions() {
    // Dummy data for transactions
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setTransactions([
                { key: 1, date: "2026-02-01", type: "Deposit", amount: "NPR 10,000", status: "Success" },
                { key: 2, date: "2026-02-02", type: "Transfer", amount: "NPR 5,000", status: "Success" },
                { key: 3, date: "2026-02-03", type: "Payment", amount: "NPR 2,500", status: "Pending" },
                { key: 4, date: "2026-02-04", type: "Deposit", amount: "NPR 8,000", status: "Failed" },
            ]);
        }, 500); // simulate API delay
    }, []);

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (text) => {
                let color = "gray";
                if (text === "Success") color = "green";
                if (text === "Pending") color = "orange";
                if (text === "Failed") color = "red";
                return <span style={{ color, fontWeight: "bold" }}>{text}</span>;
            },
        },
    ];

    return (
        <div>
            <Title level={2} style={{ marginBottom: 20 }}>
                Transaction History
            </Title>

            <Card style={{ borderRadius: 12 }}>
                <Table
                    columns={columns}
                    dataSource={transactions}
                    pagination={{ pageSize: 5 }}
                    scroll={{ x: 600 }}
                />
            </Card>
        </div>
    );
}
