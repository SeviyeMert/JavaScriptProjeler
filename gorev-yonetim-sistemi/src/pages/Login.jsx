import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.email === "test@example.com" && data.password === "1234") {
      alert("Giriş başarılı!");
      navigate("/projects");
    } else {
      alert("Email veya şifre hatalı!");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email zorunlu" })}
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Şifre"
          {...register("password", { required: "Şifre zorunlu" })}
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Giriş Yap
        </button>
      </form>
      <p style={{ marginTop: 10 }}>
        Hesabın yok mu? <Link to="/register">Kayıt Ol</Link>
      </p>
    </div>
  );
}

export default Login;
