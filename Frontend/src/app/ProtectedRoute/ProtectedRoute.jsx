import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isAuth}= useAuth();
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}
