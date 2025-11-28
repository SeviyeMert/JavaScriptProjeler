// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import "../css/Register.css";

// function Register() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     if (localStorage.getItem(data.email)) {
//       alert("This email is already registered!");
//       return;
//     }
//     const userData = {
//       name: data.name,
//       email: data.email,
//       password: data.password,
//     };
//     localStorage.setItem(data.email, JSON.stringify(userData));
//     alert(
//       "Registration successful! You are being redirected to the projects page."
//     );
//     navigate("/projects");
//   };

//   return (
//     <div className="register-container">
//       <h2>Sign up</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="text"
//           placeholder="Name"
//           {...register("name", { required: "Name is required" })}
//           className="register-input"
//         />
//         {errors.name && <p className="error-message">{errors.name.message}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           {...register("email", { required: "Email is required" })}
//           className="register-input"
//         />
//         {errors.email && (
//           <p className="error-message">{errors.email.message}</p>
//         )}

//         <input
//           type="password"
//           placeholder="Password"
//           {...register("password", { required: "Password is required" })}
//           className="register-input"
//         />
//         {errors.password && (
//           <p className="error-message">{errors.password.message}</p>
//         )}

//         <button type="submit" className="register-button">
//           Sign up
//         </button>
//       </form>
//       <p className="register-link-text">
//         Already have an account? <Link to="/login">Log in</Link>
//       </p>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../css/Register.css";
import { useLanguage } from "../Contexts/languageContext";
import { registerTranslations } from "../i18n/Register";

const API_URL = "https://6915be37465a9144626d5495.mockapi.io/api/User";

const MOCK_JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsImlhdCI6MTY3MjUzMTIwMH0.S-aA7wV0G_uX6tN8lJzFhQYwQxXn3tJ7oXy5rYx4Mzg";

function Register() {
  const { language } = useLanguage();
  const t = registerTranslations[language];

  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setErrorMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error(t.serverError);
      }

      localStorage.setItem("jwtToken", MOCK_JWT_TOKEN);
      localStorage.setItem("isLoggedIn", "true");

      alert(t.successMessage);
      navigate("/projects");
    } catch (error) {
      console.error("Kayıt işlemi hatası:", error);
      setErrorMessage(t.genericError);
    }

    localStorage.setItem(data.name, JSON.stringify(data));
    localStorage.setItem(data.email, JSON.stringify(data));
  };

  return (
    <div className="register-container">
      <h2 className="register">{t.header}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder={t.namePlaceholder}
          {...register("name", { required: t.nameRequired })}
          className="register-input"
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: t.emailRequired,
          })}
          className="register-input"
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}

        <input
          type="password"
          placeholder={t.passwordPlaceholder}
          {...register("password", {
            required: t.passwordRequired,
            minLength: {
              value: 4,
              message: t.passwordMinLength,
            },
          })}
          className="register-input"
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        {errorMessage && (
          <p className="error-message api-error">{errorMessage}</p>
        )}

        <button type="submit" className="register-button">
          {t.btnRegister}
        </button>
      </form>
      <p className="register-link-text">
        {t.alreadyHaveAccount}{" "}
        <Link to="/login" className="small-login">
          {t.loginLink}
        </Link>
      </p>
    </div>
  );
}

export default Register;
