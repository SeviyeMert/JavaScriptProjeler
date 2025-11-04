import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../css/Register.css";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (localStorage.getItem(data.email)) {
      alert("This email is already registered!");
      return;
    }
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    localStorage.setItem(data.email, JSON.stringify(userData));
    alert(
      "Registration successful! You are being redirected to the projects page."
    );
    navigate("/projects");
  };

  return (
    <div className="register-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className="register-input"
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="register-input"
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="register-input"
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        <button type="submit" className="register-button">
          Sign up
        </button>
      </form>
      <p className="register-link-text">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Register;
