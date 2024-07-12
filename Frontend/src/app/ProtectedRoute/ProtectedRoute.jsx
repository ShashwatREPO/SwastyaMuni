import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

export default function ProtectedRoute() {
  const { isAuth } = useAuth();
  if (isAuth === null) {
    return <LoaderCircle  className="size-8 text-DarkGreen animate-spin"/>;
  }
 
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
