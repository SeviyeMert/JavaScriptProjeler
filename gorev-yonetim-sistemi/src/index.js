import { lazy } from "react";

export const Header = lazy(() => import("./Components/Header"));
export const Footer = lazy(() => import("./Components/Footer"));
export const Context = lazy(() => import("./Components/Context"));
export const Login = lazy(() => import("./pages/Login"));
export const Register = lazy(() => import("./pages/Register"));
export const DefaultLayout = lazy(() =>
  import("./DefaultLayout/DefaultLayout")
);
