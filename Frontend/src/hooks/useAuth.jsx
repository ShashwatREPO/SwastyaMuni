import React, { useContext } from "react";
import { AuthContext } from "../app/AuthProvider";

export default function useAuth() {
  return useContext(AuthContext);
}
