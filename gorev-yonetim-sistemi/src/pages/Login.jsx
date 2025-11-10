import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "../css/Login.css";
function Login({ onLoginSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.email === "test@example.com" && data.password === "1234") {
      alert("Login successful!");
      onLoginSuccess();
      navigate("/projects");
    } else {
      alert("Email or password is incorrect!");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login">Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="login-input"
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="login-input"
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
        <button type="submit" className="login-button">
          Log in
        </button>
      </form>
      <p className="login-link-text">
        Don't have an account?{" "}
        <Link to="/register" className="signup">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
