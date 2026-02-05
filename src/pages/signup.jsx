import { Card, Input, Typography, Alert } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const { Title, Text } = Typography;


const schema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),

    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Confirm password is required"),
});



export default function Signup() {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });



    const onSubmit = (data) => {
        console.log("Signup Data:", data);



        navigate("/login");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingTop: "80px",
                background: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
                padding: 20,
            }}
        >
            <Card
                style={{
                    width: 420,
                    borderRadius: 8,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
            >
                { }

                <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <Title level={2} style={{ margin: "16px 0 8px" }}>
                        Create Account
                    </Title>
                    <Text type="secondary">Register to start banking</Text>
                </div>

                { }

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* First Name */}
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ fontWeight: '500', marginBottom: 8, display: 'block' }}>First Name</label>
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => (
                                <Input {...field} placeholder="Enter first name" size="large" status={errors.firstName ? 'error' : ''} />
                            )}
                        />
                        {errors.firstName && (
                            <div style={{ color: "#ff4d4f", marginTop: 6, fontSize: 13 }}>{errors.firstName.message}</div>
                        )}
                    </div>

                    {/* Last Name */}
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ fontWeight: '500', marginBottom: 8, display: 'block' }}>Last Name</label>
                        <Controller
                            name="lastName"
                            control={control}
                            render={({ field }) => (
                                <Input {...field} placeholder="Enter last name" size="large" status={errors.lastName ? 'error' : ''} />
                            )}
                        />
                        {errors.lastName && (
                            <div style={{ color: "#ff4d4f", marginTop: 6, fontSize: 13 }}>{errors.lastName.message}</div>
                        )}
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ fontWeight: '500', marginBottom: 8, display: 'block' }}>Email</label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input {...field} type="email" placeholder="Enter email" size="large" status={errors.email ? 'error' : ''} />
                            )}
                        />
                        {errors.email && (
                            <div style={{ color: "#ff4d4f", marginTop: 6, fontSize: 13 }}>{errors.email.message}</div>
                        )}
                    </div>

                    {/* Address */}
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ fontWeight: '500', marginBottom: 8, display: 'block' }}>Address</label>
                        <Controller
                            name="address"
                            control={control}
                            render={({ field }) => (
                                <Input.TextArea {...field} rows={2} placeholder="Enter your address" status={errors.address ? 'error' : ''} />
                            )}
                        />
                        {errors.address && (
                            <div style={{ color: "#ff4d4f", marginTop: 6, fontSize: 13 }}>{errors.address.message}</div>
                        )}
                    </div>

                    {/* Password */}
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ fontWeight: '500', marginBottom: 8, display: 'block' }}>Password</label>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input.Password {...field} placeholder="Enter password" size="large" status={errors.password ? 'error' : ''} />
                            )}
                        />
                        {errors.password && (
                            <div style={{ color: "#ff4d4f", marginTop: 6, fontSize: 13 }}>{errors.password.message}</div>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div style={{ marginBottom: 24 }}>
                        <label style={{ fontWeight: '500', marginBottom: 8, display: 'block' }}>Confirm Password</label>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field }) => (
                                <Input.Password {...field} placeholder="Re-enter password" size="large" status={errors.confirmPassword ? 'error' : ''} />
                            )}
                        />
                        {errors.confirmPassword && (
                            <div style={{ color: "#ff4d4f", marginTop: 6, fontSize: 13 }}>{errors.confirmPassword.message}</div>
                        )}
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            marginTop: 24,
                            padding: "10px 16px",
                            background: "#1890ff",
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            fontSize: 16,
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#0050b3'}
                        onMouseLeave={(e) => e.target.style.background = '#1890ff'}
                    >
                        Sign Up
                    </button>
                </form>

                <p style={{ marginTop: 20, fontSize: 14, textAlign: "center", color: '#666' }}>
                    Already have an account? <Link to="/login" style={{ color: '#1890ff', fontWeight: 600 }}>Login here</Link>
                </p>
            </Card>
        </div>
    );
}
