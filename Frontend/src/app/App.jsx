import { useContext, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import { AuthProvider } from "./AuthProvider";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import HomePage from "./ProtectedRoute/HomePage/HomePage";
import PasswordResetPage from "./PasswordResetPage/PasswordResetPage";
import PasswordReset from "../features/PasswordReset/PasswordReset";
import VerifyOTPPage from "../features/PasswordReset/Pages/VerifyOTPPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="reset-password" element={<PasswordResetPage />}>
          <Route index element={<PasswordReset />} />
          <Route path="verify-otp" element={<VerifyOTPPage />} />
          <Route path="new-password" element={<></>} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<HomePage />} />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
