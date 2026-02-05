import { Card, Input, Typography, Alert } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../provider/AuthContext";

const { Title, Text } = Typography;

// Validation Schema
const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    // Role-based login
    const onSubmit = (data) => {
        const role = data.email === "admin@gmail.com" ? "admin" : "user";

        // Save user in context
        login({ email: data.email, role });

        // Redirect based on role
        if (role === "admin") {
            navigate("/admin");   // Admin dashboard
        } else {
            navigate("/");        // Regular user home
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
            padding: 20,
        }}>
            <Card
                style={{
                    height: '75vh',
                    width: 400,
                    borderRadius: 50,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
            >
                {/* Title */}
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                    <Title level={2} style={{ padding: '10px', margin: '16px 0 8px' }}>Welcome Back</Title>
                    <Text type="secondary">Sign in to your account</Text>
                </div>

                {/* Root error */}
                {errors.root && (
                    <Alert
                        type="error"
                        message={errors.root.message}
                        showIcon
                        style={{ marginBottom: 16 }}
                    />
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email */}
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ fontWeight: '500', marginBottom: 8, display: 'block' }}>Email</label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="email"
                                    placeholder="Enter your email"
                                    size="large"
                                    status={errors.email ? 'error' : ''}
                                />
                            )}
                        />
                        {errors.email && (
                            <div style={{ color: '#ff4d4f', marginTop: 6, fontSize: 13 }}>{errors.email.message}</div>
                        )}
                    </div>

                    {/* Password */}
                    <div style={{ marginBottom: 24 }}>
                        <label style={{ fontWeight: '500', marginBottom: 8, display: 'block' }}>Password</label>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input.Password
                                    {...field}
                                    placeholder="Enter your password"
                                    size="large"
                                    status={errors.password ? 'error' : ''}
                                />
                            )}
                        />
                        {errors.password && (
                            <div style={{ color: '#ff4d4f', marginTop: 6, fontSize: 13 }}>{errors.password.message}</div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            marginTop: 24,
                            padding: '10px 16px',
                            background: '#1890ff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 6,
                            fontSize: 16,
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#0050b3'}
                        onMouseLeave={(e) => e.target.style.background = '#1890ff'}
                    >
                        Login
                    </button>
                </form>

                {/* Signup link */}
                <p style={{ marginTop: 30, fontSize: 14, textAlign: 'center', color: '#666' }}>
                    Don't have an account? <Link to="/signup" style={{ color: '#1890ff', fontWeight: 600 }}>Sign up here</Link>
                </p>
            </Card>
        </div>
    );
}
