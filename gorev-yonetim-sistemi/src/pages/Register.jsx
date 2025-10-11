import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (localStorage.getItem(data.email)) {
      alert("Bu email zaten kayıtlı!");
      return;
    }
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    localStorage.setItem(data.email, JSON.stringify(userData));
    alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="İsim"
          {...register("name", { required: "İsim zorunlu" })}
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

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
          Kayıt Ol
        </button>
      </form>
      <p style={{ marginTop: 10 }}>
        Zaten hesabın var mı? <Link to="/login">Giriş Yap</Link>
      </p>
    </div>
  );
}

export default Register;
