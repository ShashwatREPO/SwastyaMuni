import React from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
