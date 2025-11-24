// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, Link } from "react-router-dom";
// import "../css/Login.css";
// function Login({ onLoginSuccess }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     if (data.email === "test@example.com" && data.password === "1234") {
//       alert("Login successful!");
//       onLoginSuccess();
//       navigate("/projects");
//     } else {
//       alert("Email or password is incorrect!");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login">Log in</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="email"
//           placeholder="Email"
//           {...register("email", { required: "Email is required" })}
//           className="login-input"
//         />
//         {errors.email && (
//           <p className="error-message">{errors.email.message}</p>
//         )}
//         <input
//           type="password"
//           placeholder="Password"
//           {...register("password", { required: "Password is required" })}
//           className="login-input"
//         />
//         {errors.password && (
//           <p className="error-message">{errors.password.message}</p>
//         )}
//         <button type="submit" className="login-button">
//           Log in
//         </button>
//       </form>
//       <p className="login-link-text">
//         Don't have an account?{" "}
//         <Link to="/register" className="signup">
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default Login;

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "../css/Login.css";
import { useLanguage } from "../Contexts/languageContext";
import { loginTranslations } from "../i18n/Login";

const MOCK_JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsImlhdCI6MTY3MjUzMTIwMH0.S-aA7wV0G_uX6tN8lJzFhQYwQxXn3tJ7oXy5rYx4Mzg";
const API_URL = "https://6915be37465a9144626d5495.mockapi.io/api/User";

function Login({ onLoginSuccess }) {
  const { language } = useLanguage();
  const t = loginTranslations[language];

  const [errorMessage, setErrorMessage] = useState("");

  // const [posts, setPosts] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await fetch(API_URL, {
  //       method: "GET",
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     setPosts(data);
  //   };
  //   fetchPost();
  // }, []);
  // navigate("/projects");

  const onSubmit = async (data) => {
    setErrorMessage("");
    try {
      const response = await fetch(API_URL, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(t.serverError);
      }

      const users = await response.json();

      const user = users.find(
        (u) => u.email === data.email && u.password === data.password
      );

      if (user) {
        localStorage.setItem("jwtToken", MOCK_JWT_TOKEN);
        if (onLoginSuccess) {
          onLoginSuccess();
        }
        navigate("/projects");
      } else {
        setErrorMessage(t.credentialsError);
      }
    } catch (error) {
      setErrorMessage(`${t.loginErrorPrefix}${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login">{t.loginHeader}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder={t.emailPlaceHolder}
          {...register("email", {
            required: t.emailRequired,
          })}
          className="login-input"
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
          className="login-input"
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        {errorMessage && (
          <p className="error-message api-error">{errorMessage}</p>
        )}

        <button type="submit" className="login-button">
          {t.loginButton}
        </button>
      </form>
      <p className="login-link-text">
        {t.noAccount}{" "}
        <Link to="/register" className="signup">
          {t.signUp}
        </Link>
      </p>
    </div>
  );
}

export default Login;
