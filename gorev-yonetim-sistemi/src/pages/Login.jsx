import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "../css/Login.css";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.email === "test@example.com" && data.password === "1234") {
      alert("Login successful!");
      navigate("/projects");
    } else {
      alert("Email or password is incorrect!");
    }
  };

  return (
    <div className="login-container">
      <h2>Log in</h2>
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
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
